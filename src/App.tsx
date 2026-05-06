import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-neutral-900 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us / Value Proposition */}
        <section className="py-24 bg-neutral-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <span className="text-4xl font-serif block text-neutral-900">10+</span>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold block">Years of Excellence</span>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px] mx-auto">Providing star-studded beauty & celebrity makeup expertise across the region.</p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-serif block text-neutral-900">5k+</span>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold block">Happy Brides</span>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px] mx-auto">Our clients' words reflect our dedication to making every day feel like a fairytale.</p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-serif block text-neutral-900">Luxury</span>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold block">Experience</span>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px] mx-auto">Premium hospitality and spa wellness in a modern, serene environment.</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Cinematic Quote Section */}
        <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfad450216?q=80&w=2080&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-neutral-950" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-serif text-white mb-8 italic"
            >
              "Confidence is the best makeup, <br className="hidden md:block"/> but a little panache never hurts."
            </motion.p>
            <div className="w-12 h-px bg-neutral-700 mx-auto" />
          </div>
        </section>

        <Gallery />
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}

