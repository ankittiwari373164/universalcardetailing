import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Droplets, Wand2, Car, Star, ChevronRight } from 'lucide-react';
import { services, whyUs, process, testimonials, ppfBrands, ceramicBrands, brand, showcaseBoards, heroSlides } from '../data/mock';
import StatsRow from '../components/StatsRow';
import BeforeAfter from '../components/BeforeAfter';
import useReveal from '../hooks/useReveal';
import heroCar from '../assets/car-graphene-closeup.jpeg';
import beforeCar from '../assets/car-studio-wide.jpeg';
import afterCar from '../assets/car-front-studio.jpeg';

const iconMap = { ppf: ShieldCheck, ceramic: Droplets, graphene: Sparkles, borophene: Wand2, 'interior-detailing': Car };

// Real studio photography — full car, PPF clearly visible on the hood/mirror, no crop surprises.
// (Using our own real photos here instead of stock URLs so the car is guaranteed to render fully and correctly.)

// Real before/after pair from our own bay — same studio, dull arrival vs. showroom handover finish, full car visible in both.
const beforeAfter = {
  before: beforeCar,
  after: afterCar
};

const hero = {
  label: 'Paint Protection Film',
  title: 'Armour For Your Ride.',
  description: 'The only product that physically stops stone chips and scratches from ever reaching your paint. Self-healing. Invisible. Built to last a decade — even on the most premium marques.',
  cta: 'Explore PPF',
  link: '/services/ppf'
};

