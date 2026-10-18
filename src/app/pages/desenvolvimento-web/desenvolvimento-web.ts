import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
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
import { pt } from '../../i18n/pt';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { Accordion, AccordionItem } from '../../shared/ui/accordion/accordion';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { Icon } from '../../shared/ui/icon/icon';
import { KzPipe } from '../../shared/pipes/kz.pipe';
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
  imports: [Accordion, CtaBand, Icon, KzPipe, PageHero, RevealChildren],
  templateUrl: './desenvolvimento-web.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesenvolvimentoWeb {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);

  readonly copy = desenvolvimentoWebContent;
  readonly breadcrumbs = [{ label: this.copy.hero.homeLabel.pt, href: '/' }] as const;
  readonly websitePackages = webPacotes.map((item) => ({
    ...item,
    ...this.createPackageView(item.slug, item.nome.pt),
  }));
  readonly shopPackages = lojaPacotes.map((item) => ({
    ...item,
    ...this.createPackageView(item.slug, item.nome.pt),
  }));
  readonly systemPackages = sistemaPacotes.map((item) => ({
    ...item,
    ...this.createPackageView(item.slug, item.nome.pt),
  }));
  readonly allPackages: readonly PackageView[] = [
    ...this.websitePackages,
    ...this.shopPackages,
    ...this.systemPackages,
  ];
  readonly processSteps = processoDesenvolvimentoWeb.map((step, index) => ({
    number: (index + 1).toString().padStart(2, '0'),
    title: step.pt,
  }));
  readonly systemTimeline = etapasSistemaGrande.map((step, index) => ({
    number: (index + 1).toString().padStart(2, '0'),
    title: step.pt,
  }));
  readonly faqItems: readonly AccordionItem[] = desenvolvimentoWebFaq.map((item) => ({
    id: item.id,
    question: item.question.pt,
    answer: item.answer.pt,
  }));
  readonly diagnosticCards = diagnosticoWeb.map((item) => ({
    id: item.id,
    need: item.necessidade.pt,
    recommendations: item.recomendacao.map((slug) => this.requirePackage(slug)),
  }));
  readonly maintenanceWhatsappUrl = this.whatsapp.createWhatsappUrl(
    'Olá! Gostaria de pedir informações sobre manutenção web.',
  );
  readonly maintenancePrice = desenvolvimentoWebContent.sections.maintenance.startingPrice;
  readonly homeDisclaimer = notaLegalPacotes.pt;
  readonly shopPaymentNote = desenvolvimentoWebContent.sections.shops.paymentNote.pt;
  readonly automationPendingMessage = this.copy.labels.automationPending.pt;
  readonly generalWhatsappUrl = this.whatsapp.createWhatsappUrl(
    this.copy.sections.quote.whatsappMessage.pt,
  );

  constructor() {
    this.seo.setPage(pt.pages.web, pt.seo.web);
  }

  private createPackageView(slug: string, name: string): PackageView {
    return {
      slug,
      name,
      quoteUrl: this.whatsapp.createWhatsappUrl(`Olá! Gostaria de um orçamento para ${name}.`),
      contactUrl: `/contacto?servico=${encodeURIComponent(slug)}`,
      sectionUrl: `/desenvolvimento-web#${slug}`,
    };
  }

  private requirePackage(slug: string): PackageView {
    const item = this.allPackages.find((candidate) => candidate.slug === slug);
    if (!item) {
      throw new Error(`No package found for diagnostic recommendation "${slug}".`);
    }
    return item;
  }
}
