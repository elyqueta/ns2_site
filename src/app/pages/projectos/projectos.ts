import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../core/seo.service';
import { I18nService } from '../../core/i18n.service';
import { WhatsappService } from '../../core/whatsapp.service';
import { projectos, projectosPageContent, Project } from '../../data/projectos';
import { CtaBand } from '../../shared/ui/cta-band/cta-band';
import { PageHero } from '../../shared/ui/page-hero/page-hero';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { ProjectCardData } from '../../shared/ui/card-content';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-projectos',
  imports: [CtaBand, LocalizedPipe, PageHero, ProjectCard],
  templateUrl: './projectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projectos {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly whatsapp = inject(WhatsappService);

  readonly copy = projectosPageContent;
  readonly projects = projectos.filter((p) => !p.brevemente);
  readonly featuredProject = projectos[0];
  readonly previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.featuredProject.url);
  readonly breadcrumbs = computed(() => [
    { label: this.i18n.text(this.copy.homeLabel), href: '/' },
  ]);
  projectCard(project: Project): ProjectCardData {
    return {
      type: 'project',
      title: this.i18n.text(project.nome),
      description: this.i18n.text(project.descricao),
      label: this.i18n.text(project.tipo),
      href: project.url,
    };
  }
  readonly whatsappUrl = computed(() =>
    this.whatsapp.createWhatsappUrl(this.i18n.text(this.copy.whatsappMessage)),
  );

  private readonly seoEffect = effect(() =>
    this.seo.setPage(this.i18n.t('pages.projects'), this.i18n.t('seo.projects')),
  );
}
