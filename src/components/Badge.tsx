interface BadgeProps {
  children: string;
  tone?: "red" | "neutral";
}

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  const classes =
    tone === "red"
      ? "border-red-500/50 bg-red-600/10 text-red-400"
      : "border-white/10 bg-white/[0.04] text-ink-300";

  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${classes}`}>{children}</span>;
}
