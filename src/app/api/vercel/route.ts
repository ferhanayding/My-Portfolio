import { NextRequest, NextResponse } from "next/server";
// export const runtime = "nodejs";

export async function GET(_req: NextRequest) {
    console.log("TOKEN:", process.env.VERCEL_API_TOKEN?.slice(0, 5)); // test
  const token = process.env.VERCEL_API_TOKEN;
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
  });

  if (!resp.ok) {
    const text = await resp.text();
    return new NextResponse(text, { status: resp.status });
  }

  const data = await resp.json();
  return NextResponse.json(data, { status: 200 });
}
