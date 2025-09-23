"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Divider from "../../components/ui/divider";
import Loading from "../../components/ui/loading";
import Title from "../../components/ui/title";
import { useLocale, useTranslations } from "next-intl";

type VercelProject = {
  id: string;
  name: string;
  latestDeployments?: any[];
  targets?: { production?: { alias?: string[] } };
  updatedAt?: number;
};

type Item = {
  id: string;
  project: string;
  url: string | null;
  host: string | null;
  createdAt: number | null;
  target: string | null;
  state: string | null;
  hasCustomDomain: boolean;
};

const BAD_ALIAS_PATTERNS = ["git-", "-projects.vercel.app"];

function toHttps(u: string) {
  return u?.startsWith("http") ? u : `https://${u}`;
}
function hostOf(u: string) {
  try {
    return new URL(toHttps(u)).host;
  } catch {
    return null;
  }
}

function bestAlias(aliases?: string[]): string | null {
  if (!aliases?.length) return null;
  const custom = aliases.find((a) => !a.includes("vercel.app"));
  if (custom) return custom;
  const clean = aliases.find(
    (a) =>
      a.includes("vercel.app") && !BAD_ALIAS_PATTERNS.some((p) => a.includes(p))
  );
  if (clean) return clean;
  return aliases[0] || null;
}

function pickUrl(p: VercelProject): string | null {
  const prod = bestAlias(p?.targets?.production?.alias);
  if (prod) return toHttps(prod);
  const d = p.latestDeployments?.[0];
  const dAlias = bestAlias(d?.alias);
  if (dAlias) return toHttps(dAlias);
  if (d?.url) return toHttps(d.url);
  return null;
}

function pickCreatedAt(p: VercelProject): number | null {
  const d = p.latestDeployments?.[0];
  return d?.readyAt ?? d?.createdAt ?? p.updatedAt ?? null;
}
function pickState(p: VercelProject): string | null {
  const d = p.latestDeployments?.[0];
  return d?.readyState ?? null;
}
function pickTarget(p: VercelProject): string | null {
  const d = p.latestDeployments?.[0];
  return d?.target ?? "production";
}

function faviconHostIsCustom(url?: string | null) {
  if (!url) return false;
  return !toHttps(url).includes("vercel.app");
}

function colorFrom(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
  return { h, bg: `hsl(${h} 60% 16%)`, ring: `hsl(${h} 85% 60%)` };
}

function liveScore(it: Item) {
  let s = 0;
  if (it.target === "production") s += 2;
  if (it.state === "READY") s += 1;
  if (it.hasCustomDomain) s += 3;
  if (it.createdAt)
    s += Math.min(2, Math.floor((Date.now() - it.createdAt) / -86400000));
  return s;
}

export default function MyProjects() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const locale = useLocale(); // 'tr' | 'en'
  const t = useTranslations("projects"); // i18n metinleri

  // Yerel tarih biçimi
  const fmt = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
    [locale]
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/vercel");
        const data = await res.json();
        const arr: VercelProject[] = Array.isArray(data)
          ? data
          : data.projects || data.items || [];
        const mapped: Item[] = arr.map((p) => {
          const url = pickUrl(p);
          return {
            id: p.id,
            project: p.name,
            url,
            host: url ? hostOf(url) : null,
            createdAt: pickCreatedAt(p),
            target: pickTarget(p),
            state: pickState(p),
            hasCustomDomain: faviconHostIsCustom(url),
          };
        });
        mapped.sort((a, b) => {
          const sa = liveScore(a);
          const sb = liveScore(b);
          if (sb !== sa) return sb - sa;
          const ca = a.createdAt ?? 0;
          const cb = b.createdAt ?? 0;
          return cb - ca;
        });
        setItems(mapped);
      } catch (e) {
        console.error("Error fetching projects:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="md:min-h-screen max-w-6xl mx-auto px-6 sm:px-10 py-10">
      <div className="text-center mb-10">
        <Title title={t("title")} desc={t("desc")} />
        <p className="mt-3 text-sm text-gray-300">
          {t("morePrefix")}{" "}
          <Link
            href="https://github.com/ferhanayding"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted hover:opacity-80"
          >
            github.com/ferhanayding
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => {
          const canOpen = !!it.url;
          const { bg, ring } = colorFrom(it.project);
          return (
            <Link
              key={it.id}
              href={canOpen ? it.url! : "#"}
              target={canOpen ? "_blank" : undefined}
              rel={canOpen ? "noreferrer" : undefined}
              className={[
                "group rounded-2xl overflow-hidden border transition",
                "bg-zinc-900/60 border-white/10",
                "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]",
                "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_80px_-20px_rgba(0,0,0,0.7)] ",
                canOpen
                  ? "hover:scale-[1.01]"
                  : "pointer-events-none opacity-60",
              ].join(" ")}
              style={{
                background:
                  "radial-gradient(1200px 300px at -20% -20%, rgba(255,255,255,0.06), transparent 60%), " +
                  "radial-gradient(900px 250px at 120% 120%, rgba(255,255,255,0.05), transparent 60%), " +
                  bg,
              }}
            >
              <div className="p-4 pb-3 flex items-start justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="min-w-0">
                    <div className="font-medium text-white/90 truncate">
                      {it.project}
                    </div>
                    <div className="text-xs text-zinc-400 truncate">
                      {canOpen ? it.url : t("urlMissing")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end items-end gap-2">
                  {it.state && (
                    <span className="text-[10px] uppercase tracking-wider max-w-max rounded-full px-auto px-2 py-1 border border-white/20 bg-black/40 backdrop-blur text-zinc-200">
                      {it.state}
                    </span>
                  )}
                  {it.target && (
                    <span
                      className={[
                        "text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 border backdrop-blur",
                        it.target === "production"
                          ? "border-emerald-400/40 text-emerald-200 bg-emerald-500/10"
                          : "border-zinc-300/40 text-zinc-200 bg-black/30",
                      ].join(" ")}
                    >
                      {it.target}
                    </span>
                  )}
                </div>
              </div>

              <div className="px-4 pb-4 pt-1">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="text-zinc-400">
                    {it.createdAt ? fmt.format(new Date(it.createdAt)) : "—"}
                  </div>
                  {it.hasCustomDomain && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] border"
                      style={{
                        borderColor: ring,
                        boxShadow: `0 0 24px -10px ${ring}`,
                      }}
                    >
                      {t("live")}
                    </span>
                  )}
                </div>
                <div
                  className="mt-3 h-10 rounded-xl border border-white/10 relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(400px 120px at 20% 0%, rgba(255,255,255,0.08), transparent 60%), " +
                      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                    style={{
                      boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px -30px ${ring}`,
                    }}
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/70">
                    {it.host ?? "—"}
                  </div>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/70">
                    {canOpen ? t("open") : t("urlMissing")}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Divider inverted />
    </div>
  );
}
