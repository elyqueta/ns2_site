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

// Preencher com '/images/pacotes/<slug>.webp' quando as imagens existirem.
const imagens: Record<string, string | null> = {
  'landing-page': null,
  'site-institucional': null,
  'site-profissional': null,
  'site-empresarial': null,
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
  };
}
