import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold tracking-tight">PANACHE</h3>
            <p className="text-neutral-500 leading-relaxed font-light">
              Redefining bridal beauty and luxury salon experiences through 
              artistic precision and premium care.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-8 text-neutral-400">Services</h4>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors">Bridal Makeover</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Party Makeup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hair Styling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nail Extension</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skin Wellness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-8 text-neutral-400">Salon Locations</h4>
            <div className="space-y-6 text-neutral-500 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-neutral-400" />
                <p>123 Luxury Lane, Civil Lines, <br />Nagpur, Maharashtra 440001</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="shrink-0 text-neutral-400" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="shrink-0 text-neutral-400" />
                <p>hello@panache.in</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-8 text-neutral-400">Newsletter</h4>
            <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
              Subscribe to receive exclusive offers and beauty tips.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-neutral-900 border-none rounded-xl py-4 pl-4 pr-12 text-sm focus:ring-1 focus:ring-neutral-700 outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-neutral-950 rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-xs uppercase tracking-widest">
          <p>© 2024 Panache Makeovers. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <Shield size={12} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
