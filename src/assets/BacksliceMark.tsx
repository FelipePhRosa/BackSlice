export function BacksliceMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="BackSlice">
      <rect width="64" height="64" rx="12" fill="#D71920" />
      <path d="M18 17h22c7 0 12 4 12 10 0 4-2 7-5 8 4 1 7 5 7 10 0 7-6 11-14 11H18V17Zm11 9v8h9c3 0 5-1 5-4s-2-4-5-4h-9Zm0 17v4h11c3 0 5-1 5-4s-2-4-5-4H29v4Z" fill="#fff" />
      <path d="M12 48h15v8H12z" fill="#050505" opacity=".8" />
    </svg>
  );
}
