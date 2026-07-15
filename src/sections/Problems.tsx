import { AlertTriangle, Clock, Layers3 } from "lucide-react";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

/*
Objetivo comercial: fazer o visitante reconhecer problemas que justificam investimento em tecnologia.
Objetivo visual: apresentar dores em cards objetivos, com leitura rápida e sem dramatização.
Objetivo psicológico: gerar identificação e reduzir a sensação de que o problema é isolado.
CTA esperado: nenhum.
*/
export function Problems() {
  const items = [
    { icon: AlertTriangle, title: "Presença digital frágil", text: "O cliente encontra sua empresa, mas não entende com clareza o que você resolve." },
    { icon: Layers3, title: "Processos espalhados", text: "Informações importantes ficam em planilhas, mensagens e controles sem padrão." },
    { icon: Clock, title: "Tempo perdido em rotinas", text: "Tarefas repetitivas atrasam atendimento, gestão e tomada de decisão." },
  ];

  return (
    <section className="section-spacing border-t border-white/10">
      <div className="container">
        <SectionHeader
          eyebrow="Problemas comuns"
          title="Tecnologia mal resolvida aparece no atendimento, na operação e na confiança."
          description="Antes de escolher uma ferramenta, é preciso entender onde o negócio perde clareza, tempo ou previsibilidade."
        />
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
