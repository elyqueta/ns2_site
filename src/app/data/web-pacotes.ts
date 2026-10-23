import { LocalizedText } from '../i18n/types';

export interface PacoteWeb {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly aPartirDe: number;
  readonly prazo: LocalizedText;
  readonly paginas: LocalizedText;
  readonly descricao: LocalizedText;
  readonly idealPara: LocalizedText;
  readonly inclui: readonly LocalizedText[];
  readonly naoInclui: readonly LocalizedText[];
  readonly extras: readonly LocalizedText[];
  readonly destaque?: boolean;
  readonly href: string;
}

const incluiTodos: readonly LocalizedText[] = [
  {
    pt: 'Desenho responsivo para telemóvel, tablet e computador',
    en: 'Responsive design for phones, tablets and computers',
  },
  { pt: 'Botão de WhatsApp e formulário de contacto', en: 'WhatsApp button and contact form' },
  { pt: 'Ligação a redes sociais e mapa', en: 'Social media and map links' },
  { pt: 'SEO básico', en: 'Basic SEO' },
  { pt: 'Duas rondas de revisões', en: 'Two rounds of revisions' },
  {
    pt: '15 dias de apoio após a entrega para correcção de erros',
    en: '15 days of post-launch support for bug fixes',
  },
];

const naoIncluiTodos: readonly LocalizedText[] = [
  { pt: 'Login, base de dados e painel administrativo', en: 'Logins, database and admin panel' },
  { pt: 'Loja online e inteligência artificial', en: 'Online shop and artificial intelligence' },
  {
    pt: 'Domínio, alojamento, correio profissional e integrações externas',
    en: 'Domain, hosting, professional email and external integrations',
  },
];

export const notaLegalPacotes: LocalizedText = {
  pt: 'Valores de desenvolvimento, indicativos e sujeitos a confirmação em proposta. Domínio, alojamento, correio profissional, pagamentos online e integrações externas são orçamentados à parte.',
  en: 'Development prices are indicative and subject to confirmation in a proposal. Domains, hosting, professional email, online payments and external integrations are quoted separately.',
};

export const webPacotes: readonly PacoteWeb[] = [
  {
    slug: 'landing-page',
    nome: { pt: 'Landing Page', en: 'Landing Page' },
    aPartirDe: 50000,
    prazo: { pt: '3–7 dias úteis', en: '3–7 business days' },
    paginas: { pt: '1 página', en: '1 page' },
    descricao: {
      pt: 'Página única focada em conversão.',
      en: 'A single page focused on conversion.',
    },
    idealPara: {
      pt: 'Lançamento rápido ou campanha pontual.',
      en: 'Quick launch or one-off campaign.',
    },
    inclui: incluiTodos,
    naoInclui: naoIncluiTodos,
    extras: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-institucional',
    nome: { pt: 'Site Institucional', en: 'Company Website' },
    aPartirDe: 100000,
    prazo: { pt: '7–14 dias úteis', en: '7–14 business days' },
    paginas: { pt: 'Até 5 páginas', en: 'Up to 5 pages' },
    descricao: {
      pt: 'Presença online simples e profissional para apresentar a empresa, os serviços e os contactos.',
      en: 'A simple, professional online presence to present your company, services and contact details.',
    },
    idealPara: {
      pt: 'Apresentar a empresa e os serviços.',
      en: 'Present your company and services.',
    },
    inclui: [...incluiTodos, { pt: 'Animações simples', en: 'Simple animations' }],
    naoInclui: naoIncluiTodos,
    extras: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-profissional',
    nome: { pt: 'Site Profissional', en: 'Professional Website' },
    aPartirDe: 150000,
    prazo: { pt: '10–21 dias úteis', en: '10–21 business days' },
    paginas: { pt: 'Até 8 páginas', en: 'Up to 8 pages' },
    descricao: {
      pt: 'Design mais personalizado, animações e optimização para motores de pesquisa mais completa.',
      en: 'More tailored design, animations and more comprehensive search engine optimisation.',
    },
    idealPara: {
      pt: 'Negócio em crescimento com conteúdo próprio.',
      en: 'Growing business with its own content.',
    },
    inclui: [
      ...incluiTodos,
      {
        pt: 'Galerias, portfólio e perguntas frequentes',
        en: 'Galleries, portfolio and frequently asked questions',
      },
      {
        pt: 'Integrações simples e SEO on-page completo',
        en: 'Simple integrations and comprehensive on-page SEO',
      },
    ],
    naoInclui: naoIncluiTodos,
    extras: naoIncluiTodos,
    destaque: true,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-empresarial',
    nome: { pt: 'Site Empresarial', en: 'Business Website' },
    aPartirDe: 200000,
    prazo: { pt: '14–30 dias úteis', en: '14–30 business days' },
    paginas: { pt: 'Até 12 páginas', en: 'Up to 12 pages' },
    descricao: {
      pt: 'Estrutura avançada, várias áreas, blog estático e optimização de desempenho.',
      en: 'An advanced structure with multiple sections, a static blog and performance optimisation.',
    },
    idealPara: {
      pt: 'Estrutura avançada e blog institucional.',
      en: 'Advanced structure and institutional blog.',
    },
    inclui: [
      ...incluiTodos,
      {
        pt: 'Integrações adicionais e blog estático',
        en: 'Additional integrations and a static blog',
      },
      { pt: 'SEO técnico básico', en: 'Basic technical SEO' },
    ],
    naoInclui: naoIncluiTodos,
    extras: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
];
