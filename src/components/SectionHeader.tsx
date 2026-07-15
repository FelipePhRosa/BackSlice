interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2";
}

export function SectionHeader({ eyebrow, title, description, titleAs = "h2" }: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <div className="mb-8 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <TitleTag className="text-3xl font-black leading-tight text-ink-100 md:text-5xl">{title}</TitleTag>
      {description && <p className="mt-4 text-base leading-7 text-ink-300 md:text-lg">{description}</p>}
    </div>
  );
}
