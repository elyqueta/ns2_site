import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KzPipe } from '../../pipes/kz.pipe';
import { Card } from '../card/card';
import { Icon } from '../icon/icon';

export interface CardContent {
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly label?: string;
  readonly priceFrom?: number;
  readonly priceLabel?: string;
  readonly destaque?: boolean;
}

@Component({
  selector: 'app-content-card',
  imports: [Card, Icon, KzPipe, RouterLink],
  templateUrl: './content-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCard {
  readonly item = input.required<CardContent>();
}
