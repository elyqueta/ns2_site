import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { Servico, servicesPageContent, servicos } from '../../data/servicos';
import { Reveal } from '../../shared/directives/reveal.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

const detailServices = servicos.filter((service) => service.slug !== 'desenvolvimento-web');

@Component({
  selector: 'app-servico-detalhe',
  imports: [CtaBand, Icon, LocalizedPipe, MediaSlot, PageHero, Reveal, RouterLink],
  templateUrl: './servico-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicoDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly copy = servicesPageContent;
  readonly service = computed(() => {
    const slug = this.params().get('slug');
    return detailServices.find((item) => item.slug === slug) ?? null;
  });
  readonly imagemSrc = computed(() => {
    const service = this.service();
    if (!service) {
      return '';
    }
    return `/images/servicos/${service.imagem.ficheiroEsperado.pt.split('/').pop()}`;
  });
  readonly position = computed(() => {
    const current = this.service();
    return current ? detailServices.indexOf(current) : -1;
  });
  readonly previous = computed(() => {
    const index = this.position();
    return index > 0 ? detailServices[index - 1] : null;
  });
  readonly next = computed(() => {
    const index = this.position();
    return index >= 0 && index < detailServices.length - 1 ? detailServices[index + 1] : null;
  });
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(servicesPageContent.homeLabel), href: '/' },
    { label: this.i18n.text(servicesPageContent.title), href: '/servicos' },
  ]);
  readonly whatsappUrl = computed(() => {
    const service = this.service();
    return service ? this.whatsapp.createWhatsappUrl(this.i18n.text(service.ctaMensagem)) : '';
  });
  private readonly seoEffect = effect(() => {
    const service = this.service();
    if (!service) {
      this.seo.setPage(this.i18n.t('pages.notFound'), this.i18n.t('seo.notFound'));
      this.seo.clearJsonLd('service-json-ld');
      return;
    }

    this.seo.setPage(
      `${this.i18n.text(service.titulo)} | NS2 Innovation`,
      this.i18n.text(service.resumo),
      {
        breadcrumbs: [
          { name: this.i18n.text(this.copy.homeLabel), url: `${SITE_ORIGIN}/` },
          { name: this.i18n.text(this.copy.title), url: `${SITE_ORIGIN}/servicos` },
          { name: this.i18n.text(service.titulo), url: `${SITE_ORIGIN}${service.href}` },
        ],
      },
    );
    this.seo.setJsonLd('service-json-ld', this.serviceStructuredData(service));
  });
  private readonly cleanup = this.destroyRef.onDestroy(() =>
    this.seo.clearJsonLd('service-json-ld'),
  );

  private serviceStructuredData(service: Servico): Readonly<Record<string, unknown>> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: this.i18n.text(service.titulo),
      description: this.i18n.text(service.resumo),
      serviceType: this.i18n.text(service.titulo),
      url: `${SITE_ORIGIN}${service.href}`,
      provider: {
        '@type': 'Organization',
        name: 'NS2 Innovation',
        url: SITE_ORIGIN,
      },
    };
  }
}
