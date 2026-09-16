import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Droplets, Sparkles, Wand2, Car } from 'lucide-react';
import { services } from '../data/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { ppf: ShieldCheck, ceramic: Droplets, graphene: Sparkles, borophene: Wand2, 'interior-detailing': Car };

export default function Services() {
  const rootRef = useReveal();
  return (
    <div ref={rootRef} className="bg-black">
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-pill mb-6 animate-fade-up">Our Services</div>
          <h1 className="font-display text-5xl md:text-7xl animate-fade-up leading-tight"><span className="silver-text">Premium Care. </span><span className="gold-text">Perfection in Every Detail.</span></h1>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto animate-fade-up">From invisible paint protection to next-gen coatings and immaculate interior care — our services are engineered to preserve the beauty and value of your car.</p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {services.map((s, i) => {
            const Icon = iconMap[s.slug];
            const reverse = i % 2 === 1;
            return (
              <div key={s.slug} className="reveal grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-neutral-950 to-black rounded-3xl border border-yellow-500/15 overflow-hidden p-6 md:p-10 card-hover">
                <div className={`relative h-72 md:h-96 rounded-2xl overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1200ms]" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-full bg-black border border-yellow-500/40 flex items-center justify-center"><Icon className="w-5 h-5 text-yellow-400" /></div>
                    <div className="text-yellow-500 text-xs tracking-[0.3em]">{s.short.toUpperCase()}</div>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl mb-3"><span className="silver-text">{s.title}</span></h2>
                  <p className="text-yellow-400/90 italic mb-4">{s.tagline}</p>
                  <p className="text-neutral-300 leading-relaxed mb-6">{s.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-300"><span className="h-1.5 w-1.5 rounded-full bg-yellow-400" /> {f}</li>
                    ))}
                  </ul>
                  <Link to={`/services/${s.slug}`} className="btn-gold px-6 py-3 rounded-full inline-flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
