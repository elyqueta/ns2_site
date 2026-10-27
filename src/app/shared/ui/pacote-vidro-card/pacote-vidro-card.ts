import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KzPipe } from '../../pipes/kz.pipe';
import { Icon, IconName } from '../icon/icon';

export interface PacoteVidroCardData {
  readonly tintRgb: string;
  readonly titulo: string;
  readonly preco: number | null;
  readonly precoLabel: string;
  readonly meta: string;
  readonly icone: IconName;
  readonly href: string;
  readonly imagemSrc: string | null;
  readonly ctaLabel: string;
  readonly destaque: boolean;
  readonly destaqueLabel: string;
  readonly objectPosition: string;
  readonly gridPosition: string;
  readonly bento: boolean;
}

@Component({
  selector: 'app-pacote-vidro-card',
  imports: [Icon, KzPipe, RouterLink],
  templateUrl: './pacote-vidro-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacoteVidroCard {
  readonly item = input.required<PacoteVidroCardData>();
  readonly bento = input(false);
  readonly imageFailed = signal(false);

  onImageError(): void {
    this.imageFailed.set(true);
  }
}
