import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = ["Premium finishing", "Unique custom builds", "LED & lighting expertise", "Clean workshop", "Fast delivery", "Friendly customer communication"];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-card">
    <div className="container max-w-3xl mx-auto text-center">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-foreground">
        About <span className="text-primary neon-text-cyan">Us</span>
      </motion.h2>

      <p className="font-rajdhani text-lg text-muted-foreground mb-8 leading-relaxed">
        Bikers Choice Kakinada delivers premium custom bike builds, LED mods, wraps, paint jobs, helmets, tyres, parts and performance-focused styling. With 4+ years of experience and a strong Instagram community of 4.8k followers, we focus on high-end customization and aggressive street-bike aesthetics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
        {highlights.map((h, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-2">
            <Check size={18} className="text-primary flex-shrink-0" />
            <span className="font-rajdhani text-foreground font-semibold">{h}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
