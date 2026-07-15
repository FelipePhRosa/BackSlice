import { Mail, MapPin, MessageCircle } from "lucide-react";
import { LinkButton } from "../components/Button";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { pageMeta, siteConfig } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { createWhatsAppUrl } from "../services/whatsapp";

export default function Contato() {
  usePageMeta(pageMeta.contato);

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="Contato"
          titleAs="h1"
          title="Converse sobre o problema que precisa ser resolvido."
          description="O primeiro contato serve para entender contexto, prioridade e melhor caminho para diagnóstico."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <MessageCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-ink-100">WhatsApp</h2>
            <p className="mt-3 text-sm leading-6 text-ink-300">Canal direto para iniciar uma conversa objetiva sobre o projeto.</p>
            <LinkButton className="mt-5" href={createWhatsAppUrl("Olá, BackSlice. Quero falar sobre um projeto.")} target="_blank" rel="noreferrer">
              Chamar
            </LinkButton>
          </Card>
          <Card>
            <Mail className="h-6 w-6 text-red-400" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-ink-100">Email</h2>
            <a className="mt-3 block text-sm text-ink-300 hover:text-ink-100" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </Card>
          <Card>
            <MapPin className="h-6 w-6 text-red-400" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-ink-100">Base</h2>
            <p className="mt-3 text-sm leading-6 text-ink-300">Pelotas, RS, com atendimento remoto quando fizer sentido para o projeto.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
