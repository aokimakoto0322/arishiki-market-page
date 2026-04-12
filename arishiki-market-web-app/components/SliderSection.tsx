'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ここにスライダーのデータをまとめておくと管理しやすいです
const SLIDES = [
  { id: 0, src: '/sample.jpg', title: '作品画像 1', color: 'bg-zinc-800' },
  { id: 1, src: '', title: '作品画像 2', color: 'bg-zinc-700' },
  { id: 2, src: '', title: '作品画像 3', color: 'bg-zinc-600' },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50 dark:bg-black flex flex-col items-center justify-center">
      <div 
        className="flex h-[70vh] w-full transition-transform duration-700 ease-in-out items-center"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="relative h-full w-full flex-shrink-0 flex items-center justify-center">
            <div className={`relative h-full w-[90%] overflow-hidden rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 ${slide.color}`}>
              {slide.src && <Image src={slide.src} alt={slide.title} fill className="object-cover" />}
              <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                <p className="text-2xl font-bold">{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* ドットインジケーター */}
      <div className="mt-8 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-8 bg-[var(--dot-active)]' 
                : 'bg-[var(--dot-inactive)] hover:bg-[var(--dot-active)]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}