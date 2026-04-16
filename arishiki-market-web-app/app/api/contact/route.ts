export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "設定ミス" }, { status: 500 });
    }

    // Discordへのリクエスト
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: "🕊️ ありしきまーけっとへのお便り 🕊️",
          color: 0x3b82f6, // 綺麗なブルー
          fields: [
            { name: "お名前", value: name || "匿名", inline: true },
            { name: "メールアドレス", value: email || "未入力", inline: true },
            { name: "メッセージ", value: message },
          ],
          timestamp: new Date().toISOString(),
        }]
      }),
    });

    if (!response.ok) throw new Error("Discord送信失敗");

    return NextResponse.json({ message: "成功しました！" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "送信失敗" }, { status: 500 });
  }
}