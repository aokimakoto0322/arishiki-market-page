"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // せっかくなので動きも少し足しましょう！

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false); // 送信中の連打防止用
  
  // Discordへ送信する処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("送信中...");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus("送信しました。お問い合わせありがとうございます。");
        form.reset(); // フォームをリセットして入力内容を消す
      } else {
        setStatus("送信に失敗しました。(レスポンスコードエラー）");
      }

    } catch (error) {
      console.error("送信中にエラーが発生しました:", error);
      setStatus("送信に失敗しました。");
    } finally {
      setIsSending(false);
    }
  };

  return (
    // min-h-screen で画面いっぱいに。flex で中身を中央に配置します
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-black px-8 py-20">
      
      {/* フォーム全体をふわっと表示させるアニメーション */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-zinc-50 sm:text-4xl">
          コンタクト
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-600 dark:text-zinc-400">お名前</label>
              <input 
                type="text" 
                name="name"
                required 
                className="w-full p-4 rounded-xl border border-zinc-200 bg-white dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                placeholder="お名前"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-600 dark:text-zinc-400">メールアドレス</label>
              <input 
                type="email" 
                name="email"
                required
                pattern=".+\@.+\..+"
                className="w-full p-4 rounded-xl border border-zinc-200 bg-white dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                placeholder="p@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-zinc-600 dark:text-zinc-400">メッセージ</label>
            <textarea 
              required 
              name="message"
              className="w-full p-4 rounded-xl border border-zinc-200 bg-white dark:bg-zinc-800 dark:border-zinc-700 h-40 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="ゲームの感想など、お待ちしています！"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSending}
            className={`w-full py-6 rounded-xl font-bold text-xl text-white transition-all shadow-lg ${isSending ? 'bg-zinc-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'}`}
          >
            {isSending ? "送信中..." : "送信する"}
          </button>
          
          {status && (
            <p className={`mt-4 text-center font-medium ${status.includes('失敗') || status.includes('エラー') ? 'text-red-500' : 'text-blue-500'}`}>
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}