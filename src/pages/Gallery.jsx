import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { X } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const rootRef = useReveal();
  return (
    <div ref={rootRef} className="bg-black">
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-pill mb-6 animate-fade-up">Our Work</div>
          <h1 className="font-display text-5xl md:text-7xl animate-fade-up"><span className="silver-text">The Proof is </span><span className="gold-text">in the Finish.</span></h1>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto animate-fade-up">Every panel, every edge — done with obsessive precision. A glimpse into the transformations we deliver.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <button key={i} onClick={() => setOpen(item.src)} className="reveal group relative aspect-square rounded-2xl overflow-hidden border border-yellow-500/15 card-hover bg-neutral-950" style={{ transitionDelay: `${i * 40}ms` }}>
              <img
                src={item.src}
                alt={`gallery-${i}`}
                className={`w-full h-full group-hover:scale-110 transition-transform duration-[1200ms] ${item.type === 'board' ? 'object-contain p-3' : 'object-cover'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-xs tracking-[0.25em] text-yellow-400">UNIVERSAL STUDIO</div>
                <div className="text-sm text-white">Detail #{String(i + 1).padStart(3, '0')}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 h-11 w-11 rounded-full bg-yellow-500 text-black flex items-center justify-center" onClick={() => setOpen(null)}><X className="w-5 h-5" /></button>
          <img src={open} alt="preview" className="max-h-[85vh] max-w-full rounded-2xl border border-yellow-500/30" />
        </div>
      )}
    </div>
  );
}
