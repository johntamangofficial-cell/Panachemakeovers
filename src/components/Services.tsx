import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart, Star, Fingerprint } from 'lucide-react';

const services = [
  {
    title: 'Bridal & Party Makeover',
    description: 'Transformative beauty for your most special moments with expert precision.',
    icon: <Sparkles className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
    tags: ['Bridal', 'Luxury', 'Artistry']
  },
  {
    title: 'Hair Styling & Treatments',
    description: 'Hair that makes heads turn, from clinical treatments to artistic styling.',
    icon: <Scissors className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    tags: ['Cut', 'Color', 'Styling']
  },
  {
    title: 'Nail Art & Extension',
    description: 'Nails sculpted to perfection with artistic designs and premium finishes.',
    icon: <Heart className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1604654894610-df490998710c?q=80&w=1974&auto=format&fit=crop',
    tags: ['Extensions', 'Gel Art', 'Spa']
  },
  {
    title: 'Beauty & Skin Wellness',
    description: 'Revitalize your skin with our professional spa treatments and facials.',
    icon: <Star className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1570172619235-ef519471475c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Glow', 'Hydrate', 'Refresh']
  },
  {
    title: 'Eyelashes Extensions',
    description: 'Eyes framed in forever beauty with our high-end lash extension services.',
    icon: <Fingerprint className="text-neutral-400" />,
    image: 'https://images.unsplash.com/photo-1582236329469-807d545d8b7b?q=80&w=2070&auto=format&fit=crop',
    tags: ['Volume', 'Classic', 'Natural']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-4 block">Our Specialties</span>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-950 leading-tight">
              Curated Services For <br />
              <span className="italic text-neutral-600">The Modern Muse</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">
              We offer a full spectrum of beauty services designed to pamper and perfect every detail.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-50 rounded-2xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-neutral-950 mb-2 group-hover:text-neutral-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
