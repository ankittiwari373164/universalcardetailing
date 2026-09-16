import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { brand, services } from '../data/mock';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', car: '', service: 'PPF', message: '' });
  const rootRef = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('universal_leads') || '[]');
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem('universal_leads', JSON.stringify(existing));
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', email: '', car: '', service: 'PPF', message: '' }); }, 4000);
  };

  return (
    <div ref={rootRef} className="bg-black">
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-pill mb-6 animate-fade-up">Get In Touch</div>
          <h1 className="font-display text-5xl md:text-7xl animate-fade-up leading-tight"><span className="silver-text">Let's Talk </span><span className="gold-text">Perfection.</span></h1>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto animate-fade-up">Book a free consultation. We'll assess your car and recommend the right package — no pressure, no guesswork.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="reveal space-y-4">
            {[
              { icon: MapPin, title: 'Studio Address', value: brand.address },
              { icon: Phone, title: 'Call Us', value: brand.phone },
              { icon: Mail, title: 'Email', value: brand.email },
              { icon: Clock, title: 'Working Hours', value: brand.hours }
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-neutral-950 to-black flex items-start gap-4 card-hover">
                <div className="h-11 w-11 rounded-full border border-yellow-500/40 flex items-center justify-center flex-shrink-0"><c.icon className="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <div className="text-xs tracking-[0.25em] text-yellow-500 mb-1">{c.title.toUpperCase()}</div>
                  <div className="text-neutral-200">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-yellow-500/20 h-72">
              <iframe title="map" src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapQuery)}&output=embed`} className="w-full h-full" style={{ filter: 'invert(0.92) hue-rotate(180deg)' }} />
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal p-8 md:p-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-950 to-black">
            <h2 className="font-display text-3xl mb-2 silver-text">Book Your Slot</h2>
            <p className="text-neutral-400 text-sm mb-8">Fill in the details and our team will get in touch within 24 hours.</p>

            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-yellow-400 mb-4" />
                <h3 className="font-display text-2xl silver-text mb-2">Enquiry Received</h3>
                <p className="text-neutral-400">Thanks {form.name || 'there'}. Our team will call you shortly.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { k: 'name', label: 'Full Name', type: 'text', required: true },
                  { k: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  { k: 'email', label: 'Email', type: 'email' },
                  { k: 'car', label: 'Car Model', type: 'text' }
                ].map((f) => (
                  <div key={f.k}>
                    <label className="text-xs tracking-[0.25em] text-yellow-500 mb-2 block">{f.label.toUpperCase()}</label>
                    <input required={f.required} type={f.type} value={form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-yellow-500 outline-none transition text-neutral-100" />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="text-xs tracking-[0.25em] text-yellow-500 mb-2 block">SERVICE INTERESTED IN</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-yellow-500 outline-none text-neutral-100">
                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs tracking-[0.25em] text-yellow-500 mb-2 block">MESSAGE</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-yellow-500 outline-none text-neutral-100 resize-none" />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-gold w-full py-4 rounded-full inline-flex items-center justify-center gap-2">Send Enquiry <Send className="w-4 h-4" /></button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
