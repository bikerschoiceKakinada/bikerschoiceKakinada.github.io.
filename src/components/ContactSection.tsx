import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-card">
    <div className="container max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
        Get In <span className="text-primary neon-text-cyan">Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Contact cards */}
        <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="bg-secondary border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary transition group">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle size={22} className="text-white" />
          </div>
          <div>
            <p className="font-orbitron text-sm font-bold text-foreground">WhatsApp</p>
            <p className="font-rajdhani text-muted-foreground group-hover:text-primary transition">Tap to Chat</p>
          </div>
        </a>

        <a href="tel:+918523876978" className="bg-secondary border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary transition group">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <Phone size={22} className="text-white" />
          </div>
          <div>
            <p className="font-orbitron text-sm font-bold text-foreground">Call Us</p>
            <p className="font-rajdhani text-muted-foreground group-hover:text-primary transition">+91 85238 76978</p>
          </div>
        </a>

        <a href="mailto:bikerschoicekakinada390@gmail.com" className="bg-secondary border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary transition group">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <Mail size={22} className="text-white" />
          </div>
          <div>
            <p className="font-orbitron text-sm font-bold text-foreground">Email</p>
            <p className="font-rajdhani text-muted-foreground group-hover:text-primary transition text-sm">bikerschoicekakinada390@gmail.com</p>
          </div>
        </a>

        <a href="https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==" target="_blank" rel="noopener noreferrer" className="bg-secondary border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary transition group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">📸</span>
          </div>
          <div>
            <p className="font-orbitron text-sm font-bold text-foreground">Instagram</p>
            <p className="font-rajdhani text-muted-foreground group-hover:text-primary transition">@bikers_choice_kakinada</p>
          </div>
        </a>
      </div>

      {/* Hours & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-secondary border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={20} className="text-primary" />
            <p className="font-orbitron text-sm font-bold text-foreground">Working Hours</p>
          </div>
          <p className="font-rajdhani text-foreground">Mon – Sat: 9 AM – 8 PM</p>
          <p className="font-rajdhani text-accent font-semibold">Sunday: Closed</p>
        </div>

        <a href="https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="bg-secondary border border-border rounded-xl p-6 hover:border-primary transition group">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-accent" />
            <p className="font-orbitron text-sm font-bold text-foreground">Location</p>
          </div>
          <p className="font-rajdhani text-muted-foreground group-hover:text-primary transition">Kakinada, Andhra Pradesh</p>
          <p className="font-rajdhani text-primary text-sm font-semibold mt-1">📍 Get Directions →</p>
        </a>
      </div>

      {/* Google review CTA */}
      <div className="bg-secondary border border-primary/30 rounded-xl p-6 text-center">
        <p className="font-orbitron text-sm font-bold text-foreground mb-2">⭐ Rate Us on Google</p>
        <p className="font-rajdhani text-muted-foreground mb-4">Share your experience and help other riders find us!</p>
        <a href="https://maps.app.goo.gl/hsZwRRgjuvdUguUTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-rajdhani font-bold hover:opacity-90 transition">
          Leave a Google Review
        </a>
      </div>

      {/* Map */}
      <div className="mt-8 rounded-xl overflow-hidden border border-border">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.5!2d82.232049!3d16.972073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU4JzE5LjUiTiA4MsKwMTMnNTUuNCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bikers Choice Kakinada Location" />
      </div>
    </div>
  </section>
);

export default ContactSection;
