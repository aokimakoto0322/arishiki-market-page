"use client";

import { motion } from "framer-motion";

export default function CircleInfo() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl w-full"
      >
        <a href="https://x.com/arisk0412" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <svg className="w-20 h-20 text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-4">ありしきまーけっとについて</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            ありしきまーけっとは、同人サークルグループです。<br />
            心があったまる、楽しいゲーム作りを目指しています。<br />
            最新情報はX（旧Twitter）で発信していますので、ぜひフォローしてください！
          </p>
        </div>
      </motion.div>
    </section>
  );
}
