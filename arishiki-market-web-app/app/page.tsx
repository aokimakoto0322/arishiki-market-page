"use client";

import SliderSection from "@/components/SliderSection";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* セクション1：タイトル（ふわっと浮かび上がる動き） */}
      <section className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-black px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl whitespace-nowrap">
            ありしきまーけっと
          </h1>
          <div className="mt-10 animate-bounce text-zinc-400">
            <p className="text-sm">Scroll down</p>
          </div>
        </motion.div>
      </section>

      {/* セクション2：作品概要（スクロールで見えてきたら表示） */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-8 py-20 overflow-hidden">
        {/* 背景ドット（省略） */}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl w-full"
        >
          <h2 className="text-2xl font-bold mb-12 text-center text-black dark:text-zinc-50 sm:text-3xl">
            作品について
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左側：テキスト（横からスライド） */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed bg-white/50 dark:bg-black/20 p-3 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-lg font-medium">
                ここに作品のキャッチコピーや概要を入れます。
              </p>
              <p>
                こだわったポイントや世界観、など
              </p>
            </motion.div>

            {/* 右側：画像（ふわっと拡大） */}
            <motion.div 
              whileHover={{ scale: 1.05 }} // マウスを乗せると少し大きく！
              className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-2xl border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex items-center justify-center h-full text-zinc-400">
                <p>Image / Screenshot</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* セクション3：自動スライド画像セクション */}
      <SliderSection />

      {/* セクション4: コンタクトフォーム（スクロールで見えてきたら表示） */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ContactForm />
        </motion.div>
      </section>
      

      {/* セクション4：スクロールした後に表示されるアイコン群 ループ検知で止められたのでいったんコメントアウト */}
      {/* <section className="flex min-h-[50vh] w-full flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 py-20 px-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <svg className="w-12 h-12 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={180}
              height={54}
              className="dark:invert"
            />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <Image
              src="/googleplay.svg"
              alt="Google Play で手に入れよう"
              width={180}
              height={54}
            />
          </a>
        </div>
      </section> */}
    </div>
  );
}