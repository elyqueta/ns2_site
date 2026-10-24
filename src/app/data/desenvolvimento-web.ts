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
    title: {
      pt: 'Websites e sistemas web à medida.',
      en: 'Websites and web systems tailored to your needs.',
    } satisfies LocalizedText,
    lead: {
      pt: 'Do site institucional ao sistema de gestão: desenhamos, desenvolvemos e publicamos soluções web rápidas, seguras e preparadas para crescer com o seu negócio.',
      en: 'From company websites to management systems, we design, build and launch fast, secure web solutions ready to grow with your business.',
    } satisfies LocalizedText,
    homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
    breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  },
  proof: {
    text: {
      pt: 'A NS2 desenvolveu o site da Gráfica Viva.',
      en: 'NS2 developed the Gráfica Viva website.',
    } satisfies LocalizedText,
    link: { pt: 'Conheça o projecto', en: 'View the project' } satisfies LocalizedText,
  },
  sections: {
    websites: {
      index: { pt: '/ — Websites', en: '/ — Websites' } satisfies LocalizedText,
      title: {
        pt: 'Presença digital para cada etapa.',
        en: 'A digital presence for every stage.',
      } satisfies LocalizedText,
      description: {
        pt: 'Escolha o ponto de partida; os detalhes e o valor final são confirmados em proposta.',
        en: 'Choose a starting point; details and the final price will be confirmed in a proposal.',
      } satisfies LocalizedText,
    },
    shops: {
      index: { pt: '/ — Lojas online', en: '/ — Online shops' } satisfies LocalizedText,
      title: {
        pt: 'Venda online, com uma base preparada para crescer.',
        en: 'Sell online with a foundation built to grow.',
      } satisfies LocalizedText,
      description: {
        pt: 'Os níveis partem de uma loja essencial e evoluem para operações com mais gestão e integrações.',
        en: 'Options range from an essential shop to operations with more management tools and integrations.',
      } satisfies LocalizedText,
      paymentNote: {
        pt: 'Pagamento online, ERP e logística são orçamentados à parte.',
        en: 'Online payments, ERP and logistics are quoted separately.',
      } satisfies LocalizedText,
    },
    systems: {
      index: { pt: '/ — Sistemas web', en: '/ — Web systems' } satisfies LocalizedText,
      title: {
        pt: 'Sistemas web Full Stack.',
        en: 'Full-stack web systems.',
      } satisfies LocalizedText,
      description: {
        pt: 'Aplicações com utilizadores, dados e processos ajustados à realidade da organização.',
        en: 'Applications with users, data and processes tailored to your organisation.',
      } satisfies LocalizedText,
    },
    maintenance: {
      index: { pt: '/ — Manutenção', en: '/ — Maintenance' } satisfies LocalizedText,
      title: {
        pt: 'Acompanhamento depois da entrega.',
        en: 'Support after delivery.',
      } satisfies LocalizedText,
      priceLabel: {
        pt: 'Planos de manutenção a partir de',
        en: 'Maintenance plans starting at',
      } satisfies LocalizedText,
      description: {
        pt: 'Pequenas alterações, correcções, acompanhamento, actualizações, cópias de segurança e monitorização, conforme o plano. Detalhes sob proposta.',
        en: 'Minor changes, fixes, support, updates, backups and monitoring, depending on the plan. Details are provided in a proposal.',
      } satisfies LocalizedText,
      startingPrice: 30000,
    },
    process: {
      index: { pt: '/ — Como trabalhamos', en: '/ — How we work' } satisfies LocalizedText,
      title: {
        pt: 'Um processo claro, do primeiro contacto à entrega.',
        en: 'A clear process, from first contact to delivery.',
      } satisfies LocalizedText,
      paymentNote: {
        pt: 'O pagamento é faseado e detalhado na proposta.',
        en: 'Payments are staged and detailed in the proposal.',
      } satisfies LocalizedText,
    },
    diagnostic: {
      index: { pt: '/ — Diagnóstico', en: '/ — Find the right solution' } satisfies LocalizedText,
      title: {
        pt: 'Qual é a solução certa para si?',
        en: 'Which solution is right for you?',
      } satisfies LocalizedText,
      description: {
        pt: 'Escolha o cenário mais próximo do seu desafio para encontrar opções e pedir um orçamento.',
        en: 'Choose the scenario closest to your challenge to explore options and request a quote.',
      } satisfies LocalizedText,
      viewLabel: { pt: 'Ver solução', en: 'View solution' } satisfies LocalizedText,
      quoteLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
    },
    faq: {
      index: {
        pt: '/ — Perguntas frequentes',
        en: '/ — Frequently asked questions',
      } satisfies LocalizedText,
      title: {
        pt: 'Dúvidas comuns sobre desenvolvimento web.',
        en: 'Common questions about web development.',
      } satisfies LocalizedText,
    },
    quote: {
      title: {
        pt: 'Vamos construir o seu próximo projecto?',
        en: 'Shall we build your next project?',
      } satisfies LocalizedText,
      description: {
        pt: 'Partilhe o que pretende e conversamos sobre a solução adequada.',
        en: 'Tell us what you have in mind and we will discuss a suitable solution.',
      } satisfies LocalizedText,
      whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
      contactLabel: { pt: 'Ver contactos', en: 'View contact details' } satisfies LocalizedText,
      whatsappMessage: {
        pt: 'Olá! Gostaria de conversar sobre um projecto web.',
        en: 'Hello! I would like to discuss a web project.',
      } satisfies LocalizedText,
    },
  },
  labels: {
    startingAt: { pt: 'A partir de', en: 'Starting at' } satisfies LocalizedText,
    quoteLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
    contactLabel: { pt: 'Pedir pelo formulário', en: 'Request via form' } satisfies LocalizedText,
    pagesLabel: { pt: 'Páginas', en: 'Pages' } satisfies LocalizedText,
    termLabel: { pt: 'Prazo estimado', en: 'Estimated timeline' } satisfies LocalizedText,
    includesLabel: { pt: 'Inclui', en: 'Includes' } satisfies LocalizedText,
    notIncludedLabel: { pt: 'Não inclui', en: 'Not included' } satisfies LocalizedText,
    quoteRequired: { pt: 'Sob orçamento', en: 'Custom quote' } satisfies LocalizedText,
    infrastructureNote: {
      pt: 'Publicação, domínio e alojamento: orçamentados à parte.',
      en: 'Launch, domain and hosting are quoted separately.',
    } satisfies LocalizedText,
    systemTimelineLabel: {
      pt: 'Etapas de desenvolvimento de um sistema grande',
      en: 'Large system development stages',
    } satisfies LocalizedText,
    automationPending: {
      pt: 'Esta opção aguarda confirmação antes de ser apresentada como serviço.',
      en: 'This option is awaiting confirmation before it can be presented as a service.',
    } satisfies LocalizedText,
  },
} as const;

