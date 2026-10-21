import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/i18n.service';
import { homeContent } from '../../../data/home';
import { webPacotes } from '../../../data/web-pacotes';
import { PackageCard } from '../../../shared/ui/package-card/package-card';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-web-preview',
  imports: [LocalizedPipe, PackageCard, RouterLink, SectionHeading],
  templateUrl: './web-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWebPreview {
  private readonly i18n = inject(I18nService);
  readonly copy = homeContent.web;
  readonly packages = computed(() =>
    webPacotes.map((item) => ({
      type: 'package' as const,
      title: this.i18n.text(item.nome),
      description: this.i18n.text(item.descricao),
      href: item.href,
      label: this.i18n.text(this.copy.packageLabel),
      priceFrom: item.aPartirDe,
      priceLabel: this.i18n.text(this.copy.startingAt),
    })),
  );
}
