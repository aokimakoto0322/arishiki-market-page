"use client";

import { motion } from "framer-motion";

export default function GameInfo() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-zinc-900 dark:bg-black px-4 py-12 text-white dark:text-zinc-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center max-w-4xl w-full"
      >
        {/* サブタイトル */}
        <span className="text-sm md:text-base font-semibold tracking-widest text-yellow-400 mb-3 uppercase">
          ゲーム情報
        </span>

        {/* ディバイダー（装飾線） */}
        <div className="w-12 h-1 bg-yellow-400 rounded-full mb-8"></div>

        {/* スペック情報カード風グリッド */}
        <div className="w-full bg-zinc-800/50 backdrop-blur border border-zinc-700/60 rounded-2xl p-6 md:p-10 text-left shadow-xl">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* タイトル */}
            <div className="border-b border-zinc-700/50 pb-4">
              <dt className="text-xs md:text-sm font-semibold text-yellow-400 tracking-wider mb-1">タイトル</dt>
              <dd className="text-lg md:text-xl font-bold text-zinc-100">タイトル未定</dd>
            </div>

            {/* ジャンル */}
            <div className="border-b border-zinc-700/50 pb-4">
              <dt className="text-xs md:text-sm font-semibold text-yellow-400 tracking-wider mb-1">ジャンル</dt>
              <dd className="text-lg md:text-xl font-bold text-zinc-100">学園恋愛ADV</dd>
            </div>

            {/* 対応プラットフォーム */}
            <div className="border-b border-zinc-700/50 pb-4">
              <dt className="text-xs md:text-sm font-semibold text-yellow-400 tracking-wider mb-1">対応プラットフォーム</dt>
              <dd className="text-base md:text-lg text-zinc-200">iOS / Android</dd>
            </div>

            {/* プレイ人数 / 価格 */}
            <div className="border-b border-zinc-700/50 pb-4">
              <dt className="text-xs md:text-sm font-semibold text-yellow-400 tracking-wider mb-1">価格 / プレイ人数</dt>
              <dd className="text-base md:text-lg text-zinc-200">無料 / 1人</dd>
            </div>

            {/* 配信時期 / 企画・制作 */}
            <div className="col-span-1 md:col-span-2 pt-2">
              <dt className="text-xs md:text-sm font-semibold text-yellow-400 tracking-wider mb-1">配信予定日</dt>
              <dd className="text-xl md:text-2xl font-extrabold text-yellow-300">未定</dd>
            </div>

          </dl>
        </div>

      </motion.div>
    </section>
  );
}
