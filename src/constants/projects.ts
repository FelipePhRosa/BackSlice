import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "portal-operacional",
    title: "Portal operacional para equipe interna",
    type: "conceito",
    context: "Estudo conceitual criado para demonstrar como uma PME pode consolidar rotinas internas.",
    problem: "Informações espalhadas entre mensagens, planilhas e controles manuais dificultam acompanhamento.",
    solution: "Protótipo de painel com cadastros, status de demandas, filtros e visão de prioridades.",
    technologies: ["React", "TypeScript", "API REST", "PostgreSQL"],
    expectedResult: "Menos dependência de controles paralelos e maior clareza sobre etapas pendentes.",
  },
  {
    id: "site-servicos-regionais",
    title: "Site institucional para serviço regional",
    type: "conceito",
    context: "Projeto conceito para uma empresa local que precisa explicar serviços técnicos com clareza.",
    problem: "O visitante não entende rapidamente o que a empresa resolve, onde atende e como iniciar contato.",
    solution: "Arquitetura de páginas com proposta clara, serviços organizados, FAQ e CTA direto para conversa.",
    technologies: ["React", "Vite", "Tailwind CSS", "SEO técnico"],
    expectedResult: "Primeiro contato mais qualificado e presença digital mais confiável em buscas regionais.",
  },
  {
    id: "automacao-atendimento",
    title: "Fluxo de automação para atendimento",
    type: "interno",
    context: "Estudo interno de integração entre formulário, qualificação e registro de solicitações.",
    problem: "Solicitações chegam incompletas e exigem várias mensagens antes do diagnóstico inicial.",
    solution: "Formulário estruturado, encaminhamento por canal correto e registro padronizado dos dados.",
    technologies: ["TypeScript", "Webhooks", "Integrações", "Validação de dados"],
    expectedResult: "Diagnóstico mais rápido e menor perda de informação no início do projeto.",
  },
];
