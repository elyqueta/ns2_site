import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { legalDocuments, legalPageContent } from '../../data/legais';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-legal',
  imports: [LocalizedPipe, PageHero],
  templateUrl: './legal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Legal {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
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
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  private readonly seoEffect = effect(() => {
    const content = this.legalDocument();
    this.seo.setPage(
      `${this.i18n.text(content.title)} | NS2 Innovation`,
      this.i18n.text(content.lead),
    );
  });
}