export const lojaPacotes: readonly NivelWeb[] = [
  {
    slug: 'loja-essencial',
    nome: { pt: 'Loja Essencial', en: 'Essential Shop' },
    aPartirDe: 450000,
    prazo: { pt: '30–60 dias', en: '30–60 days' },
    descricao: {
      pt: 'Uma base para apresentar produtos e receber pedidos através do WhatsApp.',
      en: 'A foundation to present products and receive orders through WhatsApp.',
    },
    inclui: [
      {
        pt: 'Catálogo, categorias e páginas de produto',
        en: 'Catalogue, categories and product pages',
      },
      { pt: 'Páginas institucionais', en: 'Company information pages' },
      { pt: 'Finalização do pedido por WhatsApp', en: 'Order completion through WhatsApp' },
      {
        pt: 'Painel de gestão de produtos e categorias',
        en: 'Product and category management panel',
      },
      { pt: 'Gestão de imagens', en: 'Image management' },
      { pt: 'Base de dados e API', en: 'Database and API' },
    ],
  },
  {
    slug: 'loja-profissional',
    nome: { pt: 'Loja Profissional', en: 'Professional Shop' },
    aPartirDe: 650000,
    prazo: { pt: 'Sob orçamento', en: 'Custom quote' },
    descricao: {
      pt: 'Acrescenta ferramentas de pesquisa, gestão de pedidos e análise básica.',
      en: 'Adds search, order management and basic reporting tools.',
    },
    inclui: [
      {
        pt: 'Tudo o que está incluído na Loja Essencial',
        en: 'Everything included in the Essential Shop',
      },
      { pt: 'Pesquisa e filtros', en: 'Search and filters' },
      {
        pt: 'Gestão de clientes e pedidos com estados',
        en: 'Customer and order management with statuses',
      },
      { pt: 'Promoções', en: 'Promotions' },
      { pt: 'Maior personalização do tema', en: 'More theme customisation' },
      { pt: 'Relatórios básicos', en: 'Basic reports' },
    ],
  },
  {
    slug: 'loja-avancada',
    nome: { pt: 'Loja Avançada', en: 'Advanced Shop' },
    aPartirDe: 900000,
    prazo: { pt: 'Sob orçamento', en: 'Custom quote' },
    descricao: {
      pt: 'Acrescenta possibilidades de pagamento e ferramentas de integração e acompanhamento.',
      en: 'Adds payment options and tools for integration and monitoring.',
    },
    inclui: [
      {
        pt: 'Tudo o que está incluído na Loja Profissional',
        en: 'Everything included in the Professional Shop',
      },
      { pt: 'Possibilidade de pagamentos', en: 'Payment options' },
      { pt: 'Integrações', en: 'Integrations' },
      { pt: 'Cupões', en: 'Coupons' },
      { pt: 'Notificações', en: 'Notifications' },
      { pt: 'Analítica', en: 'Analytics' },
    ],
  },
];

