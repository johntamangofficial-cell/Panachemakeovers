import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart, Star, Fingerprint } from 'lucide-react';

const services = [
  {
    title: 'Signature Bridal Transformation',
    description: 'Bespoke bridal artistry including HD and Airbrush techniques tailored for your big day.',
    icon: <Sparkles className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
    tags: ['Bridal', 'High-Def', 'Luxury']
  },
  {
    title: 'Avant-Garde Hair Styling',
    description: 'From clinical scalp treatments to celebrity-style extensions and avant-garde styling.',
    icon: <Scissors className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop',
    tags: ['Styling', 'Color', 'Extensions']
  },
  {
    title: 'Sculpted Nail Artistry',
    description: 'Precision nail sculpting and artistic gel designs using premium international brands.',
    icon: <Heart className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1600057081960-f1c97aee489c?q=80&w=1974&auto=format&fit=crop',
    tags: ['3D Art', 'Nail Spa', 'Sculpting']
  },
  {
    title: 'Luminous Skin Rituals',
    description: 'Advanced facials and clinical skin wellness rituals to achieve the perfect bridal glow.',
    icon: <Star className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    tags: ['Rituals', 'Detox', 'Glow']
  },
  {
    title: 'Lash & Brow Design',
    description: 'Enhance your gaze with semi-permanent volume lashes and expert brow architecture.',
    icon: <Fingerprint className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1510590333219-d7d0002181ac?q=80&w=2070&auto=format&fit=crop',
    tags: ['Volume', 'Microblading', 'Design']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block"
            >
              The Signature Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-neutral-950 leading-[1.1] tracking-tight"
            >
              Curated Services For <br />
              <span className="italic text-neutral-500 font-light underline decoration-neutral-200 underline-offset-8">The Modern Muse</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] mb-8 shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/30 transition-colors duration-700" />
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-400 border border-neutral-100 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-serif text-neutral-900 mb-4 tracking-tight group-hover:text-neutral-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed font-light text-base">
                  {service.description}
                </p>
                <div className="mt-8 overflow-hidden h-[1px] w-full bg-neutral-100">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full w-full bg-neutral-900"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
