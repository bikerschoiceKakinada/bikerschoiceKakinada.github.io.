import { motion } from "framer-motion";

const SocialSection = () => (
  <section className="py-16 md:py-24">
    <div className="container text-center">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-orbitron text-2xl md:text-3xl font-bold mb-2 text-foreground">
        Follow Our <span className="text-primary neon-text-cyan">Build Journey</span>
      </motion.h2>
      <p className="text-muted-foreground font-rajdhani text-lg mb-3">We post daily custom work, transformations & delivery updates.</p>
      <p className="text-foreground font-rajdhani text-xl font-bold mb-10">Join 4,800+ riders following us.</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <a href="https://www.instagram.com/bikers_choice_kakinada?igsh=MXN4NHd0bnRzY2p3dg==" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-lg font-rajdhani font-bold text-lg hover:opacity-90 transition text-center">
          📸 Instagram
        </a>
        <a href="#" className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-rajdhani font-bold text-lg hover:opacity-90 transition text-center">
          👍 Facebook
        </a>
        <a href="https://wa.me/918523876978" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white px-6 py-4 rounded-lg font-rajdhani font-bold text-lg hover:opacity-90 transition text-center">
          💬 WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default SocialSection;
