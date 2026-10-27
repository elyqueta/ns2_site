import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../core/animation.service';
import { SeoService } from '../../core/seo.service';
import { Accordion, AccordionItem } from '../../shared/ui/accordion/accordion';
import { Badge } from '../../shared/ui/badge/badge';
import { BreadcrumbItem } from '../../shared/ui/breadcrumb/breadcrumb';
import { Button } from '../../shared/ui/button/button';
import { Card } from '../../shared/ui/card/card';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { FormField, FormFieldOption } from '../../shared/ui/form-field/form-field';
import { Icon, iconNames } from '../../shared/ui/icon/icon';
import { LinkArrow } from '../../shared/ui/link-arrow/link-arrow';
import { Marquee } from '../../shared/ui/marquee/marquee';
import { MediaSlot } from '../../shared/ui/media-slot/media-slot';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { PackageCard } from '../../shared/ui/package-card/package-card';
import { PartnerCard } from '../../shared/ui/partner-card/partner-card';
import { PostCard } from '../../shared/ui/post-card/post-card';
import { ProductCard } from '../../shared/ui/product-card/product-card';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { ServiceCard } from '../../shared/ui/service-card/service-card';
import { ServicoVidroCard, ServicoVidroCardData } from '../../shared/ui/servico-vidro-card/servico-vidro-card';
import { PacoteVidroCard } from '../../shared/ui/pacote-vidro-card/pacote-vidro-card';
import { criarPacoteVidro, PacoteVidroCardData } from '../../shared/ui/pacote-vidro-card/pacote-vidro.mapper';
import { ThemeToggle } from '../../shared/ui/theme-toggle/theme-toggle';
import { DataPtPipe } from '../../shared/pipes/data-pt.pipe';
import { KzPipe } from '../../shared/pipes/kz.pipe';
import {
  PackageCardData,
  PartnerCardData,
  PostCardData,
  ProductCardData,
  ProjectCardData,
  ServiceCardData,
} from '../../shared/ui/card-content';
import { webPacotes } from '../../data/web-pacotes';
import { pt } from '../../i18n/pt';
import { WhatsappService } from '../../core/whatsapp.service';
import { CountUp } from '../../shared/directives/count-up.directive';
import { DrawLine } from '../../shared/directives/draw-line.directive';
import { Magnetic } from '../../shared/directives/magnetic.directive';
import { MaskImage } from '../../shared/directives/mask-image.directive';
import { Parallax } from '../../shared/directives/parallax.directive';
import { Reveal } from '../../shared/directives/reveal.directive';
import { RevealChildren } from '../../shared/directives/reveal-children.directive';
import { SplitTextReveal } from '../../shared/directives/split-text.directive';
import { Tilt } from '../../shared/directives/tilt.directive';

interface PaletteToken {
  readonly name: string;
  readonly token: string;
  readonly swatchClass: string;
  readonly lightValue: string;
  readonly darkValue: string;
}

