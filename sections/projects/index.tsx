"use client";
import Loading from "@/components/loading";
import React, { useEffect, useState } from "react";

type Item = {
  id: string;
  project: string;
  url: string;
  state: string;
  target: string;
  createdAt: number;
  creator: string | null;
};

export default function MyProjects() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/vercel");
      const data = await response.json();
      console.log(data);
      setItems(data.projects || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return  <Loading />;

  return (
    <div
      className="grid gap-3 min-h-screen  flex-col  justify-evenly relative overflow-hidden text-left max-w-6xl px-6 sm:px-10 mx-auto
"
    >
      {items.map((it) => (
        <a
          key={it.id}
          href={it.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="font-medium">{it.project}</div>
            <span className="text-xs">{it.target}</span>
          </div>
          <div className="text-xs text-zinc-400">
            {it.state} • {new Date(it.createdAt).toLocaleString()}
          </div>
          <div className="text-xs text-zinc-400 truncate">{it.url}</div>
        </a>
      ))}
    </div>
  );
}
