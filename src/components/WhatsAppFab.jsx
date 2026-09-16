import React from 'react';
import { brand } from '../data/mock';

export default function WhatsAppFab() {
  const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi Universal, I would like to enquire about your services.')}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.36.01 11.99c0 2.11.55 4.16 1.6 5.98L0 24l6.19-1.62a11.94 11.94 0 0 0 5.81 1.48h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.38ZM12 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.85 9.85 0 0 1 2.2 12C2.2 6.58 6.58 2.2 12 2.2c2.62 0 5.08 1.02 6.93 2.87A9.75 9.75 0 0 1 21.8 12c0 5.42-4.38 9.8-9.8 9.8Zm5.35-7.31c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.14-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.14-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51H8.9c-.19 0-.5.07-.76.34-.26.29-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.2 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.29.19 1.78.11.54-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
    </a>
  );
}
