import { LocalizedText } from '../i18n/types';

export interface PacoteWebDetalhe {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly aPartirDe: number;
  readonly prazo: LocalizedText;
  readonly paginas: LocalizedText;
  readonly descricao: LocalizedText;
  readonly inclui: readonly LocalizedText[];
  readonly naoInclui: readonly LocalizedText[];
  readonly entregas: readonly LocalizedText[];
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
      { pt: 'Desenho responsivo para telemóvel, tablet e computador', en: 'Responsive design for mobile, tablet and computer' },
      { pt: 'Botão de WhatsApp e formulário de contacto', en: 'WhatsApp button and contact form' },
      { pt: 'Ligação a redes sociais e mapa', en: 'Social media links and map' },
      { pt: 'SEO básico', en: 'Basic SEO' },
      { pt: 'Duas rondas de revisões', en: 'Two rounds of revisions' },
      { pt: '15 dias de apoio após a entrega para correcção de erros', en: '15 days of support after delivery for error correction' },
    ],
    naoInclui: [
      { pt: 'Login, base de dados e painel administrativo', en: 'Login, database and admin panel' },
      { pt: 'Loja online e inteligência artificial', en: 'Online shop and artificial intelligence' },
      { pt: 'Domínio, alojamento, correio profissional e integrações externas', en: 'Domain, hosting, business email and external integrations' },
    ],
    entregas: [
      { pt: 'Arquitetura da página e wireframe', en: 'Page architecture and wireframe' },
      { pt: 'Design visual em alta fidelidade', en: 'High-fidelity visual design' },
      { pt: 'Publicação no seu domínio', en: 'Publishing on your domain' },
      { pt: 'Formulário de contacto funcional', en: 'Functional contact form' },
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
      { pt: 'Desenho responsivo para telemóvel, tablet e computador', en: 'Responsive design for mobile, tablet and computer' },
      { pt: 'Botão de WhatsApp e formulário de contacto', en: 'WhatsApp button and contact form' },
      { pt: 'Ligação a redes sociais e mapa', en: 'Social media links and map' },
      { pt: 'SEO básico', en: 'Basic SEO' },
      { pt: 'Duas rondas de revisões', en: 'Two rounds of revisions' },
      { pt: '15 dias de apoio após a entrega para corrcção de erros', en: '15 days of support after delivery for error correction' },
      { pt: 'Animações simples', en: 'Simple animations' },
    ],
    naoInclui: [
      { pt: 'Login, base de dados e painel administrativo', en: 'Login, database and admin panel' },
      { pt: 'Loja online e inteligência artificial', en: 'Online shop and artificial intelligence' },
      { pt: 'Domínio, alojamento, correio profissional e integrações externas', en: 'Domain, hosting, business email and external integrations' },
    ],
    entregas: [
      { pt: 'Home, Sobre, Serviços, Contacto e uma página extra', en: 'Home, About, Services, Contact and one extra page' },
      { pt: 'Design visual institucional', en: 'Institutional visual design' },
      { pt: 'Otimização básica para motores de busca', en: 'Basic search engine optimisation' },
      { pt: 'Publicação no seu domínio', en: 'Publishing on your domain' },
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
      { pt: 'Desenho responsivo para telemóvel, tablet e computador', en: 'Responsive design for mobile, tablet and computer' },
      { pt: 'Botão de WhatsApp e formulário de contacto', en: 'WhatsApp button and contact form' },
      { pt: 'Ligação a redes sociais e mapa', en: 'Social media links and map' },
      { pt: 'SEO básico', en: 'Basic SEO' },
      { pt: 'Duas rondas de revisões', en: 'Two rounds of revisions' },
      { pt: '15 dias de apoio após a entrega para corrcção de erros', en: '15 days of support after delivery for error correction' },
      { pt: 'Galerias, portfólio e perguntas frequentes', en: 'Galleries, portfolio and frequently asked questions' },
      { pt: 'Integrações simples e SEO on-page completo', en: 'Simple integrations and comprehensive on-page SEO' },
    ],
    naoInclui: [
      { pt: 'Login, base de dados e painel administrativo', en: 'Login, database and admin panel' },
      { pt: 'Loja online e inteligência artificial', en: 'Online shop and artificial intelligence' },
      { pt: 'Domínio, alojamento, correio profissional e integrações externas', en: 'Domain, hosting, business email and external integrations' },
    ],
    entregas: [
      { pt: 'Design personalizado e diferenciado', en: 'Custom and differentiated design' },
      { pt: 'Galerias de imagens e portfólio', en: 'Image galleries and portfolio' },
      { pt: 'Perguntas frequentes (FAQ)', en: 'Frequently asked questions (FAQ)' },
      { pt: 'SEO on-page completo', en: 'Comprehensive on-page SEO' },
      { pt: 'Publicação no seu domínio', en: 'Publishing on your domain' },
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
      { pt: 'Desenho responsivo para telemóvel, tablet e computador', en: 'Responsive design for mobile, tablet and computer' },
      { pt: 'Botão de WhatsApp e formulário de contacto', en: 'WhatsApp button and contact form' },
      { pt: 'Ligação a redes sociais e mapa', en: 'Social media links and map' },
      { pt: 'SEO básico', en: 'Basic SEO' },
      { pt: 'Duas rondas de revisões', en: 'Two rounds of revisions' },
      { pt: '15 dias de apoio após a entrega para corrcção de erros', en: '15 days of support after delivery for error correction' },
      { pt: 'Integrações adicionais e blog estático', en: 'Additional integrations and a static blog' },
      { pt: 'SEO técnico básico', en: 'Basic technical SEO' },
    ],
    naoInclui: [
      { pt: 'Login, base de dados e painel administrativo', en: 'Login, database and admin panel' },
      { pt: 'Loja online e inteligência artificial', en: 'Online shop and artificial intelligence' },
      { pt: 'Domínio, alojamento, correio profissional e integrações externas', en: 'Domain, hosting, business email and external integrations' },
    ],
    entregas: [
      { pt: 'Estrutura avançada com várias áreas', en: 'Advanced structure with multiple sections' },
      { pt: 'Blog estático', en: 'Static blog' },
      { pt: 'Integrações adicionais', en: 'Additional integrations' },
      { pt: 'SEO técnico básico', en: 'Basic technical SEO' },
      { pt: 'Publicação no seu domínio', en: 'Publishing on your domain' },
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
