import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentCard } from '../content-card/content-card';
import { ServiceCardData } from '../card-content';

@Component({
  selector: 'app-service-card',
  imports: [ContentCard],
  templateUrl: './service-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCard {
  readonly item = input.required<ServiceCardData>();
}
