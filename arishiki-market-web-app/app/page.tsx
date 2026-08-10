"use client";

import SliderSection from "@/components/SliderSection";
import Synopsis from "@/components/Synopsis";
import GameInfo from "@/components/GameInfo";
import CircleInfo from "@/components/CircleInfo";
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Fontsの読み込みを挿入 */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');
        .font-aoharu {
          font-family: 'Yomogi', cursive;
        }
      `}</style>

      {/* セクション1 */}
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

      {/* セクション2 */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center bg-zinc-950 overflow-hidden">
  
        {/* ロジックだけで描く夜空とアクセントの光 */}
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, #fff 100%, transparent),
              radial-gradient(1px 1px at 40% 70%, #fff 100%, transparent),
              radial-gradient(1px 1px at 60% 20%, #fff 100%, transparent),
              radial-gradient(2px 2px at 80% 50%, #fcd34d 100%, transparent),
              radial-gradient(2px 2px at 15% 80%, #f87171 100%, transparent),
              radial-gradient(3px 3px at 50% 50%, rgba(255, 255, 255, 0.2) 100%, transparent)
            `
          }}
        />

        {/* 動きのある光のアクセント（CSSアニメーション） */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-yellow-200 rounded-full animate-ping" />
          <div className="absolute bottom-[30%] right-[20%] w-1 h-1 bg-blue-200 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] font-aoharu rotate-[-1deg] leading-relaxed">
            花火は1人で見るより、<br /> 君と見たい。
          </h2>
        </motion.div>
      </section>

      {/* セクション3 ゲームの紹介文 */}
      <Synopsis />

      {/* (詳細) ゲーム情報・配信情報 */}
      <GameInfo />

      {/* (詳細) 画像表示セクション */}
      {/* <SliderSection /> */}

      {/* (詳細) サークル情報 */}
      <CircleInfo />

      {/* (詳細) コンタクトフォーム */}
      <ContactForm />
      

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