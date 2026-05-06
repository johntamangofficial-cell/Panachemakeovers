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
    console.log('Form submitted:', formData);
    // This will be connected to Firebase later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-neutral-50 px-6">
        <div className="max-w-3xl mx-auto text-center bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={40} />
          </motion.div>
          <h2 className="text-3xl font-serif text-neutral-900 mb-4">Appointment Requested</h2>
          <p className="text-neutral-500 text-lg mb-8">
            Thank you, {formData.name}! We've received your request for {formData.service}. 
            Our team will contact you shortly to confirm your slot.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-neutral-950 font-medium uppercase tracking-widest border-b border-black"
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-neutral-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-4 block">Reservation</span>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-950 mb-8 leading-tight">
              Reserve Your <br />
              <span className="italic text-neutral-600">Transformation</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-10 max-w-md">
              Secure your preferred time for a luxury makeover experience. Walk-ins are welcome, 
              but appointments are recommended for our signature treatments.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-950 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Call Us Directly</p>
                  <p className="text-lg font-medium text-neutral-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-950 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-lg font-medium text-neutral-900">hello@panache.in</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-neutral-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={18} />
                    <input
                      required
                      type="text"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={18} />
                    <input
                      required
                      type="tel"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none"
                      placeholder="+91 00000 00000"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Select Service</label>
                <select
                  required
                  className="w-full px-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none appearance-none"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Choose a service...</option>
                  {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={18} />
                    <input
                      required
                      type="date"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300" size={18} />
                    <input
                      required
                      type="time"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Special Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-neutral-300" size={18} />
                  <textarea
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-neutral-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-medium uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all"
              >
                Confirm Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
