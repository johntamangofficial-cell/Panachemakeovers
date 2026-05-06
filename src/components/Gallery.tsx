import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop',
    title: 'Bridal Glow'
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop',
    title: 'Precision Styling'
  },
  {
    src: 'https://images.unsplash.com/photo-1620331311520-246422ff83fb?q=80&w=1974&auto=format&fit=crop',
    title: 'Artistic Nails'
  },
  {
    src: 'https://images.unsplash.com/photo-1481325545291-943f4eee1ad9?q=80&w=2052&auto=format&fit=crop',
    title: 'Elegant Makeup'
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop',
    title: 'Royal Spa'
  },
  {
    src: 'https://images.unsplash.com/photo-1596462502278-27bfad450216?q=80&w=2080&auto=format&fit=crop',
    title: 'Classic Beauty'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block"
            >
              The Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-neutral-950 leading-tight tracking-tight"
            >
              Artistry In <br />
              <span className="italic text-neutral-500 font-light">Every Detail</span>
            </motion.h2>
          </div>
          <div className="hidden md:block pb-4 border-b border-neutral-100">
            <p className="text-neutral-400 font-light max-w-xs">
              Explore our curation of bridal masterpieces and artistic transformations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] group"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/30 transition-all duration-700 flex flex-col justify-end p-10">
                <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full border border-neutral-200 text-neutral-950 font-medium uppercase tracking-widest hover:bg-neutral-950 hover:text-white transition-all shadow-sm"
          >
            Explore Full Lookbook
          </motion.button>
        </div>
      </div>
    </section>
  );
}
