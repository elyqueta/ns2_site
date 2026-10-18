import { IconName } from '../shared/ui/icon/icon';
import { LocalizedText } from '../i18n/types';

export interface DestaqueProduto {
  readonly etiqueta: LocalizedText;
  readonly titulo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly mensagemWhatsApp: LocalizedText;
}

export interface CategoriaProduto {
  readonly slug: string;
  readonly titulo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly icone: IconName;
  readonly ordem: number;
  readonly href: string;
  readonly mensagemWhatsApp: LocalizedText;
  readonly imagem: {
    readonly alt: LocalizedText;
    readonly ficheiroEsperado: LocalizedText;
  };
  readonly destaques: readonly DestaqueProduto[];
}

export const produtos: readonly CategoriaProduto[] = [
  {
    slug: 'notebooks',
    titulo: { pt: 'Portáteis' },
    descricao: {
      pt: 'Equipamentos novos e seminovos Dell, Lenovo, HP e Apple, com opções para o mercado empresarial, o dia-a-dia, a portabilidade e o alto desempenho.',
    },
    icone: 'laptop',
    ordem: 1,
    href: '/produtos#notebooks',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Portáteis.' },
    imagem: {
      alt: { pt: 'Computadores portáteis de diferentes linhas e marcas.' },
      ficheiroEsperado: { pt: 'public/images/produtos/notebooks.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Dell' },
        titulo: { pt: 'Latitude' },
        descricao: {
          pt: 'Linha para uso empresarial, com acabamento e design muito resistentes.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Dell Latitude.' },
      },
      {
        etiqueta: { pt: 'Dell' },
        titulo: { pt: 'Inspiron' },
        descricao: { pt: 'Desempenho ideal para o dia-a-dia.' },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Dell Inspiron.' },
      },
      {
        etiqueta: { pt: 'Lenovo' },
        titulo: { pt: 'ThinkPad' },
        descricao: {
          pt: 'Linha para o mercado corporativo, com design leve, resistência e desempenho diferenciados.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Lenovo ThinkPad.' },
      },
      {
        etiqueta: { pt: 'Lenovo' },
        titulo: { pt: 'IdeaPad' },
        descricao: {
          pt: 'Série com configuração robusta e pensada para uma experiência multimédia diferenciada.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Lenovo IdeaPad.' },
      },
      {
        etiqueta: { pt: 'HP' },
        titulo: { pt: 'EliteBook' },
        descricao: {
          pt: 'Linha focada no ambiente corporativo, com elevada capacidade de processamento, qualidade e durabilidade.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em HP EliteBook.' },
      },
      {
        etiqueta: { pt: 'Apple — MacBook' },
        titulo: { pt: 'Air' },
        descricao: {
          pt: 'Modelos de entrada da Apple, focados na portabilidade, com excelente bateria e design ultrafino.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Apple MacBook Air.' },
      },
      {
        etiqueta: { pt: 'Apple — MacBook' },
        titulo: { pt: 'Pro' },
        descricao: {
          pt: 'Elevada capacidade de processamento para edição de vídeo, modelação e aplicações de alto desempenho.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em Apple MacBook Pro.' },
      },
    ],
  },
  {
    slug: 'desktops',
    titulo: { pt: 'Computadores de secretária' },
    descricao: {
      pt: 'Equipamentos novos e seminovos das principais marcas, com modelos para diferentes necessidades e montagem personalizada sob encomenda.',
    },
    icone: 'desktop',
    ordem: 2,
    href: '/produtos#desktops',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em computadores de secretária.' },
    imagem: {
      alt: { pt: 'Computadores de secretária para diferentes necessidades.' },
      ficheiroEsperado: { pt: 'public/images/produtos/desktops.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Dell' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em computadores Dell.' },
      },
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Lenovo' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em computadores Lenovo.' },
      },
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'HP' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em computadores HP.' },
      },
      {
        etiqueta: { pt: 'À medida' },
        titulo: { pt: 'Montagem personalizada' },
        descricao: {
          pt: 'Montagem de computadores de secretária à medida da procura.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em montagem personalizada de computador de secretária.',
        },
      },
    ],
  },
  {
    slug: 'pecas',
    titulo: { pt: 'Peças' },
    descricao: {
      pt: 'Componentes, equipamentos e activos de rede, peças e acessórios para aquisição ou reposição, manutenção, actualização ou montagem personalizada.',
    },
    icone: 'component',
    ordem: 3,
    href: '/produtos#pecas',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em peças e componentes.' },
    imagem: {
      alt: { pt: 'Componentes e peças para equipamentos informáticos e redes.' },
      ficheiroEsperado: { pt: 'public/images/produtos/pecas.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Componentes' },
        titulo: { pt: 'Componentes informáticos' },
        descricao: {
          pt: 'Componentes para aquisição, reposição, manutenção ou actualização.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em componentes informáticos.' },
      },
      {
        etiqueta: { pt: 'Redes' },
        titulo: { pt: 'Equipamentos e activos de rede' },
        descricao: {
          pt: 'Equipamentos e activos de rede para aquisição ou reposição.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em equipamentos e activos de rede.' },
      },
      {
        etiqueta: { pt: 'Personalização' },
        titulo: { pt: 'Montagem personalizada' },
        descricao: {
          pt: 'Montagem de equipamentos personalizados sob encomenda.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em montagem de equipamento personalizado.',
        },
      },
    ],
  },
  {
    slug: 'acessorios',
    titulo: { pt: 'Acessórios' },
    descricao: {
      pt: 'Acessórios de várias marcas para melhorar o desempenho e o conforto nas suas actividades.',
    },
    icone: 'accessory',
    ordem: 4,
    href: '/produtos#acessorios',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios informáticos.' },
    imagem: {
      alt: { pt: 'Acessórios informáticos para diferentes actividades.' },
      ficheiroEsperado: { pt: 'public/images/produtos/acessorios.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Dell' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Dell.' },
      },
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Knup' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Knup.' },
      },
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Multilaser' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Multilaser.' },
      },
      {
        etiqueta: { pt: 'Marca' },
        titulo: { pt: 'Samsung' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Samsung.' },
      },
    ],
  },
  {
    slug: 'moveis',
    titulo: { pt: 'Mobiliário' },
    descricao: {
      pt: 'Mobiliário de escritório e gamer para criar espaços de trabalho e setups funcionais, confortáveis e acolhedores.',
    },
    icone: 'chair',
    ordem: 5,
    href: '/produtos#moveis',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em mobiliário.' },
    imagem: {
      alt: { pt: 'Mobiliário para escritório e espaços de gaming.' },
      ficheiroEsperado: { pt: 'public/images/produtos/moveis.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Escritório' },
        titulo: { pt: 'Mesas, estantes, cadeiras e gaveteiros' },
        descricao: {
          pt: 'Mobiliário em várias cores e dimensões para criar um espaço de trabalho elegante, produtivo e acolhedor.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em mobiliário de escritório.' },
      },
      {
        etiqueta: { pt: 'Gamer' },
        titulo: { pt: 'Mesas e cadeiras gamer' },
        descricao: {
          pt: 'Mesas com espaço para acomodar o setup e cadeiras que privilegiam conforto e ergonomia.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em mesas e cadeiras gamer.' },
      },
    ],
  },
  {
    slug: 'consumiveis',
    titulo: { pt: 'Consumíveis' },
    descricao: {
      pt: 'Toners, cartuchos de tinta, papel para impressão, dispositivos de armazenamento e acessórios essenciais no dia-a-dia.',
    },
    icone: 'printer',
    ordem: 6,
    href: '/produtos#consumiveis',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em consumíveis informáticos.' },
    imagem: {
      alt: { pt: 'Consumíveis e acessórios essenciais para impressão e informática.' },
      ficheiroEsperado: { pt: 'public/images/produtos/consumiveis.webp' },
    },
    destaques: [
      {
        etiqueta: { pt: 'Impressão' },
        titulo: { pt: 'Toners e cartuchos de tinta' },
        descricao: {
          pt: 'Consumíveis para impressão para empresas e particulares.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em toners e cartuchos de tinta.' },
      },
      {
        etiqueta: { pt: 'Impressão' },
        titulo: { pt: 'Papel para impressão' },
        descricao: { pt: 'Papel para as necessidades de impressão do dia-a-dia.' },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em papel para impressão.' },
      },
      {
        etiqueta: { pt: 'Armazenamento' },
        titulo: { pt: 'Dispositivos de armazenamento' },
        descricao: { pt: 'Dispositivos de armazenamento para uso informático.' },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em dispositivos de armazenamento.' },
      },
      {
        etiqueta: { pt: 'Informática' },
        titulo: { pt: 'Acessórios essenciais' },
        descricao: {
          pt: 'Acessórios de informática essenciais no dia-a-dia.',
        },
        mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios de informática.' },
      },
    ],
  },
];

export const productsPageContent = {
  homeLabel: { pt: 'Início' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
  title: { pt: 'Produtos' } satisfies LocalizedText,
  lead: {
    pt: 'Adquira todos os componentes tecnológicos de que precisa, para si e para o seu negócio, aqui na NS2 Innovation.',
  } satisfies LocalizedText,
  categoryNavigationLabel: { pt: 'Categorias de produtos' } satisfies LocalizedText,
  categoryCardLabel: { pt: 'Opções disponíveis' } satisfies LocalizedText,
  quoteLabel: { pt: 'Pedir orçamento' } satisfies LocalizedText,
  brandsLabel: { pt: 'Marcas de produtos referidas pela NS2 Innovation' } satisfies LocalizedText,
  brands: ['Dell', 'Lenovo', 'HP', 'Apple', 'Samsung', 'Knup', 'Multilaser'],
  notFoundTitle: { pt: 'Não encontra o que procura?' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'Fale connosco sobre o produto de que precisa e peça um orçamento.',
  } satisfies LocalizedText,
  whatsappMessage: {
    pt: 'Olá! Procuro um produto informático e gostaria de pedir um orçamento.',
  } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos' } satisfies LocalizedText,
} as const;
