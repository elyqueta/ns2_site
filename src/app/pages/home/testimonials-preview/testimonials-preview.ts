import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { homeContent } from '../../../data/home';
import { HomeCarousel } from '../../../shared/directives/home-carousel.directive';
import { Icon } from '../../../shared/ui/icon/icon';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { Reveal } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home-testimonials-preview',
  imports: [HomeCarousel, Icon, LocalizedPipe, Reveal, SectionHeading],
  templateUrl: './testimonials-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTestimonialsPreview {
  readonly copy = homeContent.testimonials;
  readonly activeIndex = signal(0);

  previous(event?: Event): void {
    event?.preventDefault();
    this.activeIndex.update((index) => Math.max(index - 1, 0));
  }

  next(event?: Event): void {
    event?.preventDefault();
    this.activeIndex.update((index) => Math.min(index + 1, this.copy.items.length - 1));
  }
}
