// app/api/vercel/route.ts
import { NextRequest, NextResponse } from "next/server";

// İstersen Node runtime'ı zorla (opsiyonel)
// export const runtime = "nodejs";

// Caching'i kapatmak istersen (opsiyonel)
// export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest) {
  const token = process.env.NEXT_VERCEL_API_TOKEN; // DİKKAT: public prefix YOK
  if (!token) {
    return NextResponse.json(
      { error: "Missing VERCEL_API_TOKEN" },
      { status: 500 }
    );
  }

  const url = new URL("https://api.vercel.com/v9/projects");
  const teamId = process.env.VERCEL_TEAM_ID;
  if (teamId) url.searchParams.set("teamId", teamId);

  const resp = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
    // next: { revalidate: 0 }, // istersen fetch cache'ini kapat
  });

  if (!resp.ok) {
    const text = await resp.text();
    return new NextResponse(text, { status: resp.status });
  }

  const data = await resp.json();
  return NextResponse.json(data, { status: 200 });
}
