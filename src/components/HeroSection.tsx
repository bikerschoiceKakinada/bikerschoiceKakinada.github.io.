import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import bike1 from "@/assets/bike1.png";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img src={bike1} alt="Custom bike" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="container relative z-10 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="Bikers Choice Kakinada" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary mx-auto mb-6 neon-glow-cyan" />

        <h1 className="font-orbitron text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
          Premium Bike Modification & Custom Builds in <span className="text-primary neon-text-cyan">Kakinada</span>
        </h1>

        <p className="font-rajdhani text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          We create aggressive, premium, custom-styled bikes with performance upgrades, LED mods & precision finishing.
        </p>

        {/* Location badge */}
        <a href="https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-6 text-sm text-muted-foreground hover:text-primary transition">
          <MapPin size={16} className="text-accent" />
          Kakinada, Andhra Pradesh – Get Directions
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-rajdhani font-bold text-lg neon-glow-cyan hover:opacity-90 transition">
            <MessageCircle size={20} /> Tap to Chat on WhatsApp
          </a>
          <a href="tel:+918523876978" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-rajdhani font-bold text-lg neon-glow-red hover:opacity-90 transition">
            <Phone size={20} /> Call Now
          </a>
        </div>

        {/* Instagram badge */}
        <a href="https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-rajdhani font-semibold text-sm hover:opacity-90 transition animate-pulse-neon">
          📸 Follow us on Instagram – 4,800+ riders
        </a>

        {/* Online Delivery button */}
        <div className="mt-4">
          <a href="#delivery" className="inline-flex items-center gap-2 bg-card border border-primary text-primary px-5 py-2 rounded-full font-rajdhani font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition">
            🚚 Online Delivery Available
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
