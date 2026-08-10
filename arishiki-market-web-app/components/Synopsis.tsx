"use client";

import { motion } from "framer-motion";

export default function Synopsis() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-zinc-900 dark:bg-black px-4 py-16 md:py-24 text-white dark:text-zinc-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center max-w-4xl w-full"
      >
        {/* サブタイトルまたはジャンル */}
        <span className="text-sm md:text-base font-semibold tracking-widest text-yellow-400 mb-3 uppercase">
          あらすじ
        </span>

        {/* ディバイダー（装飾線） */}
        <div className="w-12 h-1 bg-yellow-400 rounded-full mb-8"></div>

        {/* ゲーム概要文：max-w-none にして px-2 等で微調整 */}
        <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-light w-full max-w-none px-2 md:px-4">
          とある私立高校に通う高校2年生の主人公。<br/>
          中高一貫校で、変わり映えのない生活を送ってきた。<br/>
          高校2年生の新学期初日。<br/>
          夏の夜空に咲く花火を、顔の見えない誰かと共に眺める。<br/>
          そんな幸せな夢を見るが、主人公は初日から時間ぎりぎりで登校。<br/>
          この夢が導いた運命か、2人のヒロインに遭遇する。<br/>
          <br/>
          才色兼備で全校生徒の憧れ。生徒会長でもある幼馴染<br/>
          小湊 美桜ーこみなと みおー
          <br/>
          <br/>
          天真爛漫。誰からも愛される(?)ギャル系クラスメイト<br/>
          高宮 依茉ーたかみや えまー<br/>
          <br/>
          変わり映えのしなかった高校生活がヒロインに出会うことで変化を見せていく。<br/>
          高校2年生の春を過ごして、どんな関係性を気づいていくのか。<br/>
          そして、夢で出会った顔の見えない彼女は、一体誰だったのだろうか？<br/>
          選択をしていく果てに、一体どんな夏に辿り着くのか！？<br/>
        </p>
      </motion.div>
    </section>
  );
}
