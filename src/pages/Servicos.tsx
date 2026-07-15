import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { LinkButton } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { activeServices, futureServices } from "../constants/services";
import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Servicos() {
  usePageMeta(pageMeta.servicos);

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="Serviços"
          titleAs="h1"
          title="Tecnologia aplicada a problemas concretos do negócio."
          description="Os serviços atuais cobrem presença digital, páginas focadas, sistemas internos e automações."
        />
        <div className="grid gap-4">
          {activeServices.map((service) => (
            <Card key={service.id}>
              <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
                <div>
                  <Badge tone="red">Disponível</Badge>
                  <h2 className="mt-4 text-2xl font-black text-ink-100">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink-300">{service.shortDescription}</p>
                </div>
                <dl className="grid gap-4 text-sm md:grid-cols-2">
                  <div>
                    <dt className="font-bold text-red-400">Problema que resolve</dt>
                    <dd className="mt-1 text-ink-300">{service.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-red-400">Benefício direto</dt>
                    <dd className="mt-1 text-ink-300">{service.benefit}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-red-400">Aplicação prática</dt>
                    <dd className="mt-1 text-ink-300">{service.practicalUse}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-red-400">Valor de negócio</dt>
                    <dd className="mt-1 text-ink-300">{service.businessValue}</dd>
                  </div>
                </dl>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-black text-ink-100">Arquitetura preparada para próximos serviços</h2>
          <p className="mt-3 text-sm leading-6 text-ink-300">
            Estes temas estão previstos na estrutura de dados, mas não são vendidos como oferta ativa neste momento.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {futureServices.map((service) => (
              <Badge key={service.id}>{service.title}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <LinkButton to="/orcamento">Solicitar orçamento</LinkButton>
        </div>
      </div>
    </section>
  );
}