@Component({
  selector: 'app-ui-kit',
  imports: [
    RouterLink,
    Accordion,
    Badge,
    Button,
    Card,
    CtaBand,
    CountUp,
    DataPtPipe,
    DrawLine,
    FormField,
    Icon,
    KzPipe,
    LinkArrow,
    Magnetic,
    MaskImage,
    Marquee,
    MediaSlot,
    Parallax,
    PageHero,
    PackageCard,
    PartnerCard,
    PostCard,
    ProductCard,
    ProjectCard,
    ServicoVidroCard,
    SectionHeading,
    ServiceCard,
    PacoteVidroCard,
    Reveal,
    RevealChildren,
    SplitTextReveal,
    ThemeToggle,
    Tilt,
  ],
  templateUrl: './ui-kit.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiKit {
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);
  readonly animation = inject(AnimationService);

  readonly copy = pt.uiKit;
  readonly actions = pt.actions;
  readonly icons = iconNames.map((name) => ({ name, label: this.copy.icons[name] }));
  readonly sampleDate = new Date(2026, 9, 18);
  readonly sampleCurrency = 0;
  readonly currentName = signal('');
  readonly selectedService = signal('');
  readonly reducedMotionSimulationLabel = computed(() =>
    this.animation.simulateReducedMotion()
      ? this.copy.stopReducedMotionSimulation
      : this.copy.simulateReducedMotion,
  );

  toggleReducedMotionSimulation(): void {
    this.animation.simulateReducedMotion.update((current) => !current);
  }

  readonly palette: readonly PaletteToken[] = [
    {
      name: this.copy.colorBackground,
      token: 'bg',
      swatchClass: 'bg-bg',
      lightValue: '#F6F8FC',
      darkValue: '#05070D',
    },
    {
      name: this.copy.colorSurface,
      token: 'surface',
      swatchClass: 'bg-surface',
      lightValue: '#FFFFFF',
      darkValue: '#0A0E1A',
    },
    {
      name: this.copy.colorRaised,
      token: 'surface-2',
      swatchClass: 'bg-surface-2',
      lightValue: '#EDF1F8',
      darkValue: '#101626',
    },
    {
      name: this.copy.colorText,
      token: 'fg',
      swatchClass: 'bg-fg',
      lightValue: '#0A0E1A',
      darkValue: '#F4F6FB',
    },
    {
      name: this.copy.colorMuted,
      token: 'fg-muted',
      swatchClass: 'bg-fg-muted',
      lightValue: '#52607A',
      darkValue: '#9AA3B8',
    },
    {
      name: this.copy.colorAccent,
      token: 'accent',
      swatchClass: 'bg-accent',
      lightValue: '#2F63AE',
      darkValue: '#4074BA',
    },
    {
      name: this.copy.colorAccentBright,
      token: 'accent-bright',
      swatchClass: 'bg-accent-bright',
      lightValue: '#2F63AE',
      darkValue: '#6BA0EA',
    },
    {
      name: this.copy.colorBorder,
      token: 'line',
      swatchClass: 'bg-line',
      lightValue: 'rgba(10, 14, 26, 0.10)',
      darkValue: 'rgba(255, 255, 255, 0.09)',
    },
  ];

  readonly serviceItem = computed<ServiceCardData>(() => ({
    type: 'service',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardService,
  }));
  readonly productItem = computed<ProductCardData>(() => ({
    type: 'product',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardProduct,
  }));
  readonly packageItem = computed<PackageCardData>(() => ({
    type: 'package',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardPackage,
  }));
  readonly postItem = computed<PostCardData>(() => ({
    type: 'post',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardPost,
  }));
  readonly partnerItem = computed<PartnerCardData>(() => ({
    type: 'partner',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardPartner,
  }));
  readonly projectItem = computed<ProjectCardData>(() => ({
    type: 'project',
    title: this.copy.cardTitle,
    description: this.copy.cardDescription,
    label: this.copy.cardProject,
  }));

  readonly servicoVidroItem = computed<ServicoVidroCardData>(() => ({
    tintRgb: '63 111 181',
    titulo: { pt: 'Redes e servidores', en: 'Network and servers' },
    resumo: {
      pt: 'Projecto, instalação e manutenção da rede e dos servidores da sua empresa.',
      en: 'Design, installation and maintenance of your company’s network and servers.',
    },
    icone: 'network',
    href: '/servicos/infraestrutura-redes-servidores',
    imagemSrc: '/images/servicos/infraestrutura-redes-servidores.webp',
    imagemAlt: { pt: 'Imagem do serviço de redes e servidores', en: 'Network and server infrastructure image' },
    ctaLabel: { pt: this.copy.cardService, en: this.copy.cardService },
    badge: false,
  }));

  readonly servicoVidroItemComBadge = computed<ServicoVidroCardData>(() => ({
    tintRgb: '84 94 214',
    titulo: { pt: 'Suporte remoto', en: 'Remote support' },
    resumo: {
      pt: 'Atendimento rápido por telefone, email e WhatsApp, com acesso remoto.',
      en: 'Responsive support by phone, email and WhatsApp, including remote access.',
    },
    icone: 'support',
    href: '/servicos/suporte-remoto',
    imagemSrc: '/images/servicos/suporte-remoto.webp',
    imagemAlt: { pt: 'Imagem do serviço de suporte remoto', en: 'Remote support image' },
    ctaLabel: { pt: this.copy.cardService, en: this.copy.cardService },
    badge: true,
  }));

  readonly pacoteVidroItem = computed<PacoteVidroCardData>(() =>
    criarPacoteVidro(webPacotes[0], (v) => v.pt, {
      startingAt: pt.actions.startingAt,
      mostChosen: pt.actions.maisEscolhido,
      learnMore: pt.actions.learnMore,
    }),
  );
  readonly pacoteVidroItemDestaque = computed<PacoteVidroCardData>(() =>
    criarPacoteVidro(webPacotes[2], (v) => v.pt, {
      startingAt: pt.actions.startingAt,
      mostChosen: pt.actions.maisEscolhido,
      learnMore: pt.actions.learnMore,
    }),
  );

  readonly bentoPacotes = computed(() =>
    webPacotes.map((item) => ({
      ...criarPacoteVidro(item, (v) => v.pt, {
        startingAt: pt.actions.startingAt,
        mostChosen: pt.actions.maisEscolhido,
        learnMore: pt.actions.learnMore,
      }),
      bento: true,
    })),
  );

  readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: pt.uiKit.breadcrumbHome, href: '/' },
    { label: pt.nav.services, href: '/servicos' },
  ];
  readonly faqItems: readonly AccordionItem[] = [
    {
      id: 'ui-kit-faq-proposal',
      question: this.copy.faqQuestion,
      answer: this.copy.faqAnswer,
    },
    {
      id: 'ui-kit-faq-information',
      question: this.copy.faqSecondQuestion,
      answer: this.copy.faqSecondAnswer,
    },
  ];
  readonly services: readonly FormFieldOption[] = [
    { label: pt.nav.services, value: 'services' },
    { label: pt.nav.web, value: 'web' },
    { label: pt.nav.products, value: 'products' },
  ];
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(this.copy.ctaDescription);

  ngOnInit(): void {
    this.seo.setPage(pt.pages.uiKit, pt.seo.uiKit, { robots: 'noindex, nofollow' });
  }
}
