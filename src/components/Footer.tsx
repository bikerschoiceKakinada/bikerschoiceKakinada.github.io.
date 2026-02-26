import logo from "@/assets/logo.jpeg";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Logo & name */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logo} alt="Bikers Choice Kakinada" className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
          <p className="font-orbitron text-sm font-bold text-foreground">BIKERS CHOICE KAKINADA</p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-orbitron text-xs font-bold text-primary mb-1">QUICK LINKS</p>
          {["Home", "Services", "Gallery", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-rajdhani text-muted-foreground hover:text-primary transition text-sm">{l}</a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-orbitron text-xs font-bold text-primary mb-1">CONTACT</p>
          <a href="tel:+918523876978" className="flex items-center gap-2 font-rajdhani text-muted-foreground hover:text-primary transition text-sm justify-center md:justify-start"><Phone size={14} /> +91 85238 76978</a>
          <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-rajdhani text-muted-foreground hover:text-primary transition text-sm justify-center md:justify-start"><MessageCircle size={14} /> WhatsApp</a>
          <a href="mailto:bikerschoicekakinada390@gmail.com" className="flex items-center gap-2 font-rajdhani text-muted-foreground hover:text-primary transition text-sm justify-center md:justify-start"><Mail size={14} /> Email</a>
          <a href="https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-rajdhani text-muted-foreground hover:text-primary transition text-sm justify-center md:justify-start"><MapPin size={14} /> Get Directions</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-orbitron text-xs font-bold text-primary mb-1">FOLLOW US</p>
          <a href="https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==" target="_blank" rel="noopener noreferrer" className="font-rajdhani text-muted-foreground hover:text-primary transition text-sm">📸 Instagram</a>
          <a href="#" className="font-rajdhani text-muted-foreground hover:text-primary transition text-sm">👍 Facebook</a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="font-rajdhani text-muted-foreground text-sm">© 2026 Bikers Choice Kakinada. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
