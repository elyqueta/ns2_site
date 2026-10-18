import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { legalDocuments, legalPageContent } from '../../data/legais';
import { pt } from '../../i18n/pt';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

@Component({
  selector: 'app-legal',
  imports: [PageHero],
  templateUrl: './legal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Legal {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly routeData = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });

  readonly copy = legalPageContent;
  readonly legalDocument = computed(() =>
    this.routeData()['legalDocument'] === 'terms' ? legalDocuments.terms : legalDocuments.privacy,
  );
  readonly sections = computed(() =>
    this.legalDocument().sections.map((section, index) => ({
      ...section,
      id: `legal-section-${index}`,
    })),
  );
  readonly breadcrumbs = [{ label: this.copy.homeLabel, href: '/' }] as const;
  private readonly seoEffect = effect(() => {
    const content = this.legalDocument();
    this.seo.setPage(`${content.title} | NS2 Innovation`, content.lead);
  });
}
