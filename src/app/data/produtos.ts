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
    titulo: { pt: 'Portáteis', en: 'Laptops' },
    descricao: {
      pt: 'Equipamentos novos e seminovos Dell, Lenovo, HP e Apple, com opções para o mercado empresarial, o dia-a-dia, a portabilidade e o alto desempenho.',
      en: 'New and pre-owned Dell, Lenovo, HP and Apple equipment, with options for business use, everyday work, portability and high performance.',
    },
    icone: 'laptop',
    ordem: 1,
    href: '/produtos#notebooks',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em Portáteis.',
      en: 'Hello! I am interested in laptops.',
    },
      imagem: {
        alt: {
          pt: 'Cliente a testar um portátil numa loja',
          en: 'Customer testing a laptop in a store',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/notebooks.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Dell' },
        titulo: { pt: 'Latitude' },
        descricao: {
          pt: 'Linha para uso empresarial, com acabamento e design muito resistentes.',
          en: 'A business line with a durable build and design.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Dell Latitude.',
          en: 'Hello! I am interested in Dell Latitude.',
        },
      },
      {
        etiqueta: { pt: 'Dell' },
        titulo: { pt: 'Inspiron' },
        descricao: {
          pt: 'Desempenho ideal para o dia-a-dia.',
          en: 'Performance for everyday use.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Dell Inspiron.',
          en: 'Hello! I am interested in Dell Inspiron.',
        },
      },
      {
        etiqueta: { pt: 'Lenovo' },
        titulo: { pt: 'ThinkPad' },
        descricao: {
          pt: 'Linha para o mercado corporativo, com design leve, resistência e desempenho diferenciados.',
          en: 'A business line combining a lightweight design, durability and strong performance.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Lenovo ThinkPad.',
          en: 'Hello! I am interested in Lenovo ThinkPad.',
        },
      },
      {
        etiqueta: { pt: 'Lenovo' },
        titulo: { pt: 'IdeaPad' },
        descricao: {
          pt: 'Série com configuração robusta e pensada para uma experiência multimédia diferenciada.',
          en: 'A robust configuration designed for a versatile multimedia experience.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Lenovo IdeaPad.',
          en: 'Hello! I am interested in Lenovo IdeaPad.',
        },
      },
      {
        etiqueta: { pt: 'HP' },
        titulo: { pt: 'EliteBook' },
        descricao: {
          pt: 'Linha focada no ambiente corporativo, com elevada capacidade de processamento, qualidade e durabilidade.',
          en: 'A business-focused line with strong processing capability, quality and durability.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em HP EliteBook.',
          en: 'Hello! I am interested in HP EliteBook.',
        },
      },
      {
        etiqueta: { pt: 'Apple — MacBook' },
        titulo: { pt: 'Air' },
        descricao: {
          pt: 'Modelos de entrada da Apple, focados na portabilidade, com excelente bateria e design ultrafino.',
          en: 'Apple entry-level models focused on portability, with excellent battery life and an ultra-thin design.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Apple MacBook Air.',
          en: 'Hello! I am interested in Apple MacBook Air.',
        },
      },
      {
        etiqueta: { pt: 'Apple — MacBook' },
        titulo: { pt: 'Pro' },
        descricao: {
          pt: 'Elevada capacidade de processamento para edição de vídeo, modelação e aplicações de alto desempenho.',
          en: 'High processing capability for video editing, modelling and demanding applications.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em Apple MacBook Pro.',
          en: 'Hello! I am interested in Apple MacBook Pro.',
        },
      },
    ],
  },
  {
    slug: 'desktops',
    titulo: { pt: 'Computadores de secretária', en: 'Desktop computers' },
    descricao: {
      pt: 'Equipamentos novos e seminovos das principais marcas, com modelos para diferentes necessidades e montagem personalizada sob encomenda.',
      en: 'New and pre-owned equipment from leading brands, with models for different needs and custom builds available to order.',
    },
    icone: 'desktop',
    ordem: 2,
    href: '/produtos#desktops',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em computadores de secretária.',
      en: 'Hello! I am interested in desktop computers.',
    },
      imagem: {
        alt: {
          pt: 'Técnico a montar um computador personalizado',
          en: 'Technician assembling a custom computer',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/desktops.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Dell' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
          en: 'Models for different needs, available new and pre-owned.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em computadores Dell.',
          en: 'Hello! I am interested in Dell computers.',
        },
      },
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Lenovo' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
          en: 'Models for different needs, available new and pre-owned.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em computadores Lenovo.',
          en: 'Hello! I am interested in Lenovo computers.',
        },
      },
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'HP' },
        descricao: {
          pt: 'Modelos para diferentes necessidades, disponíveis em versões novas e seminovas.',
          en: 'Models for different needs, available new and pre-owned.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em computadores HP.',
          en: 'Hello! I am interested in HP computers.',
        },
      },
      {
        etiqueta: { pt: 'À medida', en: 'Custom build' },
        titulo: { pt: 'Montagem personalizada', en: 'Custom assembly' },
        descricao: {
          pt: 'Montagem de computadores de secretária à medida da procura.',
          en: 'Desktop computer builds tailored to your requirements.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em montagem personalizada de computador de secretária.',
          en: 'Hello! I am interested in a custom desktop computer build.',
        },
      },
    ],
  },
  {
    slug: 'pecas',
    titulo: { pt: 'Peças', en: 'Parts' },
    descricao: {
      pt: 'Componentes, equipamentos e activos de rede, peças e acessórios para aquisição ou reposição, manutenção, actualização ou montagem personalizada.',
      en: 'Components, network equipment and assets, parts and accessories for purchase, replacement, maintenance, upgrades or custom builds.',
    },
    icone: 'component',
    ordem: 3,
    href: '/produtos#pecas',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em peças e componentes.',
      en: 'Hello! I am interested in parts and components.',
    },
      imagem: {
        alt: {
          pt: 'Mãos a segurar um módulo de memória RAM',
          en: 'Hands holding a RAM module',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/pecas.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Componentes', en: 'Components' },
        titulo: { pt: 'Componentes informáticos', en: 'Computer components' },
        descricao: {
          pt: 'Componentes para aquisição, reposição, manutenção ou actualização.',
          en: 'Components for purchase, replacement, maintenance or upgrades.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em componentes informáticos.',
          en: 'Hello! I am interested in computer components.',
        },
      },
      {
        etiqueta: { pt: 'Redes', en: 'Networking' },
        titulo: { pt: 'Equipamentos e activos de rede', en: 'Network equipment and assets' },
        descricao: {
          pt: 'Equipamentos e activos de rede para aquisição ou reposição.',
          en: 'Network equipment and assets for purchase or replacement.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em equipamentos e activos de rede.',
          en: 'Hello! I am interested in network equipment and assets.',
        },
      },
      {
        etiqueta: { pt: 'Personalização', en: 'Customisation' },
        titulo: { pt: 'Montagem personalizada', en: 'Custom assembly' },
        descricao: {
          pt: 'Montagem de equipamentos personalizados sob encomenda.',
          en: 'Custom equipment assembly to order.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em montagem de equipamento personalizado.',
          en: 'Hello! I am interested in a custom equipment build.',
        },
      },
    ],
  },
  {
    slug: 'acessorios',
    titulo: { pt: 'Acessórios', en: 'Accessories' },
    descricao: {
      pt: 'Acessórios de várias marcas para melhorar o desempenho e o conforto nas suas actividades.',
      en: 'Accessories from a range of brands to support performance and comfort in your work.',
    },
    icone: 'accessory',
    ordem: 4,
    href: '/produtos#acessorios',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em acessórios informáticos.',
      en: 'Hello! I am interested in computer accessories.',
    },
      imagem: {
        alt: {
          pt: 'Secretária com teclado, rato, auscultadores e carregador',
          en: 'Desk with keyboard, mouse, headphones and charger',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/acessorios.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Dell' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
          en: 'Accessories to support performance and comfort in your work.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em acessórios Dell.',
          en: 'Hello! I am interested in Dell accessories.',
        },
      },
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Knup' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
          en: 'Accessories to support performance and comfort in your work.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em acessórios Knup.',
          en: 'Hello! I am interested in Knup accessories.',
        },
      },
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Multilaser' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
          en: 'Accessories to support performance and comfort in your work.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em acessórios Multilaser.',
          en: 'Hello! I am interested in Multilaser accessories.',
        },
      },
      {
        etiqueta: { pt: 'Marca', en: 'Brand' },
        titulo: { pt: 'Samsung' },
        descricao: {
          pt: 'Acessórios para melhorar o desempenho e o conforto nas suas actividades.',
          en: 'Accessories to support performance and comfort in your work.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em acessórios Samsung.',
          en: 'Hello! I am interested in Samsung accessories.',
        },
      },
    ],
  },
  {
    slug: 'moveis',
    titulo: { pt: 'Mobiliário', en: 'Furniture' },
    descricao: {
      pt: 'Mobiliário de escritório e gamer para criar espaços de trabalho e setups funcionais, confortáveis e acolhedores.',
      en: 'Office and gaming furniture for functional, comfortable and welcoming workspaces and setups.',
    },
    icone: 'chair',
    ordem: 5,
    href: '/produtos#moveis',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em mobiliário.',
      en: 'Hello! I am interested in furniture.',
    },
      imagem: {
        alt: {
          pt: 'Escritório moderno com secretárias e cadeiras ergonómicas',
          en: 'Modern office with desks and ergonomic chairs',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/moveis.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Escritório', en: 'Office' },
        titulo: {
          pt: 'Mesas, estantes, cadeiras e gaveteiros',
          en: 'Desks, shelves, chairs and drawer units',
        },
        descricao: {
          pt: 'Mobiliário em várias cores e dimensões para criar um espaço de trabalho elegante, produtivo e acolhedor.',
          en: 'Furniture in a range of colours and sizes to create an elegant, productive and welcoming workspace.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em mobiliário de escritório.',
          en: 'Hello! I am interested in office furniture.',
        },
      },
      {
        etiqueta: { pt: 'Gamer', en: 'Gaming' },
        titulo: { pt: 'Mesas e cadeiras gamer', en: 'Gaming desks and chairs' },
        descricao: {
          pt: 'Mesas com espaço para acomodar o setup e cadeiras que privilegiam conforto e ergonomia.',
          en: 'Desks with room for your setup and chairs designed for comfort and ergonomics.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em mesas e cadeiras gamer.',
          en: 'Hello! I am interested in gaming desks and chairs.',
        },
      },
    ],
  },
  {
    slug: 'consumiveis',
    titulo: { pt: 'Consumíveis', en: 'Consumables' },
    descricao: {
      pt: 'Toners, cartuchos de tinta, papel para impressão, dispositivos de armazenamento e acessórios essenciais no dia-a-dia.',
      en: 'Toner, ink cartridges, printing paper, storage devices and everyday computer accessories.',
    },
    icone: 'printer',
    ordem: 6,
    href: '/produtos#consumiveis',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em consumíveis informáticos.',
      en: 'Hello! I am interested in computer consumables.',
    },
      imagem: {
        alt: {
          pt: 'Técnico a trocar o toner de uma impressora de escritório',
          en: 'Technician replacing the toner of an office printer',
        },
        ficheiroEsperado: { pt: 'public/images/produtos/consumiveis.webp' },
      },
    destaques: [
      {
        etiqueta: { pt: 'Impressão', en: 'Printing' },
        titulo: { pt: 'Toners e cartuchos de tinta', en: 'Toner and ink cartridges' },
        descricao: {
          pt: 'Consumíveis para impressão para empresas e particulares.',
          en: 'Printing consumables for businesses and individuals.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em toners e cartuchos de tinta.',
          en: 'Hello! I am interested in toner and ink cartridges.',
        },
      },
      {
        etiqueta: { pt: 'Impressão', en: 'Printing' },
        titulo: { pt: 'Papel para impressão', en: 'Printing paper' },
        descricao: {
          pt: 'Papel para as necessidades de impressão do dia-a-dia.',
          en: 'Paper for everyday printing needs.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em papel para impressão.',
          en: 'Hello! I am interested in printing paper.',
        },
      },
      {
        etiqueta: { pt: 'Armazenamento', en: 'Storage' },
        titulo: { pt: 'Dispositivos de armazenamento', en: 'Storage devices' },
        descricao: {
          pt: 'Dispositivos de armazenamento para uso informático.',
          en: 'Storage devices for computing.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em dispositivos de armazenamento.',
          en: 'Hello! I am interested in storage devices.',
        },
      },
      {
        etiqueta: { pt: 'Informática', en: 'Computing' },
        titulo: { pt: 'Acessórios essenciais', en: 'Essential accessories' },
        descricao: {
          pt: 'Acessórios de informática essenciais no dia-a-dia.',
          en: 'Essential computer accessories for everyday use.',
        },
        mensagemWhatsApp: {
          pt: 'Olá! Tenho interesse em acessórios de informática.',
          en: 'Hello! I am interested in computer accessories.',
        },
      },
    ],
  },
];

