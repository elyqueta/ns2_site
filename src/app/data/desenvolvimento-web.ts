import { LocalizedText } from '../i18n/types';

export interface NivelWeb {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly aPartirDe: number | null;
  readonly prazo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly inclui: readonly LocalizedText[];
}

export const desenvolvimentoWebContent = {
  hero: {
    title: { pt: 'Websites e sistemas web à medida.' } satisfies LocalizedText,
    lead: {
      pt: 'Do site institucional ao sistema de gestão: desenhamos, desenvolvemos e publicamos soluções web rápidas, seguras e preparadas para crescer com o seu negócio.',
    } satisfies LocalizedText,
    homeLabel: { pt: 'Início' } satisfies LocalizedText,
    breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
  },
  proof: {
    text: { pt: 'A NS2 desenvolveu o site da Gráfica Viva.' } satisfies LocalizedText,
    link: { pt: 'Conheça o projecto' } satisfies LocalizedText,
  },
  sections: {
    websites: {
      index: { pt: '01 — Websites' } satisfies LocalizedText,
      title: { pt: 'Presença digital para cada etapa.' } satisfies LocalizedText,
      description: {
        pt: 'Escolha o ponto de partida; os detalhes e o valor final são confirmados em proposta.',
      } satisfies LocalizedText,
    },
    shops: {
      index: { pt: '02 — Lojas online' } satisfies LocalizedText,
      title: { pt: 'Venda online, com uma base preparada para crescer.' } satisfies LocalizedText,
      description: {
        pt: 'Os níveis partem de uma loja essencial e evoluem para operações com mais gestão e integrações.',
      } satisfies LocalizedText,
      paymentNote: {
        pt: 'Pagamento online, ERP e logística são orçamentados à parte.',
      } satisfies LocalizedText,
    },
    systems: {
      index: { pt: '03 — Sistemas web' } satisfies LocalizedText,
      title: { pt: 'Sistemas web Full Stack.' } satisfies LocalizedText,
      description: {
        pt: 'Aplicações com utilizadores, dados e processos ajustados à realidade da organização.',
      } satisfies LocalizedText,
    },
    maintenance: {
      index: { pt: '05 — Manutenção' } satisfies LocalizedText,
      title: { pt: 'Acompanhamento depois da entrega.' } satisfies LocalizedText,
      priceLabel: { pt: 'Planos de manutenção a partir de' } satisfies LocalizedText,
      description: {
        pt: 'Pequenas alterações, correcções, acompanhamento, actualizações, cópias de segurança e monitorização, conforme o plano. Detalhes sob proposta.',
      } satisfies LocalizedText,
      startingPrice: 30000,
    },
    process: {
      index: { pt: '06 — Como trabalhamos' } satisfies LocalizedText,
      title: { pt: 'Um processo claro, do primeiro contacto à entrega.' } satisfies LocalizedText,
      paymentNote: {
        pt: 'O pagamento é faseado e detalhado na proposta.',
      } satisfies LocalizedText,
    },
    diagnostic: {
      index: { pt: '07 — Diagnóstico' } satisfies LocalizedText,
      title: { pt: 'Qual é a solução certa para si?' } satisfies LocalizedText,
      description: {
        pt: 'Escolha o cenário mais próximo do seu desafio para encontrar opções e pedir um orçamento.',
      } satisfies LocalizedText,
      viewLabel: { pt: 'Ver solução' } satisfies LocalizedText,
      quoteLabel: { pt: 'Pedir orçamento' } satisfies LocalizedText,
    },
    faq: {
      index: { pt: '08 — Perguntas frequentes' } satisfies LocalizedText,
      title: { pt: 'Dúvidas comuns sobre desenvolvimento web.' } satisfies LocalizedText,
    },
    quote: {
      title: { pt: 'Vamos construir o seu próximo projecto?' } satisfies LocalizedText,
      description: {
        pt: 'Partilhe o que pretende e conversamos sobre a solução adequada.',
      } satisfies LocalizedText,
      whatsappLabel: { pt: 'Falar no WhatsApp' } satisfies LocalizedText,
      contactLabel: { pt: 'Ver contactos' } satisfies LocalizedText,
      whatsappMessage: {
        pt: 'Olá! Gostaria de conversar sobre um projecto web.',
      } satisfies LocalizedText,
    },
  },
  labels: {
    startingAt: { pt: 'A partir de' } satisfies LocalizedText,
    quoteLabel: { pt: 'Pedir orçamento' } satisfies LocalizedText,
    contactLabel: { pt: 'Pedir pelo formulário' } satisfies LocalizedText,
    pagesLabel: { pt: 'Páginas' } satisfies LocalizedText,
    termLabel: { pt: 'Prazo estimado' } satisfies LocalizedText,
    includesLabel: { pt: 'Inclui' } satisfies LocalizedText,
    notIncludedLabel: { pt: 'Não inclui' } satisfies LocalizedText,
    quoteRequired: { pt: 'Sob orçamento' } satisfies LocalizedText,
    infrastructureNote: {
      pt: 'Publicação, domínio e alojamento: orçamentados à parte.',
    } satisfies LocalizedText,
    systemTimelineLabel: {
      pt: 'Etapas de desenvolvimento de um sistema grande',
    } satisfies LocalizedText,
    automationPending: {
      pt: 'Esta opção aguarda confirmação antes de ser apresentada como serviço.',
    } satisfies LocalizedText,
  },
} as const;

