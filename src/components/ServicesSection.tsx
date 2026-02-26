import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const categories = [
  {
    title: "Customization",
    items: ["Full body modification", "Custom premium painting", "Wraps & sticker work", "Alloy customization"],
  },
  {
    title: "Lighting",
    items: ["LED strips", "Neon underglow", "Headlight upgrades", "Switch integration"],
  },
  {
    title: "Helmets & Parts",
    items: ["Premium helmets", "Tyres fitting", "Parts fitting", "Parts selling"],
  },
  {
    title: "Touring",
    items: ["Windshield setup", "Saddlebag installation", "Crash guard mounting"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
        Our <span className="text-primary neon-text-cyan">Services</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary border border-border rounded-xl p-6">
            <h3 className="font-orbitron text-lg font-bold text-accent neon-text-red mb-4">{cat.title}</h3>
            <ul className="space-y-2 mb-6">
              {cat.items.map((item, j) => (
                <li key={j} className="font-rajdhani text-foreground text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-rajdhani font-bold text-sm hover:opacity-90 transition">
              <MessageCircle size={16} /> Tap to Contact on WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
