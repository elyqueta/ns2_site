import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../core/seo.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { projectos, projectosPageContent } from '../../data/projectos';
import { pt } from '../../i18n/pt';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { ProjectCardData } from '../../shared/ui/card-content';

@Component({
  selector: 'app-projectos',
  imports: [CtaBand, PageHero, ProjectCard],
  templateUrl: './projectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projectos {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);
  private readonly whatsapp = inject(WhatsappService);

  readonly copy = projectosPageContent;
  readonly project = projectos[0];
  readonly previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.url);
  readonly breadcrumbs = [{ label: this.copy.homeLabel.pt, href: '/' }] as const;
  readonly projectCard: ProjectCardData = {
    type: 'project',
    title: this.project.nome.pt,
    description: this.project.descricao.pt,
    label: this.project.tipo.pt,
  };
  readonly whatsappUrl = this.whatsapp.createWhatsappUrl(this.copy.whatsappMessage.pt);

  constructor() {
    this.seo.setPage(pt.pages.projects, pt.seo.projects);
  }
}
