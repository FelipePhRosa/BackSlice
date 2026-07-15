import { MessageCircle } from "lucide-react";
import { LinkButton } from "../components/Button";
import { createWhatsAppUrl } from "../services/whatsapp";

/*
Objetivo comercial: converter visitantes já informados em conversa direta.
Objetivo visual: encerrar com bloco forte, simples e sem ruído.
Objetivo psicológico: deixar claro que o próximo passo é diagnóstico, não uma compra impulsiva.
CTA esperado: WhatsApp e orçamento estruturado.
*/
export function FinalCTA() {
  return (
    <section className="section-spacing">
      <div className="container rounded-lg border border-red-500/30 bg-red-600/10 p-8 md:p-12">
        <p className="eyebrow mb-3">Próximo passo</p>
        <h2 className="max-w-3xl text-3xl font-black leading-tight text-ink-100 md:text-5xl">
          Vamos entender o problema antes de definir a solução.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-300">
          Uma boa conversa inicial já ajuda a separar urgência, escopo, prioridade e caminho técnico.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={createWhatsAppUrl("Olá, BackSlice. Quero iniciar um diagnóstico para minha empresa.")}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
          >
            Chamar no WhatsApp
          </LinkButton>
          <LinkButton to="/orcamento" variant="secondary">
            Solicitar orçamento
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
