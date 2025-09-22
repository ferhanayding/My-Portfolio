"use client";
import React from "react";
import Link from "next/link";

type Props = React.PropsWithChildren<{ href: `#${string}` | `/#${string}` }>;

export default function HashLink({ href, children }: Props) {
  const onClick = (e: React.MouseEvent) => {
    const id = href.startsWith("/#") ? href.slice(2) : href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // odak erişilebilirliği
      (el as HTMLElement).focus?.();
    }
  };
  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
