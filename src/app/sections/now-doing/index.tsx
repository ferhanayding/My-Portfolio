"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Title from "../../components/ui/title";
import Link from "next/link";
import Divider from "../../components/ui/divider";
import Badge from "../../components/ui/badge";
import Dot from "../../components/ui/dot";

export default function NowDoing() {
  const t = useTranslations("nowDoing");

  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto my-10 text-center">
        <Title title={t("title")} />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 p-6 ring-1 ring-black/40 backdrop-blur">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge>
              {t("startLabel")}: {t("startValue")}
            </Badge>
            <Dot />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Şarkılarla İngilizce Öğren
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-300">{t("desc")}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>{t("tagPhonetic")}</Badge>
            <Badge>{t("tagDetail")}</Badge>
            <Badge>{t("tagSearch")}</Badge>
            <Badge>{t("tagPagination")}</Badge>
            <Badge>{t("tagAuth")}</Badge>
            <Badge>{t("tagSupabaseAuth")}</Badge>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-sm font-medium text-white">
              {t("summaryTitle")}
            </h3>
            <p className="mt-1 text-sm text-gray-300">{t("summaryText")}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
              <h4 className="text-sm font-medium text-white">
                {t("currentTitle")}
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>• {t("current1")}</li>
                <li>• {t("current2")}</li>
                <li>• {t("current3")}</li>
                <li>• {t("current4")}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
              <h4 className="text-sm font-medium text-white">
                {t("plannedTitle")}
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>• {t("planned1")}</li>
                <li>• {t("planned2")}</li>
                <li>• {t("planned3")}</li>
                <li>• {t("planned4")}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Next.js</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Supabase</Badge>
            <Badge>Next.js API Routes</Badge>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-4">
            <div className="group relative h-[200px] sm:h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 ring-1 ring-black/40">
              <Image
                src="/images/nowdoing1.png"
                alt={t("imageAlt1")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>

            <div className="group relative h-[200px] sm:h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 ring-1 ring-black/40">
              <Image
                src="/images/nowdoing2.png"
                alt={t("imageAlt2")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>

            <div className="flex justify-center mt-4">
              <Link
                target="_blank"
                href="https://sarkilarla-ingilizce-ogren.vercel.app/song/back-to-black"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 hover:opacity-90"
              >
                {t("goLive")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}
