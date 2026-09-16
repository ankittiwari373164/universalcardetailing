import React, { useEffect, useState } from 'react';
import { Award, ShieldCheck, Users, Star } from 'lucide-react';

function useCount(target, duration = 2000, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, t0;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

export default function StatsRow({ years, cars, warranty, rating }) {
  const [start, setStart] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStart(true), 200); return () => clearTimeout(t); }, []);
  const y = useCount(years, 1600, start);
  const c = useCount(cars, 2400, start);
  const w = useCount(warranty, 1200, start);
  const r = useCount(Math.round(rating * 10), 1500, start);

  const items = [
    { icon: Award, value: `${y}+`, label: 'Years Experience' },
    { icon: Users, value: `${c.toLocaleString()}+`, label: 'Cars Detailed' },
    { icon: ShieldCheck, value: `${w}-Yr`, label: 'Warranty' },
    { icon: Star, value: `${(r / 10).toFixed(1)}★`, label: 'Client Rating' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, value, label }, i) => (
        <div key={i} className="relative rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black p-6 overflow-hidden group card-hover">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/25 transition" />
          <Icon className="w-6 h-6 text-yellow-400 mb-4" />
          <div className="font-display text-4xl md:text-5xl silver-text">{value}</div>
          <div className="text-xs tracking-[0.25em] text-neutral-400 mt-2 uppercase">{label}</div>
        </div>
      ))}
    </div>
  );
}
