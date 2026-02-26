import { motion } from "framer-motion";
import bike1 from "@/assets/bike1.png";
import bike2 from "@/assets/bike2.png";
import bike3 from "@/assets/bike3.png";
import bike4 from "@/assets/bike4.png";
import bike5 from "@/assets/bike5.png";
import helmets from "@/assets/helmets.jpeg";

const works = [
  { img: bike2, label: "Custom Wrap" },
  { img: bike3, label: "Custom Build" },
  { img: bike4, label: "LED & Neon" },
  { img: bike5, label: "Custom Paint" },
  { img: bike1, label: "Premium Build" },
  { img: helmets, label: "Helmets" },
];

const SignatureWork = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
        Our Signature <span className="text-primary neon-text-cyan">Custom Work</span>
      </motion.h2>
      <p className="text-center text-muted-foreground font-rajdhani text-lg mb-10">Transformations that turn heads on every street</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {works.map((w, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative group overflow-hidden rounded-lg aspect-[3/4]">
            <img src={w.img} alt={w.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 font-orbitron text-xs md:text-sm font-bold text-primary">{w.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Follower highlight bar */}
      <div className="mt-8 bg-secondary border border-border rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-rajdhani text-lg text-foreground font-semibold">🔥 4,800+ riders follow our build journey on Instagram</p>
        <a href="https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-rajdhani font-bold text-sm hover:opacity-90 transition whitespace-nowrap">
          Follow on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default SignatureWork;
