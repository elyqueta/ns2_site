import { LocalizedText } from '../i18n/types';

export interface Parceiro {
  readonly slug: string;
  readonly nome: string;
  readonly categoria: LocalizedText;
  readonly resumo: LocalizedText;
  readonly descricao: LocalizedText;
  readonly produtos: readonly LocalizedText[];
  readonly categoriaProdutoSlug: string;
  readonly href: string;
  readonly mensagemWhatsApp: LocalizedText;
  readonly logo?: string;
  readonly site?: string;
  readonly oficial: boolean;
}

export const parceiros: readonly Parceiro[] = [
  {
    slug: 'dell',
    nome: 'Dell',
    categoria: { pt: 'Portáteis, desktops e acessórios', en: 'Laptops, desktops and accessories' },
    resumo: {
      pt: 'Portáteis Latitude e Inspiron, desktops e acessórios.',
      en: 'Latitude and Inspiron laptops, desktops and accessories.',
    },
    descricao: {
      pt: 'Portáteis Latitude (uso empresarial; acabamento e design muito resistentes) e Inspiron (desempenho para o dia-a-dia), novos e seminovos; desktops; acessórios.',
      en: 'New and pre-owned Latitude laptops for business use, with a durable build, and Inspiron models for everyday performance; desktops and accessories.',
    },
    produtos: [
      {
        pt: 'Latitude — uso empresarial, com acabamento e design muito resistentes.',
        en: 'Latitude — for business use, with a durable build and design.',
      },
      {
        pt: 'Inspiron — desempenho para o dia-a-dia.',
        en: 'Inspiron — performance for everyday use.',
      },
      { pt: 'Desktops e acessórios.', en: 'Desktops and accessories.' },
      { pt: 'Portáteis novos e seminovos.', en: 'New and pre-owned laptops.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/dell',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em produtos Dell.',
      en: 'Hello! I am interested in Dell products.',
    },
    oficial: false,
  },
  {
    slug: 'lenovo',
    nome: 'Lenovo',
    categoria: { pt: 'Portáteis e desktops', en: 'Laptops and desktops' },
    resumo: {
      pt: 'Portáteis ThinkPad e IdeaPad, novos e seminovos, e desktops.',
      en: 'New and pre-owned ThinkPad and IdeaPad laptops, and desktops.',
    },
    descricao: {
      pt: 'ThinkPad (mercado corporativo; leve, resistente) e IdeaPad (configuração robusta, experiência multimédia), novos e seminovos; desktops.',
      en: 'New and pre-owned ThinkPad laptops for business use, known for portability and durability, and IdeaPad models with versatile multimedia configurations; desktops.',
    },
    produtos: [
      {
        pt: 'ThinkPad — para o mercado corporativo; leve e resistente.',
        en: 'ThinkPad — for business use, lightweight and durable.',
      },
      {
        pt: 'IdeaPad — configuração robusta e experiência multimédia.',
        en: 'IdeaPad — versatile configuration and multimedia experience.',
      },
      {
        pt: 'Portáteis novos e seminovos e desktops.',
        en: 'New and pre-owned laptops and desktops.',
      },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/lenovo',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em produtos Lenovo.',
      en: 'Hello! I am interested in Lenovo products.',
    },
    oficial: false,
  },
  {
    slug: 'hp',
    nome: 'HP',
    categoria: { pt: 'Portáteis e desktops', en: 'Laptops and desktops' },
    resumo: {
      pt: 'Portáteis EliteBook, novos e seminovos, e desktops.',
      en: 'New and pre-owned EliteBook laptops and desktops.',
    },
    descricao: {
      pt: 'EliteBook (ambiente corporativo; elevado poder de processamento, durabilidade), novos e seminovos; desktops.',
      en: 'New and pre-owned EliteBook models for business use, with strong processing capability and durability; desktops.',
    },
    produtos: [
      {
        pt: 'EliteBook — para o ambiente corporativo, com elevado poder de processamento e durabilidade.',
        en: 'EliteBook — for business use, with strong processing capability and durability.',
      },
      {
        pt: 'Portáteis novos e seminovos e desktops.',
        en: 'New and pre-owned laptops and desktops.',
      },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/hp',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em produtos HP.',
      en: 'Hello! I am interested in HP products.',
    },
    oficial: false,
  },
  {
    slug: 'apple',
    nome: 'Apple',
    categoria: { pt: 'MacBook', en: 'MacBook' },
    resumo: {
      pt: 'MacBook Air e MacBook Pro, novos e seminovos.',
      en: 'New and pre-owned MacBook Air and MacBook Pro models.',
    },
    descricao: {
      pt: 'MacBook Air (portabilidade, bateria excelente, design ultrafino) e MacBook Pro (edição de vídeo, modelação e aplicações exigentes), novos e seminovos.',
      en: 'New and pre-owned MacBook Air models for portability, long battery life and an ultra-thin design, and MacBook Pro models for video editing, modelling and demanding applications.',
    },
    produtos: [
      {
        pt: 'MacBook Air — portabilidade, bateria excelente e design ultrafino.',
        en: 'MacBook Air — portability, excellent battery life and an ultra-thin design.',
      },
      {
        pt: 'MacBook Pro — edição de vídeo, modelação e aplicações exigentes.',
        en: 'MacBook Pro — video editing, modelling and demanding applications.',
      },
      { pt: 'Modelos novos e seminovos.', en: 'New and pre-owned models.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/apple',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em produtos Apple.',
      en: 'Hello! I am interested in Apple products.',
    },
    oficial: false,
  },
  {
    slug: 'samsung',
    nome: 'Samsung',
    categoria: { pt: 'Acessórios', en: 'Accessories' },
    resumo: {
      pt: 'Acessórios de várias linhas.',
      en: 'Accessories from a range of product lines.',
    },
    descricao: {
      pt: 'Trabalhamos com produtos Samsung para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
      en: 'We work with Samsung products for businesses and individuals. Request a quote and we will help you choose a suitable model.',
    },
    produtos: [
      { pt: 'Acessórios de várias linhas.', en: 'Accessories from a range of product lines.' },
    ],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/samsung',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em acessórios Samsung.',
      en: 'Hello! I am interested in Samsung accessories.',
    },
    oficial: false,
  },
  {
    slug: 'knup',
    nome: 'Knup',
    categoria: { pt: 'Acessórios', en: 'Accessories' },
    resumo: { pt: 'Acessórios de informática.', en: 'Computer accessories.' },
    descricao: {
      pt: 'Trabalhamos com produtos Knup para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
      en: 'We work with Knup products for businesses and individuals. Request a quote and we will help you choose a suitable model.',
    },
    produtos: [{ pt: 'Acessórios de informática.', en: 'Computer accessories.' }],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/knup',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em acessórios Knup.',
      en: 'Hello! I am interested in Knup accessories.',
    },
    oficial: false,
  },
  {
    slug: 'multilaser',
    nome: 'Multilaser',
    categoria: { pt: 'Acessórios', en: 'Accessories' },
    resumo: { pt: 'Acessórios de informática.', en: 'Computer accessories.' },
    descricao: {
      pt: 'Trabalhamos com produtos Multilaser para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
      en: 'We work with Multilaser products for businesses and individuals. Request a quote and we will help you choose a suitable model.',
    },
    produtos: [{ pt: 'Acessórios de informática.', en: 'Computer accessories.' }],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/multilaser',
    mensagemWhatsApp: {
      pt: 'Olá! Tenho interesse em acessórios Multilaser.',
      en: 'Hello! I am interested in Multilaser accessories.',
    },
    oficial: false,
  },
];

