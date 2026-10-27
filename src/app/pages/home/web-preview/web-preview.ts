import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/i18n.service';
import { homeContent } from '../../../data/home';
import { webPacotes } from '../../../data/web-pacotes';
import { PacoteVidroCard } from '../../../shared/ui/pacote-vidro-card/pacote-vidro-card';
import { criarPacoteVidro } from '../../../shared/ui/pacote-vidro-card/pacote-vidro.mapper';
import { SectionHeading } from '../../../shared/ui/section-heading/section-heading';
import { LocalizedPipe } from '../../../shared/pipes/localized.pipe';

@Component({
  selector: 'app-home-web-preview',
  imports: [LocalizedPipe, PacoteVidroCard, RouterLink, SectionHeading],
  templateUrl: './web-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWebPreview {
  private readonly i18n = inject(I18nService);
  readonly copy = homeContent.web;
  readonly packages = computed(() =>
    webPacotes.map((item) =>
      criarPacoteVidro(item, (v) => this.i18n.text(v), {
        startingAt: this.i18n.text(this.copy.startingAt),
        mostChosen: this.i18n.t('actions.maisEscolhido'),
        learnMore: this.i18n.t('actions.learnMore'),
      }),
    ),
  );
}