export default function Home() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="bg-black text-neutral-100">
      {/* HERO — static, full car visible, no logo overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Full car receiving Paint Protection Film at Universal Car Detailing Studio" className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/50" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="animate-fade-up">
            <div className="section-pill mb-6"><Sparkles className="w-3 h-3" /> {hero.label}</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              <span className="silver-text">{hero.title.split(' ').slice(0, -1).join(' ')} </span>
              <span className="shine-text">{hero.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="mt-6 text-neutral-300 text-lg leading-relaxed max-w-xl">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold px-7 py-3.5 rounded-full inline-flex items-center gap-2">Book Your Showroom Shine <ArrowRight className="w-4 h-4" /></Link>
              <Link to={hero.link} className="btn-ghost px-7 py-3.5 rounded-full inline-flex items-center gap-2">{hero.cta} <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 text-[10px] tracking-[0.4em] uppercase animate-pulse">Scroll to explore</div>
      </section>

      {/* STATS */}
      <section className="relative py-20 border-y border-yellow-500/10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal mb-12 text-center">
            <div className="section-pill mb-4">Studio Legacy</div>
            <h2 className="font-display text-4xl md:text-5xl silver-text">Three Decades. <span className="gold-text">One Standard.</span></h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">Backed by 30 years of hands-on expertise in the automobile industry — every car is treated with obsessive precision.</p>
          </div>
          <div className="reveal">
            <StatsRow years={brand.years} cars={brand.cars} warranty={brand.warranty} rating={brand.rating} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-3xl mx-auto mb-16">
            <div className="section-pill mb-4">What We Do</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight"><span className="silver-text">Protection Built </span><span className="gold-text">to Last.</span></h2>
            <p className="text-neutral-400 mt-5">Five layers of defence for your car — each engineered to shield the paint, preserve the gloss and deliver long-term value.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((sv, i) => {
              const Icon = iconMap[sv.slug] || ShieldCheck;
              return (
                <Link key={sv.slug} to={`/services/${sv.slug}`} className="reveal-scale group relative overflow-hidden rounded-2xl border border-yellow-500/15 bg-neutral-950 card-hover tilt-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={sv.image} alt={sv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${sv.color} opacity-60`} />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-full bg-black/70 border border-yellow-500/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] tracking-[0.3em] text-yellow-500 mb-2">{sv.short.toUpperCase()}</div>
                    <h3 className="font-display text-2xl mb-2 group-hover:gold-text transition-all">{sv.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">{sv.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-yellow-400 text-sm font-medium">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="relative py-24 border-y border-yellow-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <div className="section-pill mb-4">Our Work</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight"><span className="silver-text">The Proof is </span><span className="gold-text">in the Finish.</span></h2>
            <p className="text-neutral-400 mt-5">Drag the slider to see the difference walking into our studio versus driving out — every panel, every edge, done with obsessive precision.</p>
          </div>
          <div className="reveal">
            <BeforeAfter before={beforeAfter.before} after={beforeAfter.after} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 border-y border-yellow-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-3xl mx-auto mb-16">
            <div className="section-pill mb-4">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-6xl"><span className="silver-text">The Universal </span><span className="gold-text">Difference.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} group p-8 rounded-2xl border border-yellow-500/15 bg-gradient-to-br from-neutral-950 to-black card-hover tilt-hover relative overflow-hidden`} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-yellow-500/5 blur-3xl group-hover:bg-yellow-500/15 transition" />
                <div className="font-display text-yellow-400 text-4xl mb-4">0{i + 1}</div>
                <h3 className="text-xl font-semibold silver-text mb-3">{w.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="section-pill mb-4">Authorised Installer</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">Brands We </span><span className="gold-text">Work With.</span></h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">Only globally recognised, authenticated and serialised products with brand warranty cards.</p>
          </div>
          <div className="reveal mb-6">
            <div className="text-yellow-500 text-xs tracking-[0.3em] mb-4 text-center">PPF BRANDS</div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {ppfBrands.map((b) => (
                <div key={b} className="h-24 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center font-display text-lg silver-text hover:border-yellow-500/60 hover:scale-105 transition-all">{b}</div>
              ))}
            </div>
          </div>
          <div className="reveal mt-8">
            <div className="text-yellow-500 text-xs tracking-[0.3em] mb-4 text-center">CERAMIC BRANDS</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ceramicBrands.map((b) => (
                <div key={b} className="h-24 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center font-display text-lg silver-text hover:border-yellow-500/60 hover:scale-105 transition-all">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO BOARDS — shown uncropped since these are dense infographics */}
      <section className="relative py-20 border-y border-yellow-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="section-pill mb-4">Inside The Studio</div>
            <h2 className="font-display text-4xl md:text-5xl"><span className="silver-text">What We </span><span className="gold-text">Cover.</span></h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">Every protection layer, at a glance — straight off our studio walls.</p>
          </div>
          <div className="reveal grid md:grid-cols-2 gap-5">
            {showcaseBoards.map((board, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-yellow-500/20 bg-black card-hover">
                <img src={board} alt={`studio board ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="section-pill mb-4">How It Works</div>
            <h2 className="font-display text-4xl md:text-6xl"><span className="silver-text">Our 5-Step </span><span className="gold-text">Process.</span></h2>
            <p className="text-neutral-400 mt-5">From your first call to keys-in-hand — every step is deliberate. No rushed jobs, no cutting corners.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <div key={p.step} className="reveal-scale relative p-6 rounded-2xl border border-yellow-500/15 bg-neutral-950 card-hover tilt-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="h-14 w-14 rounded-full border border-yellow-500/40 bg-black flex items-center justify-center font-display text-xl gold-text mb-4">{p.step}</div>
                  <h3 className="font-semibold text-lg mb-2 silver-text">{p.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="section-pill mb-4">Testimonials</div>
            <h2 className="font-display text-4xl md:text-6xl"><span className="silver-text">What Our </span><span className="gold-text">Clients Say.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="reveal p-8 rounded-2xl border border-yellow-500/15 bg-gradient-to-br from-neutral-950 to-black card-hover tilt-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, k) => <Star key={k} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 text-black flex items-center justify-center font-bold">{t.name.charAt(0)}</div>
                  <div>
                    <div className="text-sm font-semibold silver-text">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroSlides[0].image} alt="cta" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <div className="section-pill mb-6">Ready to Protect Your Ride?</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight"><span className="silver-text">Your Paint Deserves </span><span className="gold-text">Permanent Armour.</span></h2>
            <p className="text-neutral-300 mt-6 max-w-2xl mx-auto">Book a free consultation at our Thane studio. We'll assess your car and recommend the right package — no pressure, no guesswork.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold px-8 py-4 rounded-full inline-flex items-center gap-2">Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost px-8 py-4 rounded-full inline-flex items-center gap-2">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}