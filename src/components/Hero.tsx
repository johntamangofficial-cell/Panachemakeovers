import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop"
            alt="Makeup Salon"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-neutral-400 uppercase tracking-[0.4em] text-sm font-medium mb-6 block">
            Where Beauty is Above Everything
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
            Elevate Your <br />
            <span className="italic text-neutral-300">Natural Radiance</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Professional makeup artistry, hair styling, and skin wellness designed 
            to bring out your most confident self.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-neutral-950 px-10 py-4 rounded-full font-medium uppercase tracking-widest flex items-center gap-2 group"
            >
              Book Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-medium uppercase tracking-widest transition-all"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] vertical-rl rotate-180">Scroll</span>
        <motion.div
          animate={{ height: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-neutral-600"
        />
      </div>
    </section>
  );
}
