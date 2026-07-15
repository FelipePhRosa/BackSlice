import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-lg border border-white/10 bg-white/[0.035] p-5 ${className}`}>{children}</div>;
}
