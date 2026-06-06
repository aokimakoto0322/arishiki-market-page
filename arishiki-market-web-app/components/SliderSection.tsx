"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Next.jsのImageコンポーネントを使用

const projectImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", alt: "花火1" },
  { id: 2, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", alt: "花火2" },
  { id: 3, src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop", alt: "花火3" },
  { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", alt: "花火4" },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState(projectImages[0]);

  return (
    <section className="py-20 px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 左側：拡大画像エリア（gridの items-center で上下中央になります） */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImg.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                fill
                className="object-cover" // もし余白を出したくなければ cover のままでOKです
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 右側：タイル状のギャラリー */}
        <div className="grid grid-cols-2 gap-4">
          {projectImages.map((img) => (
            <motion.button
              key={img.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedImg(img)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
                selectedImg.id === img.id ? "border-zinc-900 dark:border-zinc-50" : "border-transparent"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}