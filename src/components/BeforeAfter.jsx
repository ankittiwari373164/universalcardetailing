import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfter({ before, after, beforeLabel = 'BEFORE', afterLabel = 'AFTER' }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const update = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      update(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, update]);

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    update(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-yellow-500/25 bg-black select-none cursor-ew-resize shadow-[0_25px_60px_rgba(245,197,24,0.15)]"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      <img src={after} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover pointer-events-none"
          style={{ width: `${(100 / Math.max(pos, 0.001)) * 100}%`, maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 border border-yellow-500/40 text-[10px] tracking-[0.3em] text-yellow-400 pointer-events-none">{beforeLabel}</div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-yellow-500 text-black text-[10px] tracking-[0.3em] font-bold pointer-events-none">{afterLabel}</div>

      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-400 shadow-[0_0_20px_rgba(245,197,24,0.9)]" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center shadow-[0_0_24px_rgba(245,197,24,0.5)]">
          <ChevronsLeftRight className="w-6 h-6 text-yellow-400" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-neutral-300 bg-black/60 px-3 py-1.5 rounded-full border border-neutral-700 pointer-events-none">DRAG TO REVEAL</div>
    </div>
  );
}
