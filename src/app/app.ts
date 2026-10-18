import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationService } from './core/animation.service';
import { I18nService } from './core/i18n.service';
import { ScrollService } from './core/scroll.service';
import { ThemeService } from './core/theme.service';
import { Footer } from './shared/layout/footer/footer';
import { Header } from './shared/layout/header/header';
import { PageTransition } from './shared/layout/page-transition/page-transition';
import { Preloader } from './shared/layout/preloader/preloader';
import { WhatsappFab } from './shared/layout/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, PageTransition, Preloader, RouterOutlet, WhatsappFab],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly theme = inject(ThemeService);
  protected readonly animation = inject(AnimationService);
  protected readonly scroll = inject(ScrollService);
  protected readonly skipLinkLabel = inject(I18nService).t('actions.skipToContent');
}
