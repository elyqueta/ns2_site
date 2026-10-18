import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeContent } from '../../../data/home';
import { webPacotes } from '../../../data/web-pacotes';
import { PackageCard } from '../../../shared/ui/package-card/package-card';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-home-web-preview',
  imports: [PackageCard, RouterLink, SectionHeading],
  templateUrl: './web-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWebPreview {
  readonly copy = homeContent.web;
  readonly packages = webPacotes.map((item) => ({
    type: 'package' as const,
    title: item.nome.pt,
    description: item.descricao.pt,
    href: item.href,
    label: this.copy.packageLabel.pt,
    priceFrom: item.aPartirDe,
    priceLabel: this.copy.startingAt.pt,
  }));
}