export const lojaPacotes: readonly NivelWeb[] = [
  {
    slug: 'loja-essencial',
    nome: { pt: 'Loja Essencial' },
    aPartirDe: 450000,
    prazo: { pt: '30–60 dias' },
    descricao: {
      pt: 'Uma base para apresentar produtos e receber pedidos através do WhatsApp.',
    },
    inclui: [
      { pt: 'Catálogo, categorias e páginas de produto' },
      { pt: 'Páginas institucionais' },
      { pt: 'Finalização do pedido por WhatsApp' },
      { pt: 'Painel de gestão de produtos e categorias' },
      { pt: 'Gestão de imagens' },
      { pt: 'Base de dados e API' },
    ],
  },
  {
    slug: 'loja-profissional',
    nome: { pt: 'Loja Profissional' },
    aPartirDe: 650000,
    prazo: { pt: 'Sob orçamento' },
    descricao: {
      pt: 'Acrescenta ferramentas de pesquisa, gestão de pedidos e análise básica.',
    },
    inclui: [
      { pt: 'Tudo o que está incluído na Loja Essencial' },
      { pt: 'Pesquisa e filtros' },
      { pt: 'Gestão de clientes e pedidos com estados' },
      { pt: 'Promoções' },
      { pt: 'Maior personalização do tema' },
      { pt: 'Relatórios básicos' },
    ],
  },
  {
    slug: 'loja-avancada',
    nome: { pt: 'Loja Avançada' },
    aPartirDe: 900000,
    prazo: { pt: 'Sob orçamento' },
    descricao: {
      pt: 'Acrescenta possibilidades de pagamento e ferramentas de integração e acompanhamento.',
    },
    inclui: [
      { pt: 'Tudo o que está incluído na Loja Profissional' },
      { pt: 'Possibilidade de pagamentos' },
      { pt: 'Integrações' },
      { pt: 'Cupões' },
      { pt: 'Notificações' },
      { pt: 'Analítica' },
    ],
  },
];

export const sistemaPacotes: readonly NivelWeb[] = [
  {
    slug: 'sistema-mvp',
    nome: { pt: 'MVP' },
    aPartirDe: 600000,
    prazo: { pt: '45–60 dias' },
    descricao: {
      pt: 'Uma primeira versão funcional para gerir os dados e os acessos essenciais.',
    },
    inclui: [
      { pt: 'Autenticação e perfis de utilizador' },
      { pt: 'Painel administrativo' },
      { pt: 'Gestão de dados (CRUD)' },
      { pt: 'API e base de dados' },
      { pt: 'Validações e permissões básicas' },
    ],
  },
  {
    slug: 'sistema-medio',
    nome: { pt: 'Sistema médio' },
    aPartirDe: 900000,
    prazo: { pt: '60–120 dias' },
    descricao: {
      pt: 'Acrescenta módulos e fluxos para operações com mais necessidades.',
    },
    inclui: [
      { pt: 'Vários módulos e perfis' },
      { pt: 'Relatórios e dashboards' },
      { pt: 'Notificações e integrações' },
      { pt: 'Auditoria e fluxos de trabalho' },
    ],
  },
  {
    slug: 'sistema-grande',
    nome: { pt: 'Sistema grande / Enterprise' },
    aPartirDe: null,
    prazo: { pt: '3 meses ou mais' },
    descricao: {
      pt: 'ERP, sistemas de gestão empresarial, plataformas educativas e marketplaces, desenvolvidos por fases com requisitos documentados e entregas por módulos.',
    },
    inclui: [
      { pt: 'Requisitos documentados' },
      { pt: 'Desenvolvimento por fases e módulos' },
      { pt: 'Testes, segurança, publicação e homologação' },
    ],
  },
];

