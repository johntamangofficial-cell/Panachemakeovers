import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image with refined Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Bridal Transformation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-neutral-300 uppercase text-xs font-semibold mb-8 block"
          >
            NAGPUR'S PREMIER MAKEOVER STUDIO
          </motion.span>
          <h1 className="text-6xl md:text-[10rem] font-serif text-white mb-8 leading-[0.9] tracking-tighter">
            Timeless <br />
            <span className="italic font-light text-neutral-400">Artistry</span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Crafting bespoke bridal looks and sophisticated styles that 
            celebrate your unique essence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-neutral-950 px-12 py-5 rounded-full font-medium uppercase tracking-widest flex items-center gap-2 group shadow-2xl"
            >
              Book Transformation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-neutral-500 text-[9px] uppercase tracking-[0.4em] rotate-90 mb-4">Explore</span>
        <motion.div
          animate={{ height: [0, 60, 0], y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0"
        />
      </motion.div>
    </section>
  );
}
