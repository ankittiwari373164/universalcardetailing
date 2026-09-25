import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ShieldCheck, Droplets, Sparkles, Wand2, Car } from 'lucide-react';
import { brand, services } from '../data/mock';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const iconMap = { ppf: ShieldCheck, ceramic: Droplets, graphene: Sparkles, borophene: Wand2, 'interior-detailing': Car };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); setMobileServicesOpen(false); }, [location.pathname]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-yellow-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={brand.logo} alt="Universal" className="h-14 w-14 rounded-full ring-2 ring-yellow-500/50 group-hover:ring-yellow-400 transition object-cover" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg tracking-wide silver-text">UNIVERSAL</div>
            <div className="text-[10px] tracking-[0.35em] text-yellow-500 font-semibold">CAR DETAILING STUDIO</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
          >
            {({ isActive }) => (
              <>
                Home
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
          >
            {({ isActive }) => (
              <>
                About
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </>
            )}
          </NavLink>

          {/* Services — dropdown so every service page is one click away */}
          <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`relative px-4 py-2 text-sm tracking-wide font-medium transition-colors inline-flex items-center gap-1 ${isServiceActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isServiceActive ? 'opacity-100' : 'opacity-0'}`} />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-[60] transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
              <div className="rounded-2xl border border-yellow-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                <Link to="/services" className="flex items-center justify-between px-5 py-3 text-xs tracking-[0.2em] text-yellow-500 border-b border-yellow-500/10 hover:bg-yellow-500/5 transition">
                  ALL SERVICES <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                </Link>
                {services.map((s) => {
                  const Icon = iconMap[s.slug] || ShieldCheck;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-5 py-3.5 hover:bg-yellow-500/10 transition group"
                    >
                      <span className="h-9 w-9 rounded-full bg-black border border-yellow-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-400 transition">
                        <Icon className="w-4 h-4 text-yellow-400" />
                      </span>
                      <span>
                        <span className="block text-sm text-neutral-100 group-hover:text-yellow-400 transition">{s.title}</span>
                        <span className="block text-[11px] text-neutral-500">{s.tagline}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) => `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
          >
            {({ isActive }) => (
              <>
                Gallery
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
          >
            {({ isActive }) => (
              <>
                Contact
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </>
            )}
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-neutral-200 hover:text-yellow-400 transition">
            <Phone className="w-4 h-4" /> {brand.phone}
          </a>
          <Link to="/contact" className="btn-gold px-5 py-2.5 rounded-full text-sm">Book Now</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-yellow-400 p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-2">
            {links.slice(0, 2).map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `py-3 border-b border-neutral-800 text-sm tracking-wider ${isActive ? 'text-yellow-400' : 'text-neutral-200'}`}>{l.label}</NavLink>
            ))}

            {/* Mobile Services — expandable, every service one tap away */}
            <div className="border-b border-neutral-800">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full py-3 flex items-center justify-between text-sm tracking-wider ${isServiceActive ? 'text-yellow-400' : 'text-neutral-200'}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 flex flex-col gap-1">
                  <Link to="/services" className="py-2 pl-4 text-xs tracking-[0.2em] text-yellow-500">ALL SERVICES</Link>
                  {services.map((s) => {
                    const Icon = iconMap[s.slug] || ShieldCheck;
                    return (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="py-2.5 pl-4 flex items-center gap-3 text-sm text-neutral-300">
                        <Icon className="w-4 h-4 text-yellow-400 flex-shrink-0" /> {s.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {links.slice(2).map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `py-3 border-b border-neutral-800 text-sm tracking-wider ${isActive ? 'text-yellow-400' : 'text-neutral-200'}`}>{l.label}</NavLink>
            ))}

            <Link to="/contact" className="btn-gold mt-4 px-5 py-3 rounded-full text-center text-sm">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}