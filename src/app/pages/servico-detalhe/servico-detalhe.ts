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
import { WhatsappService } from '../../core/whatsapp.service';
import { Servico, servicesPageContent, servicos } from '../../data/servicos';
import { pt } from '../../i18n/pt';
import { Reveal } from '../../shared/directives/reveal.directive';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

const detailServices = servicos.filter((service) => service.slug !== 'desenvolvimento-web');

@Component({
  selector: 'app-servico-detalhe',
  imports: [CtaBand, Icon, MediaSlot, PageHero, Reveal, RouterLink],
  templateUrl: './servico-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicoDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
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
  readonly breadcrumbs = [
    { label: servicesPageContent.homeLabel.pt, href: '/' },
    { label: servicesPageContent.title.pt, href: '/servicos' },
  ] as const;
  readonly whatsappUrl = computed(() => {
    const service = this.service();
    return service ? this.whatsapp.createWhatsappUrl(service.ctaMensagem.pt) : '';
  });
  private readonly seoEffect = effect(() => {
    const service = this.service();
    if (!service) {
      this.seo.setPage(pt.pages.notFound, pt.seo.notFound);
      this.seo.clearJsonLd('service-json-ld');
      return;
    }

    this.seo.setPage(`${service.titulo.pt} | NS2 Innovation`, service.resumo.pt);
    this.seo.setJsonLd('service-json-ld', this.serviceStructuredData(service));
  });
  private readonly cleanup = this.destroyRef.onDestroy(() =>
    this.seo.clearJsonLd('service-json-ld'),
  );

  private serviceStructuredData(service: Servico): Readonly<Record<string, unknown>> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.titulo.pt,
      description: service.resumo.pt,
      serviceType: service.titulo.pt,
      url: `https://www.ns2innovation.com${service.href}`,
      provider: {
        '@type': 'Organization',
        name: 'NS2 Innovation',
        url: 'https://www.ns2innovation.com',
      },
    };
  }
}
