import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { brand, services } from '../data/mock';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-yellow-500/15 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={brand.logo} alt="Universal" className="h-14 w-14 rounded-full ring-2 ring-yellow-500/60 object-cover" />
              <div>
                <div className="font-display text-lg silver-text">UNIVERSAL</div>
                <div className="text-[10px] tracking-[0.3em] text-yellow-500 font-semibold">CAR DETAILING STUDIO</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">Thane's premium car detailing studio. Backed by 30 years of hands-on expertise in the automobile industry.</p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-yellow-400 tracking-[0.25em] text-xs font-semibold mb-5">EXPLORE</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 tracking-[0.25em] text-xs font-semibold mb-5">SERVICES</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-yellow-400 transition">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 tracking-[0.25em] text-xs font-semibold mb-5">GET IN TOUCH</h4>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" /> {brand.address}</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" /> {brand.phone}</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" /> {brand.email}</li>
              <li className="flex gap-3"><Clock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" /> {brand.hours}</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-14 mb-6 opacity-40" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Universal Car Detailing Studio. All rights reserved.</div>
          <div className="tracking-[0.3em] text-yellow-500/70">CLEAN · PROTECT · ENHANCE</div>
        </div>
      </div>
    </footer>
  );
}
