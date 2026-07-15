import { ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

/*
Objetivo comercial: diferenciar a BackSlice pela confiabilidade e pelo cuidado técnico.
Objetivo visual: usar três pilares fortes, sem números inventados ou prova social falsa.
Objetivo psicológico: reforçar que a empresa será parceira na solução, não apenas fornecedora visual.
CTA esperado: nenhum.
*/
export function Differentials() {
  const items = [
    { icon: ShieldCheck, title: "Confiabilidade como critério", text: "Decisões técnicas são tomadas para reduzir risco, facilitar manutenção e preservar clareza." },
    { icon: SlidersHorizontal, title: "Escopo responsável", text: "O projeto é dimensionado conforme necessidade, maturidade e prioridade do negócio." },
    { icon: Wrench, title: "Entrega com suporte", text: "A entrega não termina no envio dos arquivos. Validação e orientação fazem parte do trabalho." },
  ];

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader eyebrow="Diferenciais" title="Técnica suficiente para resolver, clareza suficiente para decidir." />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <item.icon className="h-6 w-6 text-red-400" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black text-ink-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-300">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
