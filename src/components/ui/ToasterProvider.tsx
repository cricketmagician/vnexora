'use client';

import { Toaster } from 'sonner';

export function ToasterProvider() {
  return (
    <Toaster 
      position="bottom-right"
      toastOptions={{
        className: 'bg-[#1A1A1A] text-white border-white/10 rounded-2xl p-4 font-serif text-sm',
        style: {
          background: '#1A1A1A',
          color: '#FFFFFF',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }}
      expand={true}
      richColors
    />
  );
}
