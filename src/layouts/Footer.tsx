import { Link } from "react-router-dom";
import { BacksliceMark } from "../assets/BacksliceMark";
import { navigationItems } from "../constants/navigation";
import { siteConfig } from "../constants/site";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 font-black">
            <img src={logo} alt="BackSlice" className="h-12 w-12" />
            <span>BackSlice</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink-300">
            Empresa de tecnologia em Pelotas, RS, focada em soluções confiáveis para presença digital, sistemas e automações.
          </p>
        </div>
        <nav aria-label="Rodapé" className="grid gap-2 text-sm text-ink-300">
          {navigationItems.map((item) => (
            <Link key={item.href} className="hover:text-ink-100" to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-6 text-ink-300">
          <p>{siteConfig.city}, {siteConfig.region}</p>
          <a className="hover:text-ink-100" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
