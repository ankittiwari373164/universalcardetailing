import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Droplets, Sparkles, Wand2, Car, Plus, Minus, Star } from 'lucide-react';
import { services, ppfBrands, ceramicBrands, faqs, testimonials, process, brand } from '../data/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { ppf: ShieldCheck, ceramic: Droplets, graphene: Sparkles, borophene: Wand2, 'interior-detailing': Car };

const benefits = {
  ppf: [
    { title: 'Paint Protection', desc: 'Guards against stone chips, scratches, bug splatter and road debris.' },
    { title: 'Self Healing', desc: 'Minor swirl marks and scratches disappear with heat.' },
    { title: 'High Gloss', desc: 'Enhances the shine and clarity of factory paint.' },
    { title: 'Stain Resistant', desc: 'Repels bird droppings, acids and industrial fallout.' },
    { title: 'UV Resistant', desc: 'Prevents fading and paint discolouration.' },
    { title: 'Anti Yellowing', desc: 'Crystal-clear film that stays clear for years.' },
    { title: 'Long Lasting', desc: 'Durable protection warrantied for up to 10 years.' }
  ],
  ceramic: [
    { title: 'Deep Gloss', desc: 'Mirror-depth shine no wax can match.' },
    { title: 'Water Repellent', desc: 'Hydrophobic surface repels water, dirt and grime.' },
    { title: 'UV Protection', desc: 'Blocks harmful rays that cause oxidation.' },
    { title: 'Chemical Resistant', desc: 'Guards against tree sap, bird droppings and acids.' },
    { title: 'Easy Maintenance', desc: 'Wash time drops dramatically — dirt slides off.' },
    { title: '9H Hardness', desc: 'Adds scratch resistance to your factory paint.' }
  ],
  graphene: [
    { title: 'Extreme Durability', desc: "Graphene's molecular strength outlasts ceramic." },
    { title: 'Reduced Water Spotting', desc: 'Anti-static properties minimise water marks.' },
    { title: 'Heat Dissipation', desc: 'Cooler paint surface — protects underlying finish.' },
    { title: 'Superior Hardness', desc: 'Enhanced scratch and mar resistance.' },
    { title: 'Long Lasting', desc: '5–10 years of worry-free protection.' },
    { title: 'Extreme Gloss', desc: 'Depth of colour like never before.' }
  ],
  borophene: [
    { title: 'Ultra Thin', desc: 'Nano-layer that bonds molecularly with paint.' },
    { title: 'Maximum Durability', desc: 'The hardest coating tier we offer.' },
    { title: 'High Heat Resistance', desc: 'Stable performance in extreme conditions.' },
    { title: 'Chemical Shield', desc: 'Complete guard against fallout and acids.' },
    { title: 'Anti-Static', desc: 'Repels dust — the car stays cleaner longer.' },
    { title: '10-Year Performance', desc: 'Our longest-lasting coating solution.' }
  ],
  'interior-detailing': [
    { title: 'Deep Steam Cleaning', desc: 'Sanitises every stitch, crevice and vent.' },
    { title: 'Leather Conditioning', desc: 'Restores suppleness and prevents cracking.' },
    { title: 'Fabric Shampooing', desc: 'Removes ground-in dirt and stains.' },
    { title: 'Odour Elimination', desc: 'Neutralises smells at the molecular level.' },
    { title: 'Dashboard Care', desc: 'UV protectant + matte factory finish.' },
    { title: 'Fabric Protection', desc: 'Optional coating that repels spills and stains.' }
  ]
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const rootRef = useReveal();
  const [openFaq, setOpenFaq] = useState(0);
  const svc = services.find((x) => x.slug === slug);
  if (!svc) return <Navigate to="/services" replace />;
  const Icon = iconMap[svc.slug];
  const list = benefits[svc.slug] || [];
  const brands = svc.slug === 'ppf' ? ppfBrands : svc.slug === 'ceramic' ? ceramicBrands : null;

  return (
    <div ref={rootRef} className="bg-black">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
        <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-16 w-full">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-full bg-black border border-yellow-500/40 flex items-center justify-center"><Icon className="w-5 h-5 text-yellow-400" /></div>
              <div className="section-pill !border-yellow-500/40">{svc.short.toUpperCase()}</div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]"><span className="silver-text">{svc.title}</span></h1>
            <p className="text-yellow-400/90 italic mt-3 text-lg">{svc.tagline}</p>
            <p className="text-neutral-300 mt-6 text-lg leading-relaxed max-w-xl">{svc.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold px-7 py-3.5 rounded-full inline-flex items-center gap-2">Book This Service <ArrowRight className="w-4 h-4" /></Link>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5 rounded-full">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-24 border-t border-yellow-500/10">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="section-pill mb-4">Benefits</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Everything Your Car </span><span className="gold-text">Needs.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((b, i) => (
              <div key={i} className="reveal p-7 rounded-2xl border border-yellow-500/15 bg-gradient-to-br from-neutral-950 to-black card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4"><Check className="w-4 h-4 text-yellow-400" /></div>
                <h3 className="font-semibold text-lg silver-text mb-2">{b.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands (if any) */}
      {brands && (
        <section className="relative py-20 border-y border-yellow-500/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="reveal text-center mb-10">
              <div className="section-pill mb-4">Brands We Install</div>
              <h2 className="font-display text-3xl md:text-5xl"><span className="silver-text">Authorised </span><span className="gold-text">Partners.</span></h2>
            </div>
            <div className="reveal grid grid-cols-2 md:grid-cols-6 gap-3">
              {brands.map((b) => (
                <div key={b} className="h-24 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center font-display text-lg silver-text hover:scale-105 transition">{b}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <div className="section-pill mb-4">Our Process</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Precision at </span><span className="gold-text">Every Step.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((p, i) => (
              <div key={p.step} className="reveal p-6 rounded-2xl border border-yellow-500/15 bg-neutral-950 card-hover" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="font-display text-3xl gold-text">{p.step}</div>
                <h3 className="font-semibold mt-3 mb-2 silver-text">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 border-y border-yellow-500/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal text-center">
          <div className="flex justify-center gap-1 mb-6">{Array(5).fill(0).map((_, k) => <Star key={k} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
          <p className="font-display text-2xl md:text-3xl silver-text leading-relaxed">"{testimonials[0].text}"</p>
          <div className="mt-6 text-yellow-400">{testimonials[0].name}</div>
          <div className="text-xs text-neutral-500">{testimonials[0].car}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="section-pill mb-4">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Common </span><span className="gold-text">Questions.</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="reveal rounded-2xl border border-yellow-500/15 bg-neutral-950 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex justify-between items-center p-6 text-left">
                  <span className="font-medium silver-text">{f.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-yellow-400" /> : <Plus className="w-5 h-5 text-yellow-400" />}
                </button>
                <div className={`grid transition-all duration-500 ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden"><p className="px-6 pb-6 text-neutral-400 leading-relaxed">{f.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Ready to book </span><span className="gold-text">{svc.title}?</span></h2>
          <p className="text-neutral-400 mt-5">Walk-in consultation is free. We'll assess your car and quote transparently.</p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-full inline-flex items-center gap-2 mt-8">Book Now <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
