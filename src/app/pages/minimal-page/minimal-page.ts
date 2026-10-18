import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { I18nService } from '../../core/i18n.service';
import { PageTranslationKey, pt } from '../../i18n/pt';

function isPageTranslationKey(value: unknown): value is PageTranslationKey {
  if (typeof value !== 'string' || !value.startsWith('pages.')) {
    return false;
  }

  return Object.hasOwn(pt.pages, value.slice('pages.'.length));
}

@Component({
  selector: 'app-minimal-page',
  templateUrl: './minimal-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalPage {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);
  private readonly routeData = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });

  readonly heading = computed(() => {
    const key = this.routeData()['headingKey'];
    return this.i18n.t(isPageTranslationKey(key) ? key : 'pages.notFound');
  });
}
