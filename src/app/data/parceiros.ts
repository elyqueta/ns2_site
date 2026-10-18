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
    categoria: { pt: 'Portáteis, desktops e acessórios' },
    resumo: {
      pt: 'Portáteis Latitude e Inspiron, desktops e acessórios.',
    },
    descricao: {
      pt: 'Portáteis Latitude (uso empresarial; acabamento e design muito resistentes) e Inspiron (desempenho para o dia-a-dia), novos e seminovos; desktops; acessórios.',
    },
    produtos: [
      { pt: 'Latitude — uso empresarial, com acabamento e design muito resistentes.' },
      { pt: 'Inspiron — desempenho para o dia-a-dia.' },
      { pt: 'Desktops e acessórios.' },
      { pt: 'Portáteis novos e seminovos.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/dell',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em produtos Dell.' },
    oficial: false,
  },
  {
    slug: 'lenovo',
    nome: 'Lenovo',
    categoria: { pt: 'Portáteis e desktops' },
    resumo: {
      pt: 'Portáteis ThinkPad e IdeaPad, novos e seminovos, e desktops.',
    },
    descricao: {
      pt: 'ThinkPad (mercado corporativo; leve, resistente) e IdeaPad (configuração robusta, experiência multimédia), novos e seminovos; desktops.',
    },
    produtos: [
      { pt: 'ThinkPad — para o mercado corporativo; leve e resistente.' },
      { pt: 'IdeaPad — configuração robusta e experiência multimédia.' },
      { pt: 'Portáteis novos e seminovos e desktops.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/lenovo',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em produtos Lenovo.' },
    oficial: false,
  },
  {
    slug: 'hp',
    nome: 'HP',
    categoria: { pt: 'Portáteis e desktops' },
    resumo: {
      pt: 'Portáteis EliteBook, novos e seminovos, e desktops.',
    },
    descricao: {
      pt: 'EliteBook (ambiente corporativo; elevado poder de processamento, durabilidade), novos e seminovos; desktops.',
    },
    produtos: [
      {
        pt: 'EliteBook — para o ambiente corporativo, com elevado poder de processamento e durabilidade.',
      },
      { pt: 'Portáteis novos e seminovos e desktops.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/hp',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em produtos HP.' },
    oficial: false,
  },
  {
    slug: 'apple',
    nome: 'Apple',
    categoria: { pt: 'MacBook' },
    resumo: {
      pt: 'MacBook Air e MacBook Pro, novos e seminovos.',
    },
    descricao: {
      pt: 'MacBook Air (portabilidade, bateria excelente, design ultrafino) e MacBook Pro (edição de vídeo, modelação e aplicações exigentes), novos e seminovos.',
    },
    produtos: [
      { pt: 'MacBook Air — portabilidade, bateria excelente e design ultrafino.' },
      { pt: 'MacBook Pro — edição de vídeo, modelação e aplicações exigentes.' },
      { pt: 'Modelos novos e seminovos.' },
    ],
    categoriaProdutoSlug: 'notebooks',
    href: '/parceiros/apple',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em produtos Apple.' },
    oficial: false,
  },
  {
    slug: 'samsung',
    nome: 'Samsung',
    categoria: { pt: 'Acessórios' },
    resumo: { pt: 'Acessórios de várias linhas.' },
    descricao: {
      pt: 'Trabalhamos com produtos Samsung para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
    },
    produtos: [{ pt: 'Acessórios de várias linhas.' }],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/samsung',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Samsung.' },
    oficial: false,
  },
  {
    slug: 'knup',
    nome: 'Knup',
    categoria: { pt: 'Acessórios' },
    resumo: { pt: 'Acessórios de informática.' },
    descricao: {
      pt: 'Trabalhamos com produtos Knup para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
    },
    produtos: [{ pt: 'Acessórios de informática.' }],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/knup',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Knup.' },
    oficial: false,
  },
  {
    slug: 'multilaser',
    nome: 'Multilaser',
    categoria: { pt: 'Acessórios' },
    resumo: { pt: 'Acessórios de informática.' },
    descricao: {
      pt: 'Trabalhamos com produtos Multilaser para empresas e particulares. Peça-nos um orçamento e ajudamos a escolher o modelo mais adequado.',
    },
    produtos: [{ pt: 'Acessórios de informática.' }],
    categoriaProdutoSlug: 'acessorios',
    href: '/parceiros/multilaser',
    mensagemWhatsApp: { pt: 'Olá! Tenho interesse em acessórios Multilaser.' },
    oficial: false,
  },
];

export const partnersPageContent = {
  title: { pt: 'Marcas e parceiros' } satisfies LocalizedText,
  lead: {
    pt: 'Trabalhamos com marcas de tecnologia para empresas e particulares.',
  } satisfies LocalizedText,
  marqueeLabel: { pt: 'Marcas com que trabalhamos' } satisfies LocalizedText,
  listIndex: { pt: '01' } satisfies LocalizedText,
  listTitle: { pt: 'Marcas com que trabalhamos' } satisfies LocalizedText,
  detailLink: { pt: 'Conhecer a marca' } satisfies LocalizedText,
  homeLabel: { pt: 'Início' } satisfies LocalizedText,
  breadcrumbLabel: { pt: 'Navegação estrutural' } satisfies LocalizedText,
  productsTitle: { pt: 'O que fornecemos' } satisfies LocalizedText,
  productsLink: { pt: 'Ver produtos desta categoria' } satisfies LocalizedText,
  otherBrandsTitle: { pt: 'Outras marcas' } satisfies LocalizedText,
  partnerCtaTitle: {
    pt: 'É parceiro ou fornecedor e quer colaborar connosco?',
  } satisfies LocalizedText,
  partnerCtaDescription: {
    pt: 'Entre em contacto com a NS2 Innovation para conversarmos sobre uma colaboração.',
  } satisfies LocalizedText,
  quoteTitle: { pt: 'Peça um orçamento de produtos {{brand}}' } satisfies LocalizedText,
  quoteDescription: {
    pt: 'Fale connosco sobre os produtos {{brand}} que procura.',
  } satisfies LocalizedText,
  notFoundTitle: { pt: 'Marca não encontrada' } satisfies LocalizedText,
  notFoundDescription: {
    pt: 'A marca que procura não está disponível nesta página.',
  } satisfies LocalizedText,
  allPartnersLabel: { pt: 'Ver todas as marcas' } satisfies LocalizedText,
  contactWhatsappLabel: { pt: 'Falar connosco por WhatsApp' } satisfies LocalizedText,
  contactPageLabel: { pt: 'Ver contacto' } satisfies LocalizedText,
  whatsappLabel: { pt: 'Pedir orçamento' } satisfies LocalizedText,
  contactLabel: { pt: 'Contactar' } satisfies LocalizedText,
};
