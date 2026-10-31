import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { LocalizedPipe } from '../../pipes/localized.pipe';
import { RouterLink } from '@angular/router';
import { LocalizedText } from '../../../i18n/types';
import { IconName } from '../icon/icon';
import { NgOptimizedImage } from '@angular/common';

export interface ServicoVidroCardData {
  readonly tintRgb: string;
  readonly titulo: LocalizedText;
  readonly resumo: LocalizedText;
  readonly icone: IconName;
  readonly href: string;
  readonly imagemSrc: string;
  readonly imagemAlt: LocalizedText;
  readonly imagemSrcset: string;
  readonly imagemSizes: string;
  readonly ctaLabel: LocalizedText;
  readonly badge?: boolean;
}

@Component({
  selector: 'app-servico-vidro-card',
  imports: [Icon, LocalizedPipe, RouterLink, NgOptimizedImage],
  templateUrl: './servico-vidro-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicoVidroCard {
  readonly item = input.required<ServicoVidroCardData>();
}
