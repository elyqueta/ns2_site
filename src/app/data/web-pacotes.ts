import { LocalizedText } from '../i18n/types';

export interface PacoteWeb {
  readonly slug: string;
  readonly nome: LocalizedText;
  readonly aPartirDe: number;
  readonly prazo: LocalizedText;
  readonly paginas: LocalizedText;
  readonly descricao: LocalizedText;
  readonly inclui: readonly LocalizedText[];
  readonly naoInclui: readonly LocalizedText[];
  readonly destaque?: boolean;
  readonly href: string;
}

const incluiTodos: readonly LocalizedText[] = [
  { pt: 'Desenho responsivo para telemóvel, tablet e computador' },
  { pt: 'Botão de WhatsApp e formulário de contacto' },
  { pt: 'Ligação a redes sociais e mapa' },
  { pt: 'SEO básico' },
  { pt: 'Duas rondas de revisões' },
  { pt: '15 dias de apoio após a entrega para correcção de erros' },
];

const naoIncluiTodos: readonly LocalizedText[] = [
  { pt: 'Login, base de dados e painel administrativo' },
  { pt: 'Loja online e inteligência artificial' },
  { pt: 'Domínio, alojamento, correio profissional e integrações externas' },
];

export const notaLegalPacotes: LocalizedText = {
  pt: 'Valores de desenvolvimento, indicativos e sujeitos a confirmação em proposta. Domínio, alojamento, correio profissional, pagamentos online e integrações externas são orçamentados à parte.',
};

export const webPacotes: readonly PacoteWeb[] = [
  {
    slug: 'landing-page',
    nome: { pt: 'Landing Page' },
    aPartirDe: 50000,
    prazo: { pt: '3–7 dias úteis' },
    paginas: { pt: '1 página' },
    descricao: { pt: 'Página única focada em conversão.' },
    inclui: incluiTodos,
    naoInclui: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-institucional',
    nome: { pt: 'Site Institucional' },
    aPartirDe: 100000,
    prazo: { pt: '7–14 dias úteis' },
    paginas: { pt: 'Até 5 páginas' },
    descricao: {
      pt: 'Presença online simples e profissional para apresentar a empresa, os serviços e os contactos.',
    },
    inclui: [...incluiTodos, { pt: 'Animações simples' }],
    naoInclui: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-profissional',
    nome: { pt: 'Site Profissional' },
    aPartirDe: 150000,
    prazo: { pt: '10–21 dias úteis' },
    paginas: { pt: 'Até 8 páginas' },
    descricao: {
      pt: 'Design mais personalizado, animações e optimização para motores de pesquisa mais completa.',
    },
    inclui: [
      ...incluiTodos,
      { pt: 'Galerias, portfólio e perguntas frequentes' },
      { pt: 'Integrações simples e SEO on-page completo' },
    ],
    naoInclui: naoIncluiTodos,
    destaque: true,
    href: '/desenvolvimento-web',
  },
  {
    slug: 'site-empresarial',
    nome: { pt: 'Site Empresarial' },
    aPartirDe: 200000,
    prazo: { pt: '14–30 dias úteis' },
    paginas: { pt: 'Até 12 páginas' },
    descricao: {
      pt: 'Estrutura avançada, várias áreas, blog estático e optimização de desempenho.',
    },
    inclui: [
      ...incluiTodos,
      { pt: 'Integrações adicionais e blog estático' },
      { pt: 'SEO técnico básico' },
    ],
    naoInclui: naoIncluiTodos,
    href: '/desenvolvimento-web',
  },
];
