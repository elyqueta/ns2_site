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
import { webPacoteDetalheBySlug } from '../../data/web-pacote-detalhe';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { KzPipe } from '../../shared/pipes/kz.pipe';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-web-pacote-detalhe',
  standalone: true,
  imports: [CtaBand, Icon, KzPipe, LocalizedPipe, PageHero],
  templateUrl: './web-pacote-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebPacoteDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly pacote = computed(() => {
    const slug = this.params()?.get('slug');
    return slug ? webPacoteDetalheBySlug.get(slug) ?? null : null;
  });
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.t('pages.home'), href: '/' },
    { label: this.i18n.t('pages.web'), href: '/desenvolvimento-web' },
  ]);
  readonly contactLabel = computed(() => this.i18n.t('actions.contact'));
  readonly notFoundTitle = computed(() => this.i18n.t('pages.notFound'));
  readonly notFoundDescription = computed(() => this.i18n.t('pages.notFoundDescription'));
  readonly notIncludedLabel = computed(() => this.i18n.t('actions.notIncludedLabel'));
  readonly requestQuoteTitle = computed(() => this.i18n.t('actions.requestQuoteTitle'));
  readonly requestQuoteDescription = computed(() => this.i18n.t('actions.requestQuoteDescription'));
  readonly whatsappLabel = computed(() => this.i18n.t('actions.whatsappLabel'));
  readonly startingAtLabel = computed(() => this.i18n.t('actions.startingAt'));
  readonly entregasLabel = computed(() => this.i18n.t('actions.entregasLabel'));
  readonly includesLabel = computed(() => this.i18n.t('actions.includesLabel'));
  readonly pagesLabel = computed(() => this.i18n.t('actions.pagesLabel'));
  readonly termLabel = computed(() => this.i18n.t('actions.termLabel'));
  readonly idealParaLabel = computed(() => this.i18n.t('actions.idealPara'));

  private readonly seoEffect = effect(() => {
    const pacote = this.pacote();
    if (!pacote) {
      this.seo.setPage(this.i18n.t('pages.notFound'), this.i18n.t('seo.notFound'));
      return;
    }

    this.seo.setPage(
      `${this.i18n.text(pacote.nome)} | NS2 Innovation`,
      this.i18n.text(pacote.descricao),
      {
        type: 'website',
        breadcrumbs: [
          { name: this.i18n.t('pages.home'), url: `${SITE_ORIGIN}/` },
          {
            name: this.i18n.t('pages.web'),
            url: `${SITE_ORIGIN}/desenvolvimento-web`,
          },
          {
            name: this.i18n.text(pacote.nome),
            url: `${SITE_ORIGIN}/desenvolvimento-web/${pacote.slug}`,
          },
        ],
      },
    );
  });

  readonly whatsappUrl = computed(() => {
    const pacote = this.pacote();
    if (!pacote) {
      return '';
    }
    const price = new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      maximumFractionDigits: 0,
    }).format(pacote.aPartirDe);
    return this.whatsapp.createWhatsappUrl(
      `Olá! Gostaria de um orçamento para ${this.i18n.text(pacote.nome)} (${price}).`,
    );
  });
}
