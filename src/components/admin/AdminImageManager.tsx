import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, Upload } from "lucide-react";

type TableName = "signature_items" | "gallery_images" | "delivery_items";
type CategoryTable = "gallery_categories" | "delivery_categories";

interface Props {
  table: TableName;
  categoryTable?: CategoryTable;
  title: string;
  hasCategories: boolean;
}

interface Category {
  id: string;
  name: string;
  sort_order: number;
}

interface ImageItem {
  id: string;
  image_url: string;
  label: string | null;
  sort_order: number;
  category_id?: string;
}

const AdminImageManager = ({ table, categoryTable, title, hasCategories }: Props) => {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>("");
  const [newLabel, setNewLabel] = useState("");
  const [newCatName, setNewCatName] = useState("");
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const fetchData = useCallback(async () => {
    if (hasCategories && categoryTable) {
      const { data: cats } = await (supabase.from(categoryTable) as any).select("*").order("sort_order");
      if (cats) {
        setCategories(cats);
        if (!selectedCat && cats.length > 0) setSelectedCat(cats[0].id);
      }
    }

    let query = (supabase.from(table) as any).select("*").order("sort_order");
    if (hasCategories && selectedCat) {
      query = query.eq("category_id", selectedCat);
    }
    const { data } = await query;
    if (data) setItems(data as ImageItem[]);
  }, [table, categoryTable, hasCategories, selectedCat]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const ext = file.name.split(".").pop();
    const path = `${table}/${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, file);

    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from("site-images").getPublicUrl(path);

    const insertData: any = {
      image_url: publicUrl,
      label: newLabel || null,
      sort_order: items.length,
    };
    if (hasCategories && selectedCat) {
      insertData.category_id = selectedCat;
    }

    const { error } = await (supabase.from(table) as any).insert(insertData);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Image added!" });
      setNewLabel("");
      fetchData();
    }
    setUploading(false);
  };

  const handleDelete = async (item: ImageItem) => {
    // Extract path from URL for storage deletion
    const urlParts = item.image_url.split("/site-images/");
    if (urlParts[1]) {
      await supabase.storage.from("site-images").remove([urlParts[1]]);
    }
    await (supabase.from(table) as any).delete().eq("id", item.id);
    toast({ title: "Deleted" });
    fetchData();
  };

  const addCategory = async () => {
    if (!newCatName.trim() || !categoryTable) return;
    const { error } = await (supabase.from(categoryTable) as any).insert({
      name: newCatName.trim(),
      sort_order: categories.length,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setNewCatName("");
      fetchData();
    }
  };

  const deleteCategory = async (id: string) => {
    if (!categoryTable) return;
    await (supabase.from(categoryTable) as any).delete().eq("id", id);
    if (selectedCat === id) setSelectedCat("");
    fetchData();
  };

  return (
    <div>
      <h2 className="font-orbitron text-lg font-bold text-foreground mb-4">{title}</h2>

      {/* Category management */}
      {hasCategories && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-rajdhani font-semibold transition ${
                    selectedCat === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </button>
                <button onClick={() => deleteCategory(cat.id)} className="text-destructive hover:opacity-70">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="New category" value={newCatName} onChange={(e) => setNewCatName(e.target.value)} className="max-w-xs" />
            <Button variant="outline" size="sm" onClick={addCategory}>
              <Plus size={14} /> Add
            </Button>
          </div>
        </div>
      )}

      {/* Upload */}
      <div className="bg-card border border-border rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1">
            <label className="text-sm text-muted-foreground font-rajdhani mb-1 block">Label (optional)</label>
            <Input placeholder="e.g. Custom Build" value={newLabel} onChange={(e) => setNewLabel(e.target.value)} />
          </div>
          <label className="cursor-pointer">
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition">
              <Upload size={16} /> {uploading ? "Uploading..." : "Upload Image"}
            </div>
          </label>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.id} className="relative group rounded-lg overflow-hidden aspect-square bg-secondary">
            <img src={item.image_url} alt={item.label || ""} className="w-full h-full object-cover" />
            {item.label && (
              <span className="absolute bottom-2 left-2 bg-background/80 text-foreground text-xs px-2 py-0.5 rounded font-rajdhani">
                {item.label}
              </span>
            )}
            <button
              onClick={() => handleDelete(item)}
              className="absolute top-2 right-2 bg-destructive text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground font-rajdhani py-8">
            No images yet. Upload one above.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminImageManager;
