import { faqItems } from "../constants/faq";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";

/*
Objetivo comercial: remover objeções iniciais antes do contato.
Objetivo visual: usar perguntas expansíveis nativas e acessíveis, mantendo a página objetiva.
Objetivo psicológico: responder dúvidas sem pressão comercial ou urgência artificial.
CTA esperado: nenhum.
*/
export function FAQ() {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Perguntas que ajudam a iniciar uma conversa mais objetiva." />
        <div className="grid gap-3">
          {faqItems.map((item) => (
            <Reveal key={item.question}>
              <details className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <summary className="cursor-pointer text-base font-black text-ink-100">{item.question}</summary>
                <p className="mt-4 text-sm leading-6 text-ink-300">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
