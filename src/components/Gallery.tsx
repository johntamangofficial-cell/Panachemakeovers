import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503910368127-b4428c04a221?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519415510236-8559b198b82e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1457913543247-9b2161b4979b?q=80&w=2070&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-4 block">Visual Stories</span>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-950 mb-6">Our Masterpieces</h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed font-light">
            A glimpse into the elegance we create every day. See our latest transformations and bridal miracles.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-crosshair"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-12 py-4 rounded-full border border-neutral-200 text-neutral-950 font-medium uppercase tracking-widest hover:bg-neutral-50 transition-colors">
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
