import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack を有効化
  turbopack: {},
  // Docker 環境でのホットリロードを有効化
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 300, // チェック頻度
        aggregateTimeout: 100, // 待機時間
        ignored: ['**/node_modules', '**/.next', '**/.git'], // 監視除外
      };
    }
    return config;
  },
};

export default nextConfig;
