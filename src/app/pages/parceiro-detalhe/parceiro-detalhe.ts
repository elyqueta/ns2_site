import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { partnersPageContent, parceiros } from '../../data/parceiros';
import { pt } from '../../i18n/pt';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PartnerCard } from '../../shared/ui/partner-card/partner-card';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';

@Component({
  selector: 'app-parceiro-detalhe',
  imports: [CtaBand, Icon, PageHero, PartnerCard, RouterLink],
  templateUrl: './parceiro-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParceiroDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly copy = partnersPageContent;
  readonly partner = computed(() => {
    const slug = this.params().get('slug');
    return parceiros.find((item) => item.slug === slug) ?? null;
  });
  readonly partnerProducts = computed(() => this.partner()?.produtos ?? []);
  readonly otherPartners = computed(() => {
    const current = this.partner();
    return parceiros
      .filter((item) => item.slug !== current?.slug)
      .slice(0, 3)
      .map((item) => ({
        type: 'partner' as const,
        title: item.nome,
        description: item.resumo.pt,
        label: item.categoria.pt,
        href: item.href,
      }));
  });
  readonly breadcrumbs = [
    { label: this.copy.homeLabel.pt, href: '/' },
    { label: this.copy.title.pt, href: '/parceiros' },
  ] as const;
  readonly whatsappUrl = computed(() => {
    const partner = this.partner();
    return partner ? this.whatsapp.createWhatsappUrl(partner.mensagemWhatsApp.pt) : '';
  });
  readonly quoteTitle = computed(() => {
    const partner = this.partner();
    return partner ? this.copy.quoteTitle.pt.replace('{{brand}}', partner.nome) : '';
  });
  readonly quoteDescription = computed(() => {
    const partner = this.partner();
    return partner ? this.copy.quoteDescription.pt.replace('{{brand}}', partner.nome) : '';
  });
  readonly seoEffect = effect(() => {
    const partner = this.partner();
    if (!partner) {
      this.seo.setPage(pt.pages.notFound, pt.seo.notFound);
      return;
    }

    this.seo.setPage(`${partner.nome} | ${pt.pages.partners} | NS2 Innovation`, partner.resumo.pt, {
      breadcrumbs: [
        { name: partnersPageContent.homeLabel.pt, url: `${SITE_ORIGIN}/` },
        {
          name: partnersPageContent.title.pt,
          url: `${SITE_ORIGIN}/parceiros`,
        },
        { name: partner.nome, url: `${SITE_ORIGIN}${partner.href}` },
      ],
    });
  });
}
