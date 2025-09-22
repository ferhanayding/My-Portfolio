"use client";
import React from "react";

export type Project = {
  name: string;
  website?: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  remote?: boolean;
  website?: string;
  start: string;
  end: string;
  summary?: string;
  projects: Project[];
  realtimeNote?: string;
  tech: string[];
};

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article
      key={exp?.company}
      className="
        min-w-full md:min-w-[720px] md:max-w-3xl 
        snap-center shrink-0 rounded-3xl border border-white/10 
        bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-xl 
        shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] text-zinc-200
      "
    >
      <header
        className="
          p-4 sm:p-5 md:p-6 pb-2 md:pb-3 
          flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4
        "
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
              {exp.role} — {exp.company}
            </h3>
            {exp.remote && (
              <span className="text-[10px] sm:text-[11px] md:text-xs rounded-full px-2 py-0.5 border border-white/15 bg-white/5 text-zinc-300">
                remote
              </span>
            )}
          </div>

          {(exp.location || exp.website) && (
            <p className="text-xs sm:text-sm text-zinc-400 break-words">
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

        <span className="self-start md:self-auto text-[10px] sm:text-[11px] md:text-xs rounded-full px-2.5 md:px-3 py-1 border border-white/15 bg-white/5 text-zinc-300 whitespace-nowrap">
          {exp.start} – {exp.end}
        </span>
      </header>

      <div className="px-4 sm:px-5 md:px-6">
        <hr className="border-white/10" />
      </div>

      <section className="p-4 sm:p-5 md:p-6 pt-3 md:pt-4 space-y-4">
        {exp.summary && (
          <p className="text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-zinc-300">
            {exp.summary}
          </p>
        )}

        <ul className="space-y-3 text-[13px] sm:text-sm md:text-[15px] leading-relaxed">
          {exp.projects.map((p) => (
            <li key={p.name} className="flex gap-3">
              <span className="mt-2 h-[5px] w-[5px] md:h-[6px] md:w-[6px] rounded-full bg-white/60 shrink-0" />
              <div className="min-w-0">
                <span className="font-medium">
                  {p.website ? (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </span>{" "}
                — <span className="break-words">{p.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {exp.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] sm:text-xs rounded-full px-2 py-1 border border-white/15 bg-white/5 text-zinc-300"
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
