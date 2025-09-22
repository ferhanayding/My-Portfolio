"use client";
import * as React from "react";

export function TRFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" width="28" height="18" {...props} aria-hidden>
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="25" cy="20" r="9" fill="#fff" />
      <circle cx="28" cy="20" r="7" fill="#E30A17" />
      <path
        d="M35.5 20l6.5 2.1-4-5.6v7l4-5.6-6.5 2.1z"
        fill="#fff"
        transform="translate(-2,0)"
      />
    </svg>
  );
}

export function GBFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" width="28" height="18" {...props} aria-hidden>
      <clipPath id="c">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clipPath="url(#c)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#C8102E" strokeWidth="4" />
        <rect x="26" width="8" height="40" fill="#fff" />
        <rect y="16" width="60" height="8" fill="#fff" />
        <rect x="28" width="4" height="40" fill="#C8102E" />
        <rect y="18" width="60" height="4" fill="#C8102E" />
      </g>
    </svg>
  );
}
