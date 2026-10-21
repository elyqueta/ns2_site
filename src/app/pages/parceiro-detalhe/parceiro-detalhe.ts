import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { SITE_ORIGIN } from '../../core/site-origin';
import { WhatsappService } from '../../core/whatsapp.service';
import { partnersPageContent, parceiros } from '../../data/parceiros';
import { pt } from '../../i18n/pt';
import { Icon } from '../../shared/ui/icon/icon';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PartnerCard } from '../../shared/ui/partner-card/partner-card';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-parceiro-detalhe',
  imports: [CtaBand, Icon, LocalizedPipe, PageHero, PartnerCard, RouterLink],
  templateUrl: './parceiro-detalhe.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParceiroDetalhe {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
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
        description: this.i18n.text(item.resumo),
        label: this.i18n.text(item.categoria),
        href: item.href,
      }));
  });
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
    { label: this.i18n.text(this.copy.title), href: '/parceiros' },
  ]);
  readonly whatsappUrl = computed(() => {
    const partner = this.partner();
    return partner ? this.whatsapp.createWhatsappUrl(this.i18n.text(partner.mensagemWhatsApp)) : '';
  });
  readonly quoteTitle = computed(() => {
    const partner = this.partner();
    return partner ? this.i18n.text(this.copy.quoteTitle).replace('{{brand}}', partner.nome) : '';
  });
  readonly quoteDescription = computed(() => {
    const partner = this.partner();
    return partner
      ? this.i18n.text(this.copy.quoteDescription).replace('{{brand}}', partner.nome)
      : '';
  });
  readonly seoEffect = effect(() => {
    const partner = this.partner();
    if (!partner) {
      this.seo.setPage(this.i18n.t('pages.notFound'), this.i18n.t('seo.notFound'));
      return;
    }

    this.seo.setPage(
      `${partner.nome} | ${this.i18n.t('pages.partners')} | NS2 Innovation`,
      this.i18n.text(partner.resumo),
      {
        breadcrumbs: [
          { name: this.i18n.text(partnersPageContent.homeLabel), url: `${SITE_ORIGIN}/` },
          {
            name: this.i18n.text(partnersPageContent.title),
            url: `${SITE_ORIGIN}/parceiros`,
          },
          { name: partner.nome, url: `${SITE_ORIGIN}${partner.href}` },
        ],
      },
    );
  });
}
