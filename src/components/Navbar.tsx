import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Bikers Choice Kakinada" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
          <span className="font-orbitron text-sm font-bold text-foreground hidden sm:block">BIKERS CHOICE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-rajdhani text-sm font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold font-rajdhani neon-glow-cyan hover:opacity-90 transition">
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border py-4 px-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-rajdhani text-lg font-semibold text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="block bg-primary text-primary-foreground px-4 py-3 rounded-md text-center font-bold font-rajdhani neon-glow-cyan">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
