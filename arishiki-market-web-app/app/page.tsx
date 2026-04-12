import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            なんかいい感じで説明とかを書く
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            テストテストあいうえおかきくけこさしすせそ
          </p>
          <ul className="list-disc list-inside text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <li>タスク1: タイトルアイコンを作る</li>
            <li>タスク2: イメージ画像を作る</li>
            <li>タスク3: そもそも何を表示させるか考える</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center mt-8">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <svg className="w-10 h-10 hover:text-zinc-950 dark:hover:text-zinc-50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="dark:invert"
            />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <Image
              src="/googleplay.svg"
              alt="Google Play で手に入れよう"
              width={160}
              height={48}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
