import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminImageManager from "@/components/admin/AdminImageManager";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const AdminDashboard = () => {
  const { isAdmin, loading, signOut } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) navigate("/admin");
  }, [loading, isAdmin, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-rajdhani">Loading...</p>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="font-orbitron text-sm font-bold text-foreground">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm text-primary hover:underline font-rajdhani">View Site</a>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </header>

      <div className="container py-6">
        <Tabs defaultValue="signature">
          <TabsList className="mb-6">
            <TabsTrigger value="signature">Signature Work</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Items</TabsTrigger>
          </TabsList>

          <TabsContent value="signature">
            <AdminImageManager
              table="signature_items"
              title="Signature Work"
              hasCategories={false}
            />
          </TabsContent>

          <TabsContent value="gallery">
            <AdminImageManager
              table="gallery_images"
              categoryTable="gallery_categories"
              title="Gallery"
              hasCategories={true}
            />
          </TabsContent>

          <TabsContent value="delivery">
            <AdminImageManager
              table="delivery_items"
              categoryTable="delivery_categories"
              title="Online Delivery"
              hasCategories={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
