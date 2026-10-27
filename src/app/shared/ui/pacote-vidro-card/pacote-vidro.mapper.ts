import { LocalizedText } from '../../../i18n/types';
import { PacoteWeb } from '../../../data/web-pacotes';
import { PacoteVidroCardData } from './pacote-vidro-card';
export type { PacoteVidroCardData };

const tons: Record<string, string> = {
  'landing-page': '63 111 181',
  'site-institucional': '36 140 156',
  'site-profissional': '84 94 214',
  'site-empresarial': '120 82 200',
};

const imagens: Record<string, string | null> = {
  'landing-page': '/images/pacotes/landing-page.webp',
  'site-institucional': '/images/pacotes/site-institucional.webp',
  'site-profissional': '/images/pacotes/site-profissional.webp',
  'site-empresarial': '/images/pacotes/site-empresarial.webp',
};

const objectPositions: Record<string, string> = {
  'landing-page': 'center 35%',
  'site-institucional': 'center',
  'site-profissional': 'center 30%',
  'site-empresarial': 'center',
};

const gridPositions: Record<string, string> = {
  'landing-page': 'lg:col-span-7 lg:row-start-1 lg:col-start-1',
  'site-institucional': 'lg:col-span-3 lg:row-start-2 lg:col-start-1',
  'site-profissional': 'lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:col-start-8',
  'site-empresarial': 'lg:col-span-4 lg:row-start-2 lg:col-start-4',
};

export interface PacoteVidroLabels {
  readonly startingAt: string;
  readonly mostChosen: string;
  readonly learnMore: string;
}

export function criarPacoteVidro(
  item: PacoteWeb,
  text: (value: LocalizedText) => string,
  labels: PacoteVidroLabels,
): PacoteVidroCardData {
  return {
    tintRgb: tons[item.slug] ?? '63 111 181',
    titulo: text(item.nome),
    preco: item.aPartirDe,
    precoLabel: labels.startingAt,
    meta: `${text(item.paginas)} · ${text(item.prazo)}`,
    icone: 'code',
    href: `/desenvolvimento-web/${item.slug}`,
    imagemSrc: imagens[item.slug] ?? null,
    ctaLabel: labels.learnMore,
    destaque: item.destaque === true,
    destaqueLabel: labels.mostChosen,
    objectPosition: objectPositions[item.slug] ?? 'center',
    gridPosition: gridPositions[item.slug] ?? '',
    bento: false,
  };
}