export const etapasSistemaGrande: readonly LocalizedText[] = [
  { pt: 'Descoberta' },
  { pt: 'Requisitos' },
  { pt: 'Arquitectura' },
  { pt: 'Desenho UX/UI' },
  { pt: 'Protótipo' },
  { pt: 'MVP' },
  { pt: 'Desenvolvimento por módulos' },
  { pt: 'Testes' },
  { pt: 'Segurança' },
  { pt: 'Publicação' },
  { pt: 'Homologação' },
  { pt: 'Produção' },
  { pt: 'Manutenção' },
];

export const processoDesenvolvimentoWeb: readonly LocalizedText[] = [
  { pt: 'Contacto' },
  { pt: 'Diagnóstico' },
  { pt: 'Proposta' },
  { pt: 'Contrato e entrada' },
  { pt: 'Execução (com revisões)' },
  { pt: 'Entrega e manutenção' },
];

export const diagnosticoWeb = [
  {
    id: 'presenca-rapida',
    necessidade: { pt: 'Quer presença rápida' } satisfies LocalizedText,
    recomendacao: ['landing-page', 'site-institucional'],
  },
  {
    id: 'imagem-empresa',
    necessidade: {
      pt: 'Tem uma empresa e quer cuidar da imagem',
    } satisfies LocalizedText,
    recomendacao: ['site-profissional', 'site-empresarial'],
  },
  {
    id: 'vender-produtos',
    necessidade: { pt: 'Quer vender produtos' } satisfies LocalizedText,
    recomendacao: ['loja-essencial', 'loja-profissional', 'loja-avancada'],
  },
  {
    id: 'processos-internos',
    necessidade: {
      pt: 'Tem processos internos, registos e relatórios',
    } satisfies LocalizedText,
    recomendacao: ['sistema-mvp', 'sistema-medio', 'sistema-grande'],
  },
  {
    id: 'mensagens-whatsapp',
    necessidade: {
      pt: 'Recebe muitas mensagens no WhatsApp',
    } satisfies LocalizedText,
    recomendacao: [],
  },
] as const;

export const desenvolvimentoWebFaq = [
  {
    id: 'prazo-desenvolvimento',
    question: { pt: 'Quanto tempo demora?' } satisfies LocalizedText,
    answer: {
      pt: 'Depende do pacote (ver prazos). O prazo começa quando recebemos conteúdos e acessos.',
    } satisfies LocalizedText,
  },
  {
    id: 'alterar-depois-entrega',
    question: {
      pt: 'Posso alterar depois de entregue?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Incluímos duas rondas de revisões durante o projecto; alterações adicionais são orçamentadas. Também temos planos de manutenção.',
    } satisfies LocalizedText,
  },
  {
    id: 'dominio-alojamento',
    question: {
      pt: 'O domínio e o alojamento estão incluídos?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Não estão incluídos no valor de desenvolvimento; são orçamentados à parte conforme as suas necessidades.',
    } satisfies LocalizedText,
  },
  {
    id: 'site-sistema',
    question: {
      pt: 'Qual a diferença entre site e sistema web?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Um site apresenta a empresa; um sistema web tem login, base de dados e painel para gerir informação, como utilizadores, pedidos e stocks.',
    } satisfies LocalizedText,
  },
  {
    id: 'pagamento-loja',
    question: {
      pt: 'Vendem na loja com pagamento online?',
    } satisfies LocalizedText,
    answer: {
      pt: 'A loja base finaliza o pedido por WhatsApp; o pagamento online é uma extensão orçamentada à parte.',
    } satisfies LocalizedText,
  },
  {
    id: 'pedir-orcamento',
    question: {
      pt: 'Como peço um orçamento?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Por WhatsApp, email ou pelo formulário de contacto.',
    } satisfies LocalizedText,
  },
] as const;
