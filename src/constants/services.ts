import type { FutureService, Service } from "../types/content";

export const activeServices: Service[] = [
  {
    id: "sites",
    slug: "sites-institucionais",
    title: "Sites institucionais",
    shortDescription: "Presença digital clara, técnica e preparada para crescer.",
    problem: "A empresa precisa ser encontrada e compreendida sem depender de explicações repetidas.",
    benefit: "Um site objetivo organiza a proposta, aumenta confiança e reduz ruído no primeiro contato.",
    practicalUse: "Ideal para empresas que precisam apresentar serviços, área de atuação, contato e autoridade local.",
    businessValue: "Ajuda o decisor a avaliar sua empresa com segurança antes de iniciar uma conversa comercial.",
    status: "active",
  },
  {
    id: "landing-pages",
    slug: "landing-pages",
    title: "Landing pages",
    shortDescription: "Páginas focadas em uma oferta, campanha ou validação.",
    problem: "Campanhas e iniciativas perdem força quando o visitante não encontra uma rota clara de decisão.",
    benefit: "Uma página direcionada reduz distrações e conduz a conversa para uma ação objetiva.",
    practicalUse: "Útil para lançamentos, serviços específicos, eventos, captação de leads ou testes de mercado.",
    businessValue: "Transforma tráfego e interesse em contatos mais qualificados para o time comercial.",
    status: "active",
  },
  {
    id: "sistemas",
    slug: "sistemas-personalizados",
    title: "Sistemas personalizados",
    shortDescription: "Ferramentas sob medida para operações que já não cabem em planilhas soltas.",
    problem: "Processos importantes ficam lentos, frágeis ou dependentes de controles manuais.",
    benefit: "Um sistema centraliza dados, padroniza fluxos e reduz falhas operacionais.",
    practicalUse: "Atende cadastros, painéis internos, portais, rotinas administrativas e fluxos específicos.",
    businessValue: "Gera previsibilidade operacional e libera tempo para decisões de maior impacto.",
    status: "active",
  },
  {
    id: "automacoes",
    slug: "automacoes-empresariais",
    title: "Automações empresariais",
    shortDescription: "Rotinas conectadas para diminuir retrabalho e atrasos.",
    problem: "Tarefas repetitivas consomem tempo e criam inconsistência entre atendimento, gestão e entrega.",
    benefit: "Automações conectam etapas, notificações e registros sem exigir atenção manual constante.",
    practicalUse: "Pode ligar formulários, planilhas, sistemas, alertas, CRM e processos internos.",
    businessValue: "Reduz custo operacional e melhora a confiabilidade do fluxo de trabalho.",
    status: "active",
  },
];

export const futureServices: FutureService[] = [
  { id: "infraestrutura", title: "Infraestrutura", status: "planned" },
  { id: "redes", title: "Redes", status: "planned" },
  { id: "servidores", title: "Servidores", status: "planned" },
  { id: "backup", title: "Backup", status: "planned" },
  { id: "suporte", title: "Suporte gerenciado", status: "planned" },
];
