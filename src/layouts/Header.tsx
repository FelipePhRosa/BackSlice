import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BacksliceMark } from "../assets/BacksliceMark";
import { LinkButton } from "../components/Button";
import { navigationItems } from "../constants/navigation";
import { createWhatsAppUrl } from "../services/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/88 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-3 font-black" to="/" aria-label="BackSlice - página inicial">
          <BacksliceMark />
          <span>BackSlice</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-300 md:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <NavLink key={item.href} className={({ isActive }) => (isActive ? "text-ink-100" : "hover:text-ink-100")} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href={createWhatsAppUrl("Olá, BackSlice. Quero conversar sobre um projeto.")} target="_blank" rel="noreferrer">
            WhatsApp
          </LinkButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 md:hidden"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink-950 p-4 md:hidden" aria-label="Navegação móvel">
          <div className="container grid gap-3">
            {navigationItems.map((item) => (
              <NavLink key={item.href} className="rounded-md px-3 py-2 text-sm font-bold text-ink-100 hover:bg-white/5" to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <LinkButton href={createWhatsAppUrl("Olá, BackSlice. Quero conversar sobre um projeto.")} target="_blank" rel="noreferrer">
              WhatsApp
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  );
}
