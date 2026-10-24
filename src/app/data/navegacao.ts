import { TranslationKey } from '../i18n/pt';

export interface NavigationItem {
  readonly href: string;
  readonly label: TranslationKey;
}

export type HeaderNavItem =
  | {
      readonly kind: 'link';
      readonly href: string;
      readonly label: TranslationKey;
    }
  | {
      readonly kind: 'group';
      readonly id: string;
      readonly label: TranslationKey;
      readonly children: readonly NavigationItem[];
    };

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

export const headerNavigation: readonly HeaderNavItem[] = [
  { kind: 'link', href: '/', label: 'nav.home' },
  { kind: 'link', href: '/sobre', label: 'nav.about' },
  {
    kind: 'group',
    id: 'solutions',
    label: 'nav.solutions',
    children: [
      { href: '/servicos', label: 'nav.services' },
      { href: '/produtos', label: 'nav.products' },
      { href: '/desenvolvimento-web', label: 'nav.web' },
    ],
  },
  {
    kind: 'group',
    id: 'work',
    label: 'nav.work',
    children: [
      { href: '/projectos', label: 'nav.projects' },
      { href: '/noticias', label: 'nav.news' },
    ],
  },
  { kind: 'link', href: '/parceiros', label: 'nav.partners' },
  { kind: 'link', href: '/contacto', label: 'nav.contact' },
];

export const legalNavigation: readonly NavigationItem[] = [
  { href: '/politica-de-privacidade', label: 'pages.privacy' },
  { href: '/termos-e-condicoes', label: 'pages.terms' },
];
