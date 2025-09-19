"use client";
import React from "react";

export type Project = {
  name: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  remote?: boolean;
  website?: string;
  start: string; // "YYYY-MM" ya da serbest metin
  end: string; // "YYYY-MM" | "Present" | serbest metin
  summary?: string;
  projects: Project[];
  realtimeNote?: string; // WebSocket gibi notlar
  tech: string[];
};

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article
      className="min-w-[720px] max-w-3xl snap-center shrink-0 rounded-3xl border border-white/10 
                 bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-xl 
                 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] text-zinc-200"
    >
      {/* Header */}
      <header className="p-6 pb-3 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              {exp.role} — {exp.company}
            </h3>
            {exp.remote && (
              <span className="text-[11px] sm:text-xs rounded-full px-2 py-0.5 border border-white/15 bg-white/5 text-zinc-300">
                remote
              </span>
            )}
          </div>

          {(exp.location || exp.website) && (
            <p className="text-sm text-zinc-400">
              {exp.location}
              {exp.location && exp.website ? " • " : ""}
              {exp.website && (
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href={exp.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {new URL(exp.website).host}
                </a>
              )}
            </p>
          )}
        </div>

        <span className="text-[11px] sm:text-xs rounded-full px-3 py-1 border border-white/15 bg-white/5 text-zinc-300 whitespace-nowrap">
          {exp.start} – {exp.end}
        </span>
      </header>

      <div className="px-6">
        <hr className="border-white/10" />
      </div>

      {/* Body */}
      <section className="p-6 pt-4 space-y-4">
        {exp.summary && (
          <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            {exp.summary}
          </p>
        )}

        {/* Projeler */}
        <ul className="space-y-3 text-sm sm:text-[15px] leading-relaxed">
          {exp.projects.map((p) => (
            <li key={p.name} className="flex gap-3">
              <span className="mt-2 h-[6px] w-[6px] rounded-full bg-white/60 shrink-0" />
              <div>
                <span className="font-medium">{p.name}</span>{" "}
                <span>— {p.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Realtime / WebSocket notu */}
        {exp.realtimeNote && (
          <div className="mt-2 text-sm sm:text-[15px] leading-relaxed">
            <span className="font-medium">Gerçek-zamanlı:</span>{" "}
            {exp.realtimeNote}
          </div>
        )}

        {/* Tech chips */}
        {exp.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full px-2.5 py-1 border border-white/15 bg-white/5 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
