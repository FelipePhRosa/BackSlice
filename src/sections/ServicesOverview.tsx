import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { activeServices } from "../constants/services";

/*
Objetivo comercial: apresentar ofertas atuais com foco em problema, uso e valor de negócio.
Objetivo visual: organizar serviços em uma grade comparável e densa o bastante para avaliação.
Objetivo psicológico: deslocar a decisão de "comprar um site" para "resolver uma necessidade operacional".
CTA esperado: acesso à página de serviços.
*/
export function ServicesOverview() {
  return (
    <section className="section-spacing border-y border-white/10 bg-black/25">
      <div className="container">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções atuais para presença digital, operação e automação."
          description="Cada entrega é pensada pelo impacto no negócio, não pela quantidade de recursos aparentes."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {activeServices.map((service) => (
            <Reveal key={service.id}>
              <Card className="h-full">
                <h3 className="text-2xl font-black text-ink-100">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-300">{service.shortDescription}</p>
                <dl className="mt-5 grid gap-4 text-sm">
                  <div>
                    <dt className="font-bold text-red-400">Problema</dt>
                    <dd className="mt-1 text-ink-300">{service.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-red-400">Valor de negócio</dt>
                    <dd className="mt-1 text-ink-300">{service.businessValue}</dd>
                  </div>
                </dl>
              </Card>
            </Reveal>
          ))}
        </div>
        <Link className="mt-6 inline-flex text-sm font-bold text-red-400 hover:text-red-300" to="/servicos">
          Ver detalhamento dos serviços
        </Link>
      </div>
    </section>
  );
}
