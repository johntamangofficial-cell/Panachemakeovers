import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "Bride",
    text: "The team at Panache made me look exactly how I had dreamed for my wedding. The HD makeup was so light yet flawless. Truly an artist's touch!",
    rating: 5
  },
  {
    name: "Dr. Ananya Verma",
    role: "Regular Client",
    text: "Their hair clinical treatments saved my damaged hair. The atmosphere is so serene, it's like a peaceful getaway in the middle of Nagpur.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Event Organiser",
    text: "Professional, punctual, and highly skilled. Their celebrity makeup expertise is evident in every stroke. Highly recommended for party makeovers.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <span className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Voices of Beauty</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.1]">
              Loved By <br />
              <span className="italic text-neutral-400">Our Muses</span>
            </h2>
            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-neutral-900 bg-neutral-800" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-neutral-400 font-light">Join our 5,000+ happy clients</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 flex gap-8 overflow-hidden">
            <motion.div 
              animate={{ x: [0, -400] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8 shrink-0"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[350px] bg-neutral-900/50 backdrop-blur-xl p-10 rounded-[40px] border border-neutral-800/50">
                  <MessageSquareQuote className="text-neutral-700 mb-8" size={32} />
                  <p className="text-lg leading-relaxed font-light mb-8 italic text-neutral-300">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{t.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">{t.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
