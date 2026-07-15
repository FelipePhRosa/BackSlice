import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "../components/Button";
import { Badge } from "../components/Badge";
import { createWhatsAppUrl } from "../services/whatsapp";

/*
Objetivo comercial: iniciar conversas qualificadas pelo WhatsApp com empresas que precisam de tecnologia confiável.
Objetivo visual: estabelecer impacto com tipografia forte, contraste alto e visual técnico sem excesso decorativo.
Objetivo psicológico: transmitir segurança técnica e proximidade antes de apresentar serviços.
CTA esperado: WhatsApp e rota para serviços.
*/
export function Hero() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Badge tone="red">Tecnologia em Pelotas, RS</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-ink-100 md:text-7xl">
            Soluções digitais confiáveis para empresas que precisam operar melhor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300">
            A BackSlice desenvolve sites profissionais, sistemas personalizados e automações empresariais com diagnóstico claro, escopo responsável e entrega técnica consistente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={createWhatsAppUrl("Olá, BackSlice. Quero conversar sobre uma solução digital para minha empresa.")}
              target="_blank"
              rel="noreferrer"
              icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
            >
              Conversar pelo WhatsApp
            </LinkButton>
            <LinkButton to="/servicos" variant="ghost" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Ver serviços
            </LinkButton>
          </div>
        </div>

        <div className="hero-visual-grid relative min-h-[28rem] overflow-hidden rounded-lg border border-white/10 bg-ink-900 p-4 shadow-2xl shadow-red-950/20" aria-label="Visual técnico de sistemas BackSlice">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(215,25,32,0.22),transparent_18rem)]" />
          <div className="relative ml-auto grid max-w-md gap-4">
            {["Diagnóstico", "Escopo", "Entrega"].map((label, index) => (
              <div key={label} className="rounded-lg border border-white/10 bg-black/55 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-ink-100">{label}</span>
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                </div>
                <div className="mt-4 grid gap-2">
                  <span className="h-2 rounded-full bg-white/15" style={{ width: `${86 - index * 8}%` }} />
                  <span className="h-2 rounded-full bg-red-500/55" style={{ width: `${44 + index * 9}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-red-500/30 bg-red-600/10 p-4">
            <p className="text-sm font-bold text-red-400">Fluxo validado antes da entrega</p>
            <p className="mt-2 text-sm leading-6 text-ink-300">Planejamento, desenvolvimento e revisão em etapas compreensíveis para o negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
