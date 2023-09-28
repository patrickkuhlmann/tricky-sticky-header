'use client';

import { useScrollDirection } from '../hooks/useScrollDirection';

export function Header() {
  return (
    <div
      className={`sticky top-0 h-16 bg-black transition-all duration-500`}
    >
      <div className="p-5 font-bold text-white">Disappearing Header</div>
    </div>
  );
}
