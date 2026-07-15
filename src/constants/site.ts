import type { PageMeta } from "../types/content";

export const siteConfig = {
  name: "BackSlice",
  baseUrl: "https://backslice.com.br",
  city: "Pelotas",
  region: "RS",
  country: "BR",
  whatsappNumber: "5553999999999",
  email: "contato@backslice.com.br",
  description:
    "Tecnologia confiável para sites profissionais, sistemas personalizados e automações empresariais em Pelotas, RS.",
};

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "BackSlice | Tecnologia confiável em Pelotas RS",
    description:
      "Desenvolvimento de sites profissionais, sistemas personalizados e automações empresariais para empresas em Pelotas e no Rio Grande do Sul.",
    path: "/",
  },
  empresa: {
    title: "Empresa | BackSlice",
    description:
      "Conheça a BackSlice, empresa de tecnologia em Pelotas focada em diagnóstico, planejamento e entrega técnica confiável.",
    path: "/empresa",
  },
  servicos: {
    title: "Serviços | BackSlice",
    description:
      "Sites institucionais, landing pages, sistemas personalizados e automações empresariais com foco em confiabilidade.",
    path: "/servicos",
  },
  projetos: {
    title: "Projetos | BackSlice",
    description:
      "Projetos conceito e estudos internos da BackSlice, apresentados com transparência sobre contexto, solução e tecnologias.",
    path: "/projetos",
  },
  contato: {
    title: "Contato | BackSlice",
    description:
      "Fale com a BackSlice para avaliar sites, sistemas e automações empresariais em Pelotas, RS.",
    path: "/contato",
  },
  orcamento: {
    title: "Orçamento | BackSlice",
    description:
      "Solicite um orçamento estruturado para site, landing page, sistema personalizado ou automação empresarial.",
    path: "/orcamento",
  },
  blog: {
    title: "Blog | BackSlice",
    description:
      "Conteúdos técnicos da BackSlice sobre desenvolvimento de software, sites profissionais e sistemas personalizados.",
    path: "/blog",
  },
};
