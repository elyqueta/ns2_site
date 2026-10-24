import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { MediaSlot } from '../media-slot/media-slot';
import { PartnerCardData } from '../card-content';

@Component({
  selector: 'app-partner-card',
  imports: [ContentCard, MediaSlot],
  templateUrl: './partner-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerCard {
  readonly item = input.required<PartnerCardData>();
}
