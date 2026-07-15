import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Blog() {
  usePageMeta(pageMeta.blog);

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="Blog"
          titleAs="h1"
          title="Estrutura pronta para conteúdo técnico e SEO futuro."
          description="O blog será usado para conteúdos sobre desenvolvimento de software, sites profissionais, sistemas personalizados e automações."
        />
        <Card>
          <Badge tone="red">Em breve</Badge>
          <h2 className="mt-5 text-2xl font-black text-ink-100">Conteúdo em preparação</h2>
          <p className="mt-3 text-sm leading-6 text-ink-300">
            A área está preparada para receber artigos sem publicar textos genéricos apenas para preencher espaço.
          </p>
        </Card>
      </div>
    </section>
  );
}
