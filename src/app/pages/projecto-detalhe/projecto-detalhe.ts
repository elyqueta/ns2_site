import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { projectos, projectosPageContent } from '../../data/projectos';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-projecto-detalhe',
  standalone: true,
  imports: [CtaBand, Icon, LocalizedPipe, PageHero, MediaSlot],
  templateUrl: './projecto-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectoDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly copy = projectosPageContent;
  readonly project = computed(() => {
    const slug = this.params()?.get('slug');
    return slug ? projectos.find((p) => p.slug === slug) ?? null : null;
  });

  readonly breadcrumbs = computed(() => [
    { label: this.i18n.t('pages.home'), href: '/' },
    { label: this.i18n.t('pages.projects'), href: '/projectos' },
  ]);

  readonly contactLabel = computed(() => this.i18n.t('actions.contact'));
  readonly notFoundTitle = computed(() => this.i18n.t('pages.notFound'));
  readonly notFoundDescription = computed(() => this.i18n.t('pages.notFoundDescription'));
  readonly notIncludedLabel = computed(() => this.i18n.t('actions.notIncludedLabel'));

  private readonly seoEffect = effect(() => {
    const project = this.project();
    if (!project) {
      this.seo.setPage(this.i18n.t('pages.notFound'), this.i18n.t('seo.notFound'));
      return;
    }

    this.seo.setPage(
      `${this.i18n.text(project.nome)} | NS2 Innovation`,
      this.i18n.text(project.descricao),
      {
        type: 'website',
        breadcrumbs: [
          { name: this.i18n.t('pages.home'), url: `${SITE_ORIGIN}/` },
          { name: this.i18n.t('pages.projects'), url: `${SITE_ORIGIN}/projectos` },
          { name: this.i18n.text(project.nome), url: `${SITE_ORIGIN}/projectos/${project.slug}` },
        ],
      },
    );
  });

  readonly whatsappUrl = computed(() => {
    const project = this.project();
    if (!project) {
      return '';
    }
    return this.whatsapp.createWhatsappUrl(
      `Olá! Gostaria de saber mais sobre o projeto ${this.i18n.text(project.nome)}.`,
    );
  });
}
