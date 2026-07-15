import { ArrowRight, Loader2 } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  isLoading?: boolean;
  icon?: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string; href?: string };

const variantClasses: Record<Variant, string> = {
  primary: "bg-red-600 text-white hover:bg-red-500 active:bg-red-400 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  secondary: "bg-ink-100 text-ink-950 hover:bg-white active:bg-ink-300",
  ghost: "border border-white/12 bg-white/[0.03] text-ink-100 hover:border-red-500/70 hover:bg-red-600/10",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  variant = "primary",
  isLoading = false,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} disabled={props.disabled || isLoading} {...props}>
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : icon}
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  icon,
  className = "",
  to,
  href,
  ...props
}: LinkButtonProps) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {!icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  );
}
