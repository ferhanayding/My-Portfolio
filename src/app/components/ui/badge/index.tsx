export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 ring-1 ring-white/15">
      {children}
    </span>
  );
}