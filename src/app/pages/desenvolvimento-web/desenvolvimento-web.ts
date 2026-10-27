import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { RouterLink } from '@angular/router';
import {
  desenvolvimentoWebContent,
  desenvolvimentoWebFaq,
  diagnosticoWeb,
  etapasSistemaGrande,
  lojaPacotes,
  processoDesenvolvimentoWeb,
  sistemaPacotes,
} from '../../data/desenvolvimento-web';
import { notaLegalPacotes, webPacotes } from '../../data/web-pacotes';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { Accordion, AccordionItem } from '../../shared/ui/accordion/accordion';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PacoteVidroCard } from '../../shared/ui/pacote-vidro-card/pacote-vidro-card';
import { criarPacoteVidro } from '../../shared/ui/pacote-vidro-card/pacote-vidro.mapper';
import { KzPipe } from '../../shared/pipes/kz.pipe';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { PageHero } from '../../shared/ui/page-hero/page-hero';

interface PackageView {
  readonly slug: string;
  readonly name: string;
  readonly quoteUrl: string;
  readonly contactUrl: string;
  readonly sectionUrl: string;
}

@Component({
  selector: 'app-desenvolvimento-web',
  imports: [Accordion, CtaBand, Icon, KzPipe, LocalizedPipe, PacoteVidroCard, PageHero, RevealChildren],
  templateUrl: './desenvolvimento-web.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesenvolvimentoWeb {
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  readonly copy = desenvolvimentoWebContent;
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.hero.homeLabel), href: '/' },
  ]);
  readonly maisEscolhido = computed(() => this.i18n.t('actions.maisEscolhido'));
  readonly extrasLabel = computed(() => this.i18n.t('actions.extrasLabel'));
  readonly idealParaLabel = computed(() => this.i18n.t('actions.idealPara'));
  readonly learnMoreLabel = computed(() => this.i18n.t('actions.learnMore'));
  readonly websitePackages = computed(() =>
    webPacotes.map((item) => ({
      ...item,
      ...this.createPackageView(item.slug, this.i18n.text(item.nome)),
    })),
  );
  readonly websiteCards = computed(() =>
    webPacotes.map((item) =>
      criarPacoteVidro(item, (v) => this.i18n.text(v), {
        startingAt: this.i18n.text(this.copy.labels.startingAt),
        mostChosen: this.maisEscolhido(),
        learnMore: this.learnMoreLabel(),
      }),
    ),
  );
  readonly shopPackages = computed(() =>
    lojaPacotes.map((item) => ({
      ...item,
      ...this.createPackageView(item.slug, this.i18n.text(item.nome)),
    })),
  );
  readonly systemPackages = computed(() =>
    sistemaPacotes.map((item) => ({
      ...item,
      ...this.createPackageView(item.slug, this.i18n.text(item.nome)),
    })),
  );
  readonly allPackages = computed<readonly PackageView[]>(() => [
    ...this.websitePackages(),
    ...this.shopPackages(),
    ...this.systemPackages(),
  ]);
  readonly processSteps = computed(() =>
    processoDesenvolvimentoWeb.map((step, index) => ({
      number: (index + 1).toString().padStart(2, '0'),
      title: this.i18n.text(step),
    })),
  );
  readonly systemTimeline = computed(() =>
    etapasSistemaGrande.map((step, index) => ({
      number: (index + 1).toString().padStart(2, '0'),
      title: this.i18n.text(step),
    })),
  );
  readonly faqItems = computed<readonly AccordionItem[]>(() =>
    desenvolvimentoWebFaq.map((item) => ({
      id: item.id,
      question: this.i18n.text(item.question),
      answer: this.i18n.text(item.answer),
    })),
  );
  readonly diagnosticCards = computed(() =>
    diagnosticoWeb.map((item) => ({
      id: item.id,
      need: this.i18n.text(item.necessidade),
      recommendations: item.recomendacao.map((slug) => this.requirePackage(slug)),
    })),
  );
  readonly maintenanceWhatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(
      this.i18n.lang() === 'en'
        ? 'Hello! I would like information about web maintenance.'
        : 'Olá! Gostaria de pedir informações sobre manutenção web.',
    ),
  );
  readonly maintenancePrice = desenvolvimentoWebContent.sections.maintenance.startingPrice;
  readonly homeDisclaimer = computed(() => this.i18n.text(notaLegalPacotes));
  readonly shopPaymentNote = computed(() => this.i18n.text(this.copy.sections.shops.paymentNote));
  readonly automationPendingMessage = computed(() =>
    this.i18n.text(this.copy.labels.automationPending),
  );
  readonly generalWhatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.sections.quote.whatsappMessage)),
  );

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.web'), this.i18n.t('seo.web')),
  );

  private createPackageView(slug: string, name: string): PackageView {
    return {
      slug,
      name,
      quoteUrl: this.whatsapp.createWhatsappUrl(`Olá! Gostaria de um orçamento para ${name}.`),
      contactUrl: `/contacto?servico=${encodeURIComponent(slug)}`,
      sectionUrl: `/desenvolvimento-web/${slug}`,
    };
  }

  private requirePackage(slug: string): PackageView {
    const item = this.allPackages().find((candidate) => candidate.slug === slug);
    if (!item) {
      throw new Error(`No package found for diagnostic recommendation "${slug}".`);
    }
    return item;
  }
}
