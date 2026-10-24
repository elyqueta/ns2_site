import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { PartnerCardData } from '../card-content';

@Component({
  selector: 'app-partner-card',
  imports: [ContentCard],
  templateUrl: './partner-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerCard {
  readonly item = input.required<PartnerCardData>();
}
