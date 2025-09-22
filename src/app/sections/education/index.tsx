"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Title from "../../components/title";

type Props = {};

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3 2 8l10 5 8-4.1V16h2V8L12 3Zm-6 9.3v3.2c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-3.2l-6 3-6-3Z" fill="currentColor" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M4 4h16v2H4V4Zm0 5h16v2H4V9Zm0 5h16v2H4v-2Zm0 5h10v2H4v-2Z" fill="currentColor" />
    </svg>
  );
}

function EduCard({
  title,
  subtitle,
  years,
  name,
  program,
  level,
  location,
  note,
  icon,
}: {
  title: string;
  subtitle: string;
  years: string;
  name: string;
  program?: string;
  level?: string;
  location: string;
  note: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-xl ring-1 ring-black/40 backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
            {icon}
          </span>
          <div>
            <h2 className="text-base font-semibold tracking-wide text-white">{title}</h2>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">{years}</span>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <h3 className="text-lg font-medium text-white">{name}</h3>
        {program ? <p className="mt-1 text-sm text-gray-300">{program}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {level ? <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs text-primary">{level}</span> : null}
          <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-gray-300">{location}</span>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-zinc-950/40 p-3 text-sm text-gray-300">{note}</div>
    </div>
  );
}

export default function Education({}: Props) {
  const t = useTranslations("education");

  const items = [
    {
      key: "uni",
      title: t("title"),
      subtitle: t("subtitle"),
      years: t("uni.years"),
      name: t("uni.name"),
      program: t("uni.program"),
      level: t("uni.level"),
      location: t("uni.location"),
      note: t("uni.note"),
      icon: <CapIcon />,
    },
    {
      key: "hs",
      title: t("hs.title"),
      subtitle: t("hs.subtitle"),
      years: t("hs.years"),
      name: t("hs.name"),
      program: t("hs.department"),
      level: undefined,
      location: t("hs.location"),
      note: t("hs.note"),
      icon: <ListIcon />,
    },
  ] as const;

  return (
    <section className="px-4 max-w-6xl mx-auto my-10 ">
      <Title  title="Educatıon"/> 
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((it) => (
          <EduCard
            key={it.key}
            title={it.title}
            subtitle={it.subtitle}
            years={it.years}
            name={it.name}
            program={it.program}
            level={it.level}
            location={it.location}
            note={it.note}
            icon={it.icon}
          />
        ))}
      </div>
    </section>
  );
}
