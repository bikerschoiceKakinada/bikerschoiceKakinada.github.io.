import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import helmets from "@/assets/helmets.jpeg";
import tyres from "@/assets/tyres.jpeg";
import bike5 from "@/assets/bike5.png";

const deliveryItems = [
  { img: helmets, label: "Helmets" },
  { img: tyres, label: "Tyres" },
  { img: bike5, label: "Bike Parts" },
];

const DeliverySection = () => (
  <section id="delivery" className="py-16 md:py-24">
    <div className="container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
        🚚 Online <span className="text-primary neon-text-cyan">Delivery</span> Available
      </motion.h2>
      <p className="text-center text-muted-foreground font-rajdhani text-lg mb-10">We deliver helmets, tyres, parts & accessories to your doorstep</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {deliveryItems.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
            <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 font-orbitron text-sm font-bold text-primary">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-rajdhani font-bold text-lg neon-glow-cyan hover:opacity-90 transition">
          <MessageCircle size={20} /> Order on WhatsApp
        </a>
        <a href="tel:+918523876978" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-rajdhani font-bold text-lg neon-glow-red hover:opacity-90 transition">
          <Phone size={20} /> Call to Order
        </a>
      </div>
    </div>
  </section>
);

export default DeliverySection;
