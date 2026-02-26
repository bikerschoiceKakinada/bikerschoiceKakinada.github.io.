import { useState } from "react";
import { motion } from "framer-motion";
import bike1 from "@/assets/bike1.png";
import bike2 from "@/assets/bike2.png";
import bike3 from "@/assets/bike3.png";
import bike4 from "@/assets/bike4.png";
import bike5 from "@/assets/bike5.png";
import helmets from "@/assets/helmets.jpeg";
import tyres from "@/assets/tyres.jpeg";

const allImages = [
  { src: bike2, cat: "Custom Builds" },
  { src: bike3, cat: "Custom Builds" },
  { src: bike4, cat: "LED & Neon Mods" },
  { src: bike5, cat: "Wraps & Paint" },
  { src: bike1, cat: "Custom Builds" },
  { src: helmets, cat: "Workshop Shots" },
  { src: tyres, cat: "Workshop Shots" },
];

const cats = ["All", "Custom Builds", "LED & Neon Mods", "Wraps & Paint", "Workshop Shots"];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.cat === filter);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Our <span className="text-primary neon-text-cyan">Gallery</span>
        </motion.h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full font-rajdhani font-semibold text-sm transition ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <motion.div key={`${img.src}-${i}`} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden rounded-lg aspect-square">
              <img src={img.src} alt={img.cat} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