export const sistemaPacotes: readonly NivelWeb[] = [
  {
    slug: 'sistema-mvp',
    nome: { pt: 'MVP', en: 'MVP' },
    aPartirDe: 600000,
    prazo: { pt: '45–60 dias', en: '45–60 days' },
    descricao: {
      pt: 'Uma primeira versão funcional para gerir os dados e os acessos essenciais.',
      en: 'A first functional version for managing essential data and access.',
    },
    inclui: [
      { pt: 'Autenticação e perfis de utilizador', en: 'Authentication and user profiles' },
      { pt: 'Painel administrativo', en: 'Admin panel' },
      { pt: 'Gestão de dados (CRUD)', en: 'Data management (CRUD)' },
      { pt: 'API e base de dados', en: 'API and database' },
      { pt: 'Validações e permissões básicas', en: 'Validation and basic permissions' },
    ],
  },
  {
    slug: 'sistema-medio',
    nome: { pt: 'Sistema médio', en: 'Medium-sized system' },
    aPartirDe: 900000,
    prazo: { pt: '60–120 dias', en: '60–120 days' },
    descricao: {
      pt: 'Acrescenta módulos e fluxos para operações com mais necessidades.',
      en: 'Adds modules and workflows for more complex operations.',
    },
    inclui: [
      { pt: 'Vários módulos e perfis', en: 'Multiple modules and profiles' },
      { pt: 'Relatórios e dashboards', en: 'Reports and dashboards' },
      { pt: 'Notificações e integrações', en: 'Notifications and integrations' },
      { pt: 'Auditoria e fluxos de trabalho', en: 'Audit trail and workflows' },
    ],
  },
  {
    slug: 'sistema-grande',
    nome: { pt: 'Sistema grande / Enterprise', en: 'Large / enterprise system' },
    aPartirDe: null,
    prazo: { pt: '3 meses ou mais', en: '3 months or more' },
    descricao: {
      pt: 'ERP, sistemas de gestão empresarial, plataformas educativas e marketplaces, desenvolvidos por fases com requisitos documentados e entregas por módulos.',
      en: 'ERP, business management systems, education platforms and marketplaces, delivered in phases with documented requirements and modular releases.',
    },
    inclui: [
      { pt: 'Requisitos documentados', en: 'Documented requirements' },
      { pt: 'Desenvolvimento por fases e módulos', en: 'Development in phases and modules' },
      {
        pt: 'Testes, segurança, publicação e homologação',
        en: 'Testing, security, launch and acceptance',
      },
    ],
  },
];

export const etapasSistemaGrande: readonly LocalizedText[] = [
  { pt: 'Descoberta', en: 'Discovery' },
  { pt: 'Requisitos', en: 'Requirements' },
  { pt: 'Arquitectura', en: 'Architecture' },
  { pt: 'Desenho UX/UI', en: 'UX/UI design' },
  { pt: 'Protótipo', en: 'Prototype' },
  { pt: 'MVP', en: 'MVP' },
  { pt: 'Desenvolvimento por módulos', en: 'Modular development' },
  { pt: 'Testes', en: 'Testing' },
  { pt: 'Segurança', en: 'Security' },
  { pt: 'Publicação', en: 'Launch' },
  { pt: 'Homologação', en: 'Acceptance testing' },
  { pt: 'Produção', en: 'Production' },
  { pt: 'Manutenção', en: 'Maintenance' },
];

