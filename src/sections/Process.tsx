import { processSteps } from "../constants/process";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

/*
Objetivo comercial: mostrar previsibilidade de condução sem expor detalhes internos irrelevantes.
Objetivo visual: apresentar uma linha de etapas simples, escaneável e consistente.
Objetivo psicológico: diminuir incerteza sobre como o projeto sai da conversa inicial até o suporte.
CTA esperado: nenhum.
*/
export function Process() {
  return (
    <section className="section-spacing border-y border-white/10 bg-black/25">
      <div className="container">
        <SectionHeader
          eyebrow="Processo"
          title="Do diagnóstico ao suporte, cada etapa tem função clara."
          description="A sequência evita improviso e ajuda o cliente a acompanhar o projeto sem precisar dominar termos técnicos."
        />
        <div className="grid gap-3 md:grid-cols-7">
          {processSteps.map((step, index) => (
            <Reveal key={step}>
              <div className="h-full rounded-lg border border-white/10 bg-ink-900 p-4">
                <span className="text-sm font-black text-red-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-sm font-black text-ink-100">{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
