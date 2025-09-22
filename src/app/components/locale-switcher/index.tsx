"use client"; 
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type Loc = "tr" | "en";

export default function LocaleSwitcher({ current }: { current: Loc }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pending, start] = useTransition();

  const go = (next: Loc) => {
    if (next === current) return;
    start(() => {
      const parts = pathname.split("/");
      parts[1] = next;
      const nextPath = parts.join("/") || `/${next}`;
      router.push(nextPath);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => go("tr")} disabled={pending} title="Türkçe">
        TR
      </button>
      <button onClick={() => go("en")} disabled={pending} title="English">
        EN
      </button>
    </div>
  );
}