export const productsPageContent = {
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  title: { pt: 'Produtos', en: 'Products' } satisfies LocalizedText,
  lead: {
    pt: 'Adquira todos os componentes tecnológicos de que precisa, para si e para o seu negócio, aqui na NS2 Innovation.',
    en: 'Find the technology products you need for yourself or your business at NS2 Innovation.',
  } satisfies LocalizedText,
  categoryNavigationLabel: {
    pt: 'Categorias de produtos',
    en: 'Product categories',
  } satisfies LocalizedText,
  categoryCardLabel: { pt: 'Opções disponíveis', en: 'Available options' } satisfies LocalizedText,
  quoteLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
  brandsLabel: {
    pt: 'Marcas de produtos referidas pela NS2 Innovation',
    en: 'Product brands mentioned by NS2 Innovation',
  } satisfies LocalizedText,
  brands: [
    { type: 'image', src: '/images/parceiros/dell.webp', alt: 'Dell' },
    { type: 'image', src: '/images/parceiros/lenovo.webp', alt: 'Lenovo' },
    { type: 'image', src: '/images/parceiros/apple.webp', alt: 'Apple' },
    { type: 'image', src: '/images/parceiros/samsung.webp', alt: 'Samsung' },
    { type: 'image', src: '/images/parceiros/multilaser.webp', alt: 'Multilaser' },
  ],
  notFoundTitle: {
    pt: 'Não encontra o que procura?',
    en: 'Can’t find what you are looking for?',
  } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'Fale connosco sobre o produto de que precisa e peça um orçamento.',
    en: 'Tell us which product you need and request a quote.',
  } satisfies LocalizedText,
  whatsappMessage: {
    pt: 'Olá! Procuro um produto informático e gostaria de pedir um orçamento.',
    en: 'Hello! I am looking for a computer product and would like to request a quote.',
  } satisfies LocalizedText,
  whatsappLabel: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' } satisfies LocalizedText,
  contactLabel: { pt: 'Ver contactos', en: 'View contact details' } satisfies LocalizedText,
} as const;
