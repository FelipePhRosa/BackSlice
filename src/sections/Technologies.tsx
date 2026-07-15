import { Badge } from "../components/Badge";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { technologies } from "../constants/process";

/*
Objetivo comercial: sinalizar capacidade técnica sem vender jargão como produto principal.
Objetivo visual: usar tags discretas para apoio de credibilidade.
Objetivo psicológico: tranquilizar visitantes técnicos sem afastar decisores não técnicos.
CTA esperado: nenhum.
*/
export function Technologies() {
  return (
    <section className="section-spacing">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <SectionHeader
          eyebrow="Tecnologias"
          title="Ferramentas escolhidas pelo que sustentam no projeto."
          description="A stack depende do problema, da manutenção e do ciclo de vida esperado para a solução."
        />
        <Reveal className="flex flex-wrap content-start gap-3">
          {technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
