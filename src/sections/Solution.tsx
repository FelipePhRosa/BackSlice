import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

/*
Objetivo comercial: explicar o método da BackSlice sem transformar processo interno em espetáculo.
Objetivo visual: criar uma ponte clara entre dor e solução por meio de uma sequência simples.
Objetivo psicológico: mostrar controle, responsabilidade e ausência de improviso.
CTA esperado: nenhum.
*/
export function Solution() {
  const items = ["Diagnóstico antes da proposta", "Escopo compreensível para decisores", "Entrega técnica validada em etapas"];

  return (
    <section className="section-spacing">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <SectionHeader
          eyebrow="Como resolvemos"
          title="A solução começa no problema real, não na tecnologia da moda."
          description="A BackSlice traduz necessidades do negócio em soluções digitais mantíveis, com comunicação objetiva do início ao suporte."
        />
        <Reveal className="rounded-lg border border-white/10 bg-ink-900 p-6">
          <div className="grid gap-5">
            {items.map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                <p className="text-lg font-bold text-ink-100">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
