import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { aboutPageContent } from '../../data/sobre';
import { pt } from '../../i18n/pt';
import { Reveal } from '../../shared/directives/reveal.directive';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { ProcessProgress } from '../../shared/directives/process-progress.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-sobre',
  imports: [
    CtaBand,
    Icon,
    MediaSlot,
    PageHero,
    ProcessProgress,
    Reveal,
    RevealChildren,
    SectionHeading,
  ],
  templateUrl: './sobre.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sobre {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  readonly copy = aboutPageContent;
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(this.copy.cta.whatsappMessage.pt);
  readonly breadcrumbs = [{ label: this.copy.hero.homeLabel.pt, href: '/' }] as const;

  constructor() {
    this.seo.setPage(pt.pages.about, pt.seo.about);
  }
}