export const processoDesenvolvimentoWeb: readonly LocalizedText[] = [
  { pt: 'Contacto', en: 'Get in touch' },
  { pt: 'Diagnóstico', en: 'Discovery' },
  { pt: 'Proposta', en: 'Proposal' },
  { pt: 'Contrato e entrada', en: 'Agreement and deposit' },
  { pt: 'Execução (com revisões)', en: 'Implementation (with revisions)' },
  { pt: 'Entrega e manutenção', en: 'Delivery and maintenance' },
];

export const diagnosticoWeb = [
  {
    id: 'presenca-rapida',
    necessidade: {
      pt: 'Quer presença rápida',
      en: 'You need an online presence quickly',
    } satisfies LocalizedText,
    recomendacao: ['landing-page', 'site-institucional'],
  },
  {
    id: 'imagem-empresa',
    necessidade: {
      pt: 'Tem uma empresa e quer cuidar da imagem',
      en: 'You have a business and want to build its image',
    } satisfies LocalizedText,
    recomendacao: ['site-profissional', 'site-empresarial'],
  },
  {
    id: 'vender-produtos',
    necessidade: {
      pt: 'Quer vender produtos',
      en: 'You want to sell products',
    } satisfies LocalizedText,
    recomendacao: ['loja-essencial', 'loja-profissional', 'loja-avancada'],
  },
  {
    id: 'processos-internos',
    necessidade: {
      pt: 'Tem processos internos, registos e relatórios',
      en: 'You manage internal processes, records and reports',
    } satisfies LocalizedText,
    recomendacao: ['sistema-mvp', 'sistema-medio', 'sistema-grande'],
  },
  {
    id: 'mensagens-whatsapp',
    necessidade: {
      pt: 'Recebe muitas mensagens no WhatsApp',
      en: 'You receive many WhatsApp messages',
    } satisfies LocalizedText,
    recomendacao: [],
  },
] as const;

export const desenvolvimentoWebFaq = [
  {
    id: 'prazo-desenvolvimento',
    question: { pt: 'Quanto tempo demora?', en: 'How long does it take?' } satisfies LocalizedText,
    answer: {
      pt: 'Depende do pacote (ver prazos). O prazo começa quando recebemos conteúdos e acessos.',
      en: 'It depends on the package (see timelines). The schedule starts once we receive the content and access details.',
    } satisfies LocalizedText,
  },
  {
    id: 'alterar-depois-entrega',
    question: {
      pt: 'Posso alterar depois de entregue?',
      en: 'Can I make changes after delivery?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Incluímos duas rondas de revisões durante o projecto; alterações adicionais são orçamentadas. Também temos planos de manutenção.',
      en: 'Two rounds of revisions are included during the project; additional changes are quoted separately. Maintenance plans are also available.',
    } satisfies LocalizedText,
  },
  {
    id: 'dominio-alojamento',
    question: {
      pt: 'O domínio e o alojamento estão incluídos?',
      en: 'Are the domain and hosting included?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Não estão incluídos no valor de desenvolvimento; são orçamentados à parte conforme as suas necessidades.',
      en: 'They are not included in the development price and are quoted separately to suit your needs.',
    } satisfies LocalizedText,
  },
  {
    id: 'site-sistema',
    question: {
      pt: 'Qual a diferença entre site e sistema web?',
      en: 'What is the difference between a website and a web system?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Um site apresenta a empresa; um sistema web tem login, base de dados e painel para gerir informação, como utilizadores, pedidos e stocks.',
      en: 'A website presents a company; a web system includes logins, a database and a panel to manage information such as users, orders and inventory.',
    } satisfies LocalizedText,
  },
  {
    id: 'pagamento-loja',
    question: {
      pt: 'Vendem na loja com pagamento online?',
      en: 'Can customers pay online in the shop?',
    } satisfies LocalizedText,
    answer: {
      pt: 'A loja base finaliza o pedido por WhatsApp; o pagamento online é uma extensão orçamentada à parte.',
      en: 'The standard shop completes orders through WhatsApp; online payments are a separately quoted extension.',
    } satisfies LocalizedText,
  },
  {
    id: 'pedir-orcamento',
    question: {
      pt: 'Como peço um orçamento?',
      en: 'How do I request a quote?',
    } satisfies LocalizedText,
    answer: {
      pt: 'Por WhatsApp, email ou pelo formulário de contacto.',
      en: 'By WhatsApp, email or the contact form.',
    } satisfies LocalizedText,
  },
] as const;
