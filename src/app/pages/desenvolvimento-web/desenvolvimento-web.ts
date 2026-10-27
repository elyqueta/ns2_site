import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { RouterLink } from '@angular/router';
import {
  desenvolvimentoWebContent,
  desenvolvimentoWebFaq,
  diagnosticoWeb,
  etapasSistemaGrande,
  processoDesenvolvimentoWeb,
  sistemaPacotes,
} from '../../data/desenvolvimento-web';
import { lojaPacotes, NivelWeb } from '../../data/desenvolvimento-web';
import { notaLegalPacotes, PacoteWeb, webPacotes } from '../../data/web-pacotes';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { Accordion, AccordionItem } from '../../shared/ui/accordion/accordion';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { PacoteVidroCard } from '../../shared/ui/pacote-vidro-card/pacote-vidro-card';
import {
  criarPacoteVidro,
  criarPacoteVidroNivel,
} from '../../shared/ui/pacote-vidro-card/pacote-vidro.mapper';
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

type CatalogPackage = PacoteWeb | NivelWeb;

interface CatalogCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly packages: readonly CatalogPackage[];
  readonly comingSoon: boolean;
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
  readonly catalogSearchLabel = computed(() => this.i18n.t('webCatalog.searchLabel'));
  readonly catalogSearchPlaceholder = computed(() => this.i18n.t('webCatalog.searchPlaceholder'));
  readonly catalogClearSearch = computed(() => this.i18n.t('webCatalog.clearSearch'));
  readonly catalogPrevious = computed(() => this.i18n.t('webCatalog.previousCategory'));
  readonly catalogNext = computed(() => this.i18n.t('webCatalog.nextCategory'));
  readonly catalogComingSoon = computed(() => this.i18n.t('webCatalog.comingSoon'));
  readonly catalogAiEmpty = computed(() => this.i18n.t('webCatalog.aiEmpty'));
  readonly catalogNoResults = computed(() => this.i18n.t('webCatalog.noResults'));
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
        quoteRequired: this.i18n.text(this.copy.labels.quoteRequired),
        mostChosen: this.maisEscolhido(),
        learnMore: this.learnMoreLabel(),
      }),
    ),
  );
  readonly searchTerm = signal('');
  readonly activeCategoryIndex = signal(0);
  readonly catalogCategories = computed<readonly CatalogCategory[]>(() => [
    {
      id: 'websites',
      title: this.i18n.text(this.copy.sections.websites.index),
      description: this.i18n.text(this.copy.sections.websites.description),
      imageSrc: '/images/servicos/websites-sistemas-web.webp',
      packages: webPacotes,
      comingSoon: false,
    },
    {
      id: 'lojas',
      title: this.i18n.text(this.copy.sections.shops.index),
      description: this.i18n.text(this.copy.sections.shops.description),
      imageSrc: '/images/heros/desenvolvimento-web.webp',
      packages: lojaPacotes,
      comingSoon: false,
    },
    {
      id: 'sistemas',
      title: this.i18n.text(this.copy.sections.systems.index),
      description: this.i18n.text(this.copy.sections.systems.description),
      imageSrc: '/images/servicos/sistemas-software.webp',
      packages: sistemaPacotes,
      comingSoon: false,
    },
    {
      id: 'ia-automacao',
      title: this.i18n.t('webCatalog.aiCategory'),
      description: this.i18n.t('webCatalog.aiDescription'),
      imageSrc: '/images/servicos/sistemas-software.webp',
      packages: [],
      comingSoon: true,
    },
  ]);
  readonly activeCategory = computed(() => this.catalogCategories()[this.activeCategoryIndex()]);
  readonly catalogCards = computed(() => {
    const category = this.activeCategory();
    const term = this.normalise(this.searchTerm());
    const packages = category?.packages.filter((item) => {
      if (!term) {
        return true;
      }

      return [
        this.i18n.text(item.nome),
        this.i18n.text(item.descricao),
        this.i18n.text(item.prazo),
        ...('idealPara' in item ? [this.i18n.text(item.idealPara)] : []),
        ...('paginas' in item ? [this.i18n.text(item.paginas)] : []),
      ]
        .join(' ')
        .toLocaleLowerCase()
        .includes(term);
    });

    return packages?.map((item) =>
      'paginas' in item
        ? criarPacoteVidro(item, (value) => this.i18n.text(value), this.cardLabels())
        : criarPacoteVidroNivel(item, (value) => this.i18n.text(value), this.cardLabels()),
    ) ?? [];
  });
  readonly cardLabels = computed(() => ({
    startingAt: this.i18n.text(this.copy.labels.startingAt),
    quoteRequired: this.i18n.text(this.copy.labels.quoteRequired),
    mostChosen: this.maisEscolhido(),
    learnMore: this.learnMoreLabel(),
  }));
  readonly hasSearchResults = computed(() => this.catalogCards().length > 0);
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

  onSearchInput(event: Event): void {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      this.searchTerm.set(input.value);
    }
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }

  previousCategory(): void {
    this.activeCategoryIndex.update((index) => Math.max(index - 1, 0));
  }

  nextCategory(): void {
    this.activeCategoryIndex.update((index) =>
      Math.min(index + 1, this.catalogCategories().length - 1),
    );
  }

  selectCategory(index: number): void {
    this.activeCategoryIndex.set(index);
    this.clearSearch();
  }

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

  private normalise(value: string): string {
    return value.trim().toLocaleLowerCase();
  }
}
