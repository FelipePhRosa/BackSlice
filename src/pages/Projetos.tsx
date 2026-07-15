import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../constants/projects";
import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Projetos() {
  usePageMeta(pageMeta.projetos);

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="Projetos"
          titleAs="h1"
          title="Portfólio tratado com transparência desde o início."
          description="Enquanto a empresa constrói histórico de clientes, estudos conceito e internos são apresentados sem fingir prova social."
        />
        <div className="grid gap-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <Badge tone="red">{project.type === "conceito" ? "Projeto conceito" : "Estudo interno"}</Badge>
              <h2 className="mt-4 text-2xl font-black text-ink-100">{project.title}</h2>
              <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <dt className="font-bold text-red-400">Contexto</dt>
                  <dd className="mt-1 text-ink-300">{project.context}</dd>
                </div>
                <div>
                  <dt className="font-bold text-red-400">Problema</dt>
                  <dd className="mt-1 text-ink-300">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-bold text-red-400">Solução</dt>
                  <dd className="mt-1 text-ink-300">{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-bold text-red-400">Resultado esperado</dt>
                  <dd className="mt-1 text-ink-300">{project.expectedResult}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