export const partnersPageContent = {
  title: { pt: 'Marcas e parceiros', en: 'Brands and partners' } satisfies LocalizedText,
  lead: {
    pt: 'Trabalhamos com marcas de tecnologia para empresas e particulares.',
    en: 'We work with technology brands for businesses and individuals.',
  } satisfies LocalizedText,
  marqueeLabel: {
    pt: 'Marcas com que trabalhamos',
    en: 'Brands we work with',
  } satisfies LocalizedText,
  listIndex: { pt: '01', en: '01' } satisfies LocalizedText,
  listTitle: {
    pt: 'Marcas com que trabalhamos',
    en: 'Brands we work with',
  } satisfies LocalizedText,
  detailLink: { pt: 'Conhecer a marca', en: 'Explore the brand' } satisfies LocalizedText,
  homeLabel: { pt: 'Início', en: 'Home' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' } satisfies LocalizedText,
  productsTitle: { pt: 'O que fornecemos', en: 'What we supply' } satisfies LocalizedText,
  productsLink: {
    pt: 'Ver produtos desta categoria',
    en: 'View products in this category',
  } satisfies LocalizedText,
  otherBrandsTitle: { pt: 'Outras marcas', en: 'Other brands' } satisfies LocalizedText,
  partnerCtaTitle: {
    pt: 'É parceiro ou fornecedor e quer colaborar connosco?',
    en: 'Are you a partner or supplier interested in working with us?',
  } satisfies LocalizedText,
  partnerCtaDescription: {
    pt: 'Entre em contacto com a NS2 Innovation para conversarmos sobre uma colaboração.',
    en: 'Contact NS2 Innovation to discuss working together.',
  } satisfies LocalizedText,
  quoteTitle: {
    pt: 'Peça um orçamento de produtos {{brand}}',
    en: 'Request a quote for {{brand}} products',
  } satisfies LocalizedText,
  quoteDescription: {
    pt: 'Fale connosco sobre os produtos {{brand}} que procura.',
    en: 'Tell us which {{brand}} products you are looking for.',
  } satisfies LocalizedText,
  notFoundTitle: { pt: 'Marca não encontrada', en: 'Brand not found' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'A marca que procura não está disponível nesta página.',
    en: 'The brand you are looking for is not available on this page.',
  } satisfies LocalizedText,
  allPartnersLabel: { pt: 'Ver todas as marcas', en: 'View all brands' } satisfies LocalizedText,
  contactWhatsappLabel: { pt: 'Falar connosco', en: 'Get in touch' } satisfies LocalizedText,
  contactPageLabel: { pt: 'Ver contacto', en: 'View contact page' } satisfies LocalizedText,
  whatsappLabel: { pt: 'Pedir orçamento', en: 'Request a quote' } satisfies LocalizedText,
  contactLabel: { pt: 'Contactar', en: 'Contact us' } satisfies LocalizedText,
};
