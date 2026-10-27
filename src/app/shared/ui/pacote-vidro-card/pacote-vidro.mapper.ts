import { LocalizedText } from '../../../i18n/types';
import { NivelWeb } from '../../../data/desenvolvimento-web';
import { PacoteWeb } from '../../../data/web-pacotes';
import { PacoteVidroCardData } from './pacote-vidro-card';
export type { PacoteVidroCardData };

const tons: Record<string, string> = {
  'landing-page': '63 111 181',
  'site-institucional': '36 140 156',
  'site-profissional': '84 94 214',
  'site-empresarial': '120 82 200',
};

// TODO(conteúdo): preencher com '/images/pacotes/<slug>.webp' quando as imagens existirem.
// Enquanto não existirem, o cartão mostra o gradiente da cor do pacote (fundo de .pkg-card).
const imagens: Record<string, string | null> = {
  'landing-page': null,
  'site-institucional': null,
  'site-profissional': null,
  'site-empresarial': null,
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
  readonly quoteRequired: string;
  readonly mostChosen: string;
  readonly learnMore: string;
}

function criarDadosBase(
  item: { slug: string; nome: LocalizedText; aPartirDe: number | null; prazo: LocalizedText },
  text: (value: LocalizedText) => string,
  labels: PacoteVidroLabels,
  meta: string,
): PacoteVidroCardData {
  return {
    tintRgb: tons[item.slug] ?? '63 111 181',
    titulo: text(item.nome),
    preco: item.aPartirDe,
    precoLabel: item.aPartirDe === null ? labels.quoteRequired : labels.startingAt,
    meta,
    icone: 'code',
    href: `/desenvolvimento-web/${item.slug}`,
    imagemSrc: imagens[item.slug] ?? null,
    ctaLabel: labels.learnMore,
    destaque: 'destaque' in item && item.destaque === true,
    destaqueLabel: labels.mostChosen,
    objectPosition: objectPositions[item.slug] ?? 'center',
    gridPosition: '',
    bento: false,
  };
}

export function criarPacoteVidro(
  item: PacoteWeb,
  text: (value: LocalizedText) => string,
  labels: PacoteVidroLabels,
): PacoteVidroCardData {
  return {
    ...criarDadosBase(item, text, labels, `${text(item.paginas)} · ${text(item.prazo)}`),
    gridPosition: gridPositions[item.slug] ?? '',
  };
}

export function criarPacoteVidroNivel(
  item: NivelWeb,
  text: (value: LocalizedText) => string,
  labels: PacoteVidroLabels,
): PacoteVidroCardData {
  return criarDadosBase(item, text, labels, text(item.prazo));
}
