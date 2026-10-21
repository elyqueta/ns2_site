import { LocalizedText } from '../i18n/types';

export type BlocoNoticia =
  | { readonly tipo: 'paragrafo' | 'titulo'; readonly texto: LocalizedText }
  | { readonly tipo: 'lista'; readonly itens: readonly LocalizedText[] };

export interface Noticia {
  readonly slug: string;
  readonly titulo: LocalizedText;
  readonly resumo: LocalizedText;
  readonly categoria: LocalizedText;
  readonly data: string;
  readonly tempoLeitura: number;
  readonly imagem: string;
  readonly corpo: readonly BlocoNoticia[];
  readonly autor: LocalizedText;
  readonly href: string;
}

export const noticias: readonly Noticia[] = [
  {
    slug: 'site-ou-landing-page-qual-escolher',
    titulo: {
      pt: 'Landing page, site institucional ou sistema web: qual escolher?',
      en: 'Landing page, company website or web system: which should you choose?',
    },
    resumo: {
      pt: 'Perceba a diferença entre as soluções e escolha a que serve o seu objectivo.',
      en: 'Understand the differences between these solutions and choose the one that fits your goals.',
    },
    categoria: { pt: 'Web e sistemas', en: 'Web and systems' },
    data: '2026-10-14',
    tempoLeitura: 3,
    imagem: 'noticias/site-ou-landing-page-qual-escolher.webp',
    autor: { pt: 'Equipa NS2 Innovation', en: 'NS2 Innovation team' },
    href: '/noticias/site-ou-landing-page-qual-escolher',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Nem todos os projectos web são iguais. Escolher bem poupa tempo e orçamento.',
          en: 'Not all web projects are the same. Choosing well can save time and budget.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Landing page', en: 'Landing page' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Uma única página focada numa acção, por exemplo, pedir um orçamento por WhatsApp. Ideal para lançar rapidamente.',
          en: 'A single page focused on one action, such as requesting a quote on WhatsApp. Ideal for a quick launch.',
        },
      },
      {
        tipo: 'titulo',
        texto: { pt: 'Site institucional ou profissional', en: 'Company or professional website' },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Várias páginas para apresentar a empresa, os serviços e os contactos, com uma imagem cuidada.',
          en: 'Several pages to present your company, services and contact details with a polished look.',
        },
      },
      {
        tipo: 'titulo',
        texto: { pt: 'Loja online ou sistema web', en: 'Online shop or web system' },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quando precisa de login, base de dados, painel de gestão, pedidos ou relatórios, já falamos de uma loja ou de um sistema web.',
          en: 'If you need logins, a database, an admin panel, orders or reports, you need an online shop or web system.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Em dúvida? Conte-nos o seu objectivo e indicamos a solução mais adequada.',
          en: 'Not sure? Tell us your goal and we will suggest a suitable solution.',
        },
      },
    ],
  },
  {
    slug: 'cabeamento-estruturado-o-que-verificar',
    titulo: {
      pt: 'Cabeamento estruturado: o que verificar antes de montar a rede',
      en: 'Structured cabling: what to check before installing a network',
    },
    resumo: {
      pt: 'Planeamento da rede, organização de racks e rede eléctrica andam de mãos dadas.',
      en: 'Network planning, rack organisation and electrical systems all work together.',
    },
    categoria: { pt: 'Dicas de TI', en: 'IT tips' },
    data: '2026-10-09',
    tempoLeitura: 4,
    imagem: 'noticias/cabeamento-estruturado-o-que-verificar.webp',
    autor: { pt: 'Equipa NS2 Innovation', en: 'NS2 Innovation team' },
    href: '/noticias/cabeamento-estruturado-o-que-verificar',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Uma rede bem feita começa antes da primeira ficha: começa no projecto. Um bom planeamento evita improvisos, cabos soltos e falhas difíceis de encontrar.',
          en: 'A well-built network starts before the first cable is connected: it starts with a plan. Good planning avoids loose cables, improvisation and hard-to-find faults.',
        },
      },
      { tipo: 'titulo', texto: { pt: 'Antes de começar', en: 'Before you begin' } },
      {
        tipo: 'lista',
        itens: [
          {
            pt: 'Levantamento do espaço e do número de postos de trabalho',
            en: 'Survey the space and count workstations',
          },
          {
            pt: 'Layout da rede e da rede eléctrica',
            en: 'Plan the network and electrical layout',
          },
          {
            pt: 'Localização do rack e dos pontos de acesso Wi-Fi',
            en: 'Choose locations for the rack and Wi-Fi access points',
          },
          { pt: 'Previsão de crescimento da empresa', en: 'Plan for business growth' },
        ],
      },
      { tipo: 'titulo', texto: { pt: 'Durante e depois', en: 'During and after installation' } },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Organizar o rack, identificar os cabos e documentar a instalação facilita a manutenção e reduz o tempo de resolução de problemas.',
          en: 'Organising the rack, labelling cables and documenting the installation makes maintenance easier and speeds up troubleshooting.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'A NS2 Innovation trata do projecto, instalação e configuração de redes e servidores. Peça-nos um orçamento.',
          en: 'NS2 Innovation handles network and server design, installation and configuration. Request a quote.',
        },
      },
    ],
  },
  {
    slug: 'manutencao-preventiva-evita-paragens',
    titulo: {
      pt: 'Manutenção preventiva: como evitar paragens na sua empresa',
      en: 'Preventive maintenance: how to reduce business downtime',
    },
    resumo: {
      pt: 'Pequenas rotinas regulares evitam falhas inesperadas e poupam tempo e dinheiro.',
      en: 'Simple regular maintenance helps prevent unexpected failures and save time and money.',
    },
    categoria: { pt: 'Dicas de TI', en: 'IT tips' },
    data: '2026-10-05',
    tempoLeitura: 3,
    imagem: 'noticias/manutencao-preventiva-evita-paragens.webp',
    autor: { pt: 'Equipa NS2 Innovation', en: 'NS2 Innovation team' },
    href: '/noticias/manutencao-preventiva-evita-paragens',
    corpo: [
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quando um computador ou servidor falha a meio do dia, o custo não é só a reparação: é o trabalho parado, os clientes à espera e a confiança abalada. A manutenção preventiva existe para reduzir esse risco.',
          en: 'When a computer or server fails during the workday, the cost goes beyond repairs: work stops, customers wait and confidence can suffer. Preventive maintenance helps reduce this risk.',
        },
      },
      {
        tipo: 'titulo',
        texto: {
          pt: 'O que costuma fazer parte da rotina',
          en: 'What a maintenance routine can include',
        },
      },
      {
        tipo: 'lista',
        itens: [
          {
            pt: 'Limpeza interna e externa dos equipamentos',
            en: 'Internal and external equipment cleaning',
          },
          { pt: 'Verificação e avaliação de desempenho', en: 'Performance checks and assessment' },
          { pt: 'Cópias de segurança dos dados', en: 'Data backups' },
          {
            pt: 'Actualização de componentes quando faz sentido',
            en: 'Component upgrades when appropriate',
          },
          { pt: 'Substituição de peças com sinais de desgaste', en: 'Replacement of worn parts' },
        ],
      },
      {
        tipo: 'titulo',
        texto: { pt: 'Preventiva ou correctiva?', en: 'Preventive or corrective maintenance?' },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'A manutenção correctiva resolve o problema depois de ele acontecer; a preventiva procura evitá-lo. Empresas com contrato de TI beneficiam de visitas regulares de suporte preventivo, o que reduz paragens repentinas.',
          en: 'Corrective maintenance fixes a problem after it occurs; preventive maintenance aims to avoid it. Businesses with IT support contracts can benefit from regular preventive visits that help reduce unexpected downtime.',
        },
      },
      {
        tipo: 'paragrafo',
        texto: {
          pt: 'Quer organizar a manutenção dos equipamentos da sua empresa? Fale connosco e preparamos uma proposta adequada.',
          en: 'Would you like to organise maintenance for your business equipment? Get in touch and we will prepare a suitable proposal.',
        },
      },
    ],
  },
];

