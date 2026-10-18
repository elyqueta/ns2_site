import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../card/card';
import { Icon } from '../icon/icon';

export interface CardContent {
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly label?: string;
}

@Component({
  selector: 'app-content-card',
  imports: [Card, Icon, RouterLink],
  templateUrl: './content-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCard {
  readonly item = input.required<CardContent>();
}
