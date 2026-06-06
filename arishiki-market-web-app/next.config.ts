import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // --- ここに画像を読み込むための設定を追加しました ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // ----------------------------------------------

  // Turbopack を有効化
  turbopack: {},
  // Docker 環境でのホットリロードを有効化
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 300, 
        aggregateTimeout: 100, 
        ignored: ['**/node_modules', '**/.next', '**/.git'], 
      };
    }
    return config;
  },
};

export default nextConfig;