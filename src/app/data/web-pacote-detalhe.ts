import { LocalizedText } from '../i18n/types';

export interface PacoteWebDetalhe {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly aPartirDe: number;
  readonly prazo: LocalizedText;
  readonly paginas: LocalizedText;
  readonly descricao: LocalizedText;
  readonly inclui: readonly string[];
  readonly naoInclui: readonly string[];
  readonly entregas: readonly string[];
  readonly quemDeveEscolher: LocalizedText;
  readonly href: string;
}

export const webPacotesDetalhe: readonly PacoteWebDetalhe[] = [
  {
    slug: 'landing-page',
    nome: { pt: 'Landing Page', en: 'Landing Page' },
    aPartirDe: 50000,
    prazo: { pt: '3–7 dias úteis', en: '3–7 business days' },
    paginas: { pt: '1 página', en: '1 page' },
    descricao: {
      pt: 'Página única focada em conversão, ideal para lançar rapidamente ou campanhas pontuais.',
      en: 'A single page focused on conversion, ideal for a quick launch or one-off campaigns.',
    },
    inclui: [
      'Desenho responsivo para telemóvel, tablet e computador',
      'Botão de WhatsApp e formulário de contacto',
      'Ligação a redes sociais e mapa',
      'SEO básico',
      'Duas rondas de revisões',
      '15 dias de apoio após a entrega para correcção de erros',
    ],
    naoInclui: [
      'Login, base de dados e painel administrativo',
      'Loja online e inteligência artificial',
      'Domínio, alojamento, correio profissional e integrações externas',
    ],
    entregas: [
      'Arquitetura da página e wireframe',
      'Design visual em alta fidelidade',
      'Publicação no seu domínio',
      'Formulário de contacto funcional',
    ],
    quemDeveEscolher: {
      pt: 'Quem precisa de presença online rápida e focada em ação, como captar orçamentos ou promover um evento.',
      en: 'Those who need a fast online presence focused on action, such as capturing quotes or promoting an event.',
    },
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
    inclui: [
      'Desenho responsivo para telemóvel, tablet e computador',
      'Botão de WhatsApp e formulário de contacto',
      'Ligação a redes sociais e mapa',
      'SEO básico',
      'Duas rondas de revisões',
      '15 dias de apoio após a entrega para correcção de erros',
      'Animações simples',
    ],
    naoInclui: [
      'Login, base de dados e painel administrativo',
      'Loja online e inteligência artificial',
      'Domínio, alojamento, correio profissional e integrações externas',
    ],
    entregas: [
      'Home, Sobre, Serviços, Contacto e uma página extra',
      'Design visual institucional',
      'Otimização básica para motores de busca',
      'Publicação no seu domínio',
    ],
    quemDeveEscolher: {
      pt: 'Empresas que querem um site sério para apresentar a marca, serviços e contactos, sem complexidade.',
      en: 'Companies that want a serious website to present the brand, services and contacts, without complexity.',
    },
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
    inclui: [
      'Desenho responsivo para telemóvel, tablet e computador',
      'Botão de WhatsApp e formulário de contacto',
      'Ligação a redes sociais e mapa',
      'SEO básico',
      'Duas rondas de revisões',
      '15 dias de apoio após a entrega para correcção de erros',
      'Galerias, portfólio e perguntas frequentes',
      'Integrações simples e SEO on-page completo',
    ],
    naoInclui: [
      'Login, base de dados e painel administrativo',
      'Loja online e inteligência artificial',
      'Domínio, alojamento, correio profissional e integrações externas',
    ],
    entregas: [
      'Design personalizado e diferenciado',
      'Galerias de imagens e portfólio',
      'Perguntas frequentes (FAQ)',
      'SEO on-page completo',
      'Publicação no seu domínio',
    ],
    quemDeveEscolher: {
      pt: 'Negócios em crescimento que precisam de conteúdo próprio, portfólio e melhor posicionamento online.',
      en: 'Growing businesses that need their own content, portfolio and better online positioning.',
    },
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
    inclui: [
      'Desenho responsivo para telemóvel, tablet e computador',
      'Botão de WhatsApp e formulário de contacto',
      'Ligação a redes sociais e mapa',
      'SEO básico',
      'Duas rondas de revisões',
      '15 dias de apoio após a entrega para correcção de erros',
      'Integrações adicionais e blog estático',
      'SEO técnico básico',
    ],
    naoInclui: [
      'Login, base de dados e painel administrativo',
      'Loja online e inteligência artificial',
      'Domínio, alojamento, correio profissional e integrações externas',
    ],
    entregas: [
      'Estrutura avançada com várias áreas',
      'Blog estático',
      'Integrações adicionais',
      'SEO técnico básico',
      'Publicação no seu domínio',
    ],
    quemDeveEscolher: {
      pt: 'Empresas com estrutura complexa que precisam de blog, várias áreas e otimização de desempenho.',
      en: 'Companies with complex structure that need a blog, multiple sections and performance optimisation.',
    },
    href: '/desenvolvimento-web',
  },
];

export const webPacoteDetalheBySlug = new Map(
  webPacotesDetalhe.map((item) => [item.slug, item]),
);
