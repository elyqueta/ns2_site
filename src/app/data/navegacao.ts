import { TranslationKey } from '../i18n/pt';

export interface NavigationItem {
  readonly href: string;
  readonly label: TranslationKey;
}

export const primaryNavigation: readonly NavigationItem[] = [
  { href: '/', label: 'nav.home' },
  { href: '/sobre', label: 'nav.about' },
  { href: '/servicos', label: 'nav.services' },
  { href: '/produtos', label: 'nav.products' },
  { href: '/desenvolvimento-web', label: 'nav.web' },
  { href: '/projectos', label: 'nav.projects' },
  { href: '/noticias', label: 'nav.news' },
  { href: '/parceiros', label: 'nav.partners' },
  { href: '/contacto', label: 'nav.contact' },
];

export const legalNavigation: readonly NavigationItem[] = [
  { href: '/politica-de-privacidade', label: 'pages.privacy' },
  { href: '/termos-e-condicoes', label: 'pages.terms' },
];
