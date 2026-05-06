import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const servicesList = [
  'Bridal Makeover',
  'Party Makeover',
  'Hair Transformation',
  'Skin Wellness Spa',
  'Nail Artistry',
  'Lash Extensions'
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-32 bg-neutral-50 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-center bg-white p-16 rounded-[60px] shadow-2xl border border-neutral-100"
        >
          <div className="w-24 h-24 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl font-serif text-neutral-900 mb-6 tracking-tight">Request Received</h2>
          <p className="text-neutral-500 text-xl mb-12 font-light leading-relaxed">
            Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. 
            A luxury coordinator will reach out to confirm your session.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-neutral-950 font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-200 transition-all"
          >
            New Reservation
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 bg-neutral-50 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-200/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block"
            >
              Private Booking
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-neutral-950 mb-10 leading-[1.1] tracking-tight text-balance"
            >
              Begin Your <br />
              <span className="italic text-neutral-500 font-light">Transformation</span>
            </motion.h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-12 max-w-md font-light">
              Experience the pinnacle of beauty artistry. Secure your exclusive session with our leading stylists and artists.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-neutral-950 shadow-md group-hover:bg-neutral-950 group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold mb-1">Direct Line</p>
                  <p className="text-xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-neutral-950 shadow-md group-hover:bg-neutral-950 group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold mb-1">Inquiries</p>
                  <p className="text-xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors">concierge@panache.in</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl border border-neutral-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-5 bg-neutral-50/50 border border-neutral-100 rounded-3xl focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all outline-none font-light"
                    placeholder="Enter your name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold ml-1">Phone</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-6 py-5 bg-neutral-50/50 border border-neutral-100 rounded-3xl focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all outline-none font-light"
                    placeholder="+91"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold ml-1">Experience</label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-6 py-5 bg-neutral-50/50 border border-neutral-100 rounded-3xl focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all outline-none appearance-none font-light"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Service...</option>
                    {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-300">↓</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold ml-1">Selected Date</label>
                  <input
                    required
                    type="date"
                    className="w-full px-6 py-5 bg-neutral-50/50 border border-neutral-100 rounded-3xl focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all outline-none font-light"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold ml-1">Time Preference</label>
                  <input
                    required
                    type="time"
                    className="w-full px-6 py-5 bg-neutral-50/50 border border-neutral-100 rounded-3xl focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all outline-none font-light"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#000' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-neutral-950 text-white py-6 rounded-3xl font-bold uppercase tracking-[0.3em] text-xs shadow-xl transition-all"
              >
                Request Session
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
