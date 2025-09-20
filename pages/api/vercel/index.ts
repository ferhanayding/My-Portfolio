import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.NEXT_VERCEL_API_TOKEN;
  if (!token)
    return res.status(500).json({ error: "Missing VERCEL_API_TOKEN" });

  const url = new URL("https://api.vercel.com/v9/projects");
  const teamId = process.env.VERCEL_TEAM_ID;
  if (teamId) url.searchParams.set("teamId", teamId);

  const resp = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!resp.ok) {
    const text = await resp.text();
    return res.status(resp.status).json({ error: text });
  }

  const data = await resp.json();
  return res.status(200).json(data);
}
