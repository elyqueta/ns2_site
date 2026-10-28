import { ChangeDetectionStrategy, Component } from '@angular/core';
import { homeContent } from '../../../data/home';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { Reveal } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home-testimonials-preview',
  imports: [LocalizedPipe, Reveal, SectionHeading],
  templateUrl: './testimonials-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTestimonialsPreview {
  readonly copy = homeContent.testimonials;
}