export const newsPageContent = {
  title: { pt: 'Notícias', en: 'News' } satisfies LocalizedText,
  lead: {
    pt: 'Ideias práticas para acompanhar a tecnologia e tomar decisões informadas.',
    en: 'Practical ideas to keep up with technology and make informed decisions.',
  } satisfies LocalizedText,
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  latestLabel: { pt: 'Artigo em destaque', en: 'Featured article' } satisfies LocalizedText,
  categoryLabel: {
    pt: 'Filtrar notícias por categoria',
    en: 'Filter news by category',
  } satisfies LocalizedText,
  allCategoriesLabel: { pt: 'Todas', en: 'All' } satisfies LocalizedText,
  readLabel: { pt: 'Ler artigo', en: 'Read article' } satisfies LocalizedText,
  minutesLabel: { pt: 'min de leitura', en: 'min read' } satisfies LocalizedText,
  emptyTitle: {
    pt: 'Não há artigos nesta categoria.',
    en: 'There are no articles in this category.',
  } satisfies LocalizedText,
  notFoundTitle: { pt: 'Artigo não encontrado', en: 'Article not found' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'O artigo que procura não está disponível. Explore as notícias publicadas.',
    en: 'The article you are looking for is unavailable. Browse the published news.',
  } satisfies LocalizedText,
  allNewsLabel: { pt: 'Ver todas as notícias', en: 'View all news' } satisfies LocalizedText,
  publishedLabel: { pt: 'Publicado em', en: 'Published on' } satisfies LocalizedText,
  authorLabel: { pt: 'Por', en: 'By' } satisfies LocalizedText,
  shareLabel: { pt: 'Partilhar artigo', en: 'Share article' } satisfies LocalizedText,
  copyLinkLabel: { pt: 'Copiar ligação', en: 'Copy link' } satisfies LocalizedText,
  copySuccess: { pt: 'Ligação copiada.', en: 'Link copied.' } satisfies LocalizedText,
  copyError: {
    pt: 'Não foi possível copiar a ligação. Copie o endereço da página no navegador.',
    en: 'The link could not be copied. Copy the page address from your browser.',
  } satisfies LocalizedText,
  whatsappLabel: { pt: 'Partilhar no WhatsApp', en: 'Share on WhatsApp' } satisfies LocalizedText,
  relatedLabel: { pt: 'Artigos relacionados', en: 'Related articles' } satisfies LocalizedText,
  ctaTitle: {
    pt: 'Tem um desafio de tecnologia?',
    en: 'Have a technology challenge?',
  } satisfies LocalizedText,
  ctaDescription: {
    pt: 'Converse com a NS2 Innovation sobre uma solução adequada à sua realidade.',
    en: 'Talk to NS2 Innovation about a solution suited to your needs.',
  } satisfies LocalizedText,
  contactLabel: { pt: 'Falar connosco', en: 'Get in touch' } satisfies LocalizedText,
  quoteMessage: {
    pt: 'Olá! Gostaria de conversar com a NS2 Innovation sobre uma solução de tecnologia.',
    en: 'Hello! I would like to discuss a technology solution with NS2 Innovation.',
  } satisfies LocalizedText,
} as const;
