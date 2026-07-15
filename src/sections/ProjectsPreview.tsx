import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../constants/projects";

/*
Objetivo comercial: demonstrar pensamento de projeto com transparência enquanto o portfólio real amadurece.
Objetivo visual: destacar contexto, problema e solução sem logos ou clientes fictícios.
Objetivo psicológico: construir confiança pela honestidade sobre projetos conceito.
CTA esperado: acesso à página de projetos.
*/
export function ProjectsPreview() {
  return (
    <section className="section-spacing border-y border-white/10 bg-black/25">
      <div className="container">
        <SectionHeader
          eyebrow="Projetos"
          title="Estudos apresentados com transparência total."
          description="Projetos conceito e internos são identificados como tal. Nenhum cliente fictício é tratado como cliente real."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.id}>
              <Card className="h-full">
                <Badge tone="red">{project.type === "conceito" ? "Projeto conceito" : "Estudo interno"}</Badge>
                <h3 className="mt-5 text-xl font-black text-ink-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-300">{project.solution}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Link className="mt-6 inline-flex text-sm font-bold text-red-400 hover:text-red-300" to="/projetos">
          Ver projetos
        </Link>
      </div>
    </section>
  );
}
