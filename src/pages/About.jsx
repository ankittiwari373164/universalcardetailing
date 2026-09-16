import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Users, Sparkles, Wrench, HeartHandshake } from 'lucide-react';
import { brand, ppfBrands, ceramicBrands } from '../data/mock';
import useReveal from '../hooks/useReveal';
import StatsRow from '../components/StatsRow';
import studioPhoto from '../assets/car-studio-wide.jpeg';

export default function About() {
  const rootRef = useReveal();
  return (
    <div ref={rootRef} className="bg-black">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="section-pill mb-6"><Sparkles className="w-3 h-3" /> About Us</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]"><span className="silver-text">Three Decades of </span><span className="gold-text">Automotive Passion.</span></h1>
            <p className="text-neutral-300 mt-6 text-lg leading-relaxed">Universal Car Detailing Studio was born from a simple obsession — to treat every car as if it were our own. With 30 years of hands-on expertise in the automobile industry, we've grown into Thane's most trusted paint protection and detailing studio.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-gold px-7 py-3.5 rounded-full inline-flex items-center gap-2">Explore Services <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="btn-ghost px-7 py-3.5 rounded-full">Visit the Studio</Link>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img src={studioPhoto} alt="studio" className="rounded-3xl border border-yellow-500/30 object-cover w-full h-[420px]" />
            <div className="absolute -bottom-6 -left-6 bg-black border border-yellow-500/40 rounded-2xl px-6 py-4 shadow-[0_20px_60px_rgba(245,197,24,0.25)]">
              <div className="font-display text-4xl gold-text">30+</div>
              <div className="text-xs tracking-[0.3em] text-neutral-400">YEARS OF LEGACY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <div className="section-pill mb-5">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight"><span className="silver-text">From a Small Workshop </span><span className="gold-text">to Thane's Premier Studio.</span></h2>
          </div>
          <div className="reveal space-y-5 text-neutral-300 leading-relaxed">
            <p>What began as a small automobile workshop three decades ago has today evolved into a full-fledged premium detailing studio. Along the way, we've adopted every new advancement — from traditional waxing to nano-ceramics, from vinyl wraps to self-healing paint protection films, and now to next-generation graphene and borophene coatings.</p>
            <p>Every car that enters our climate-controlled studio is treated with obsessive precision. Our technicians are factory-trained and certified by every brand we install, and we stock only serialised, authenticated products — each backed by a written warranty.</p>
            <p>Clean. Protect. Enhance — these three words guide every decision we make.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 reveal">
          <StatsRow years={brand.years} cars={brand.cars} warranty={brand.warranty} rating={brand.rating} />
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="section-pill mb-4">Our Values</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Craftsmanship. </span><span className="gold-text">Honesty. Precision.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Premium Products Only', desc: 'We stock only globally recognised, authenticated films and coatings — no compromise on quality.' },
              { icon: ShieldCheck, title: 'Written Warranty', desc: 'Every job ships with a written warranty document. No fine print, no debates.' },
              { icon: Users, title: 'Certified Team', desc: 'Every technician is factory-trained and certified by the brands we install.' },
              { icon: Wrench, title: 'Dust-Free Studio', desc: 'A climate-controlled, positive-pressure studio ensures flawless application.' },
              { icon: HeartHandshake, title: 'Transparent Pricing', desc: 'No hidden costs, no upselling nonsense. Just honest recommendations.' },
              { icon: Sparkles, title: 'Handover Perfection', desc: 'Every car is inspected under studio lighting and delivered in showroom condition.' }
            ].map((v, i) => (
              <div key={i} className="reveal p-8 rounded-2xl border border-yellow-500/15 bg-gradient-to-br from-neutral-950 to-black card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                <v.icon className="w-8 h-8 text-yellow-400 mb-5" />
                <h3 className="text-xl font-semibold silver-text mb-3">{v.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="relative py-24 border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="section-pill mb-4">Brand Partnerships</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Only the </span><span className="gold-text">Finest Partners.</span></h2>
          </div>
          <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-3">
            {[...ppfBrands, ...ceramicBrands].map((b, i) => (
              <div key={i} className="h-24 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center font-display text-lg silver-text hover:scale-105 transition">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Visit Our </span><span className="gold-text">Thane Studio.</span></h2>
          <p className="text-neutral-400 mt-5 max-w-2xl mx-auto">Walk in for a free consultation — no appointment needed. We'll assess your car and give an honest recommendation.</p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-full inline-flex items-center gap-2 mt-8">Get Directions <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
