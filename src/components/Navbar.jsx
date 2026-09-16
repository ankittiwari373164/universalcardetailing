import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { brand } from '../data/mock';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

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
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-neutral-200 hover:text-yellow-400'}`}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </NavLink>
          ))}
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
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20">
          <div className="px-6 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `py-3 border-b border-neutral-800 text-sm tracking-wider ${isActive ? 'text-yellow-400' : 'text-neutral-200'}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="btn-gold mt-4 px-5 py-3 rounded-full text-center text-sm">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
