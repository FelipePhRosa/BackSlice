import { Card } from "../components/Card";
import { LinkButton } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Empresa() {
  usePageMeta(pageMeta.empresa);

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="Empresa"
          titleAs="h1"
          title="Uma empresa de tecnologia para cuidar da solução com clareza técnica."
          description="A BackSlice nasce em Pelotas, RS, com foco em construir relações regionais sólidas e expandir com responsabilidade."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h2 className="text-xl font-black text-ink-100">Quem somos</h2>
            <p className="mt-3 text-sm leading-6 text-ink-300">
              Uma empresa nova, técnica e próxima, criada para atender organizações que precisam transformar problemas digitais em soluções confiáveis.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-ink-100">Forma de trabalho</h2>
            <p className="mt-3 text-sm leading-6 text-ink-300">
              Primeiro entendemos o problema, depois definimos escopo, tecnologia, prazo e critérios de validação. A conversa é objetiva e sem promessa vazia.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-ink-100">Direção</h2>
            <p className="mt-3 text-sm leading-6 text-ink-300">
              O foco atual está em sites, landing pages, sistemas e automações. A arquitetura da empresa já permite evoluir para infraestrutura e suporte no futuro.
            </p>
          </Card>
        </div>
        <div className="mt-8">
          <LinkButton to="/contato">Falar com a BackSlice</LinkButton>
        </div>
      </div>
    </section>
  );
}
