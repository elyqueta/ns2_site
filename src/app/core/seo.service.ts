import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SITE_ORIGIN } from './site-origin';

const SITE_NAME = 'NS2 Innovation';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/og/og-default.png`;

interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

interface SeoPageOptions {
  readonly canonical?: string;
  readonly robots?: string;
  readonly breadcrumbs?: readonly BreadcrumbItem[];
  readonly type?: 'website' | 'article';
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);

  setPage(title: string, description: string, options: SeoPageOptions = {}): void {
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    this.title.setTitle(pageTitle);
    const pageDescription = this.normalizeDescription(description);
    this.meta.updateTag({ name: 'description', content: pageDescription });

    const canonical = options.canonical ?? this.canonicalFor(this.router.url);
    this.setCanonical(canonical);
    this.meta.updateTag({ name: 'robots', content: options.robots ?? 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: options.type ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: DEFAULT_OG_IMAGE });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: `${SITE_NAME} — Tecnologia em Angola`,
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: DEFAULT_OG_IMAGE });

    const breadcrumbs = options.breadcrumbs ?? this.defaultBreadcrumbs(pageTitle, canonical);
    this.setJsonLd('breadcrumb-json-ld', this.breadcrumbStructuredData(breadcrumbs));
  }

  setJsonLd(id: string, data: Readonly<Record<string, unknown>>): void {
    this.clearJsonLd(id);
    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    this.document.head.appendChild(script);
  }

  clearJsonLd(id: string): void {
    this.document.getElementById(id)?.remove();
  }

  private canonicalFor(routerUrl: string): string {
    const path = routerUrl.split(/[?#]/, 1)[0] || '/';
    return new URL(path.startsWith('/') ? path : `/${path}`, SITE_ORIGIN).toString();
  }

  private normalizeDescription(description: string): string {
    const normalized = description.trim().replace(/\s+/g, ' ');
    const complete =
      normalized.length < 140
        ? `${normalized} A NS2 Innovation apoia empresas e particulares em Angola com serviços e produtos de tecnologia. Peça um orçamento para o seu projecto.`
        : normalized;

    if (complete.length <= 160) {
      return complete;
    }

    const shortened = complete.slice(0, 157).replace(/\s+\S*$/, '');
    return `${shortened}...`;
  }

  private setCanonical(url: string): void {
    const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = url;
      return;
    }

    const link = this.document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    this.document.head.appendChild(link);
  }

  private defaultBreadcrumbs(title: string, canonical: string): readonly BreadcrumbItem[] {
    if (canonical === `${SITE_ORIGIN}/`) {
      return [{ name: SITE_NAME, url: canonical }];
    }

    return [
      { name: 'Início', url: `${SITE_ORIGIN}/` },
      { name: title.split(' | ')[0], url: canonical },
    ];
  }

  private breadcrumbStructuredData(
    items: readonly BreadcrumbItem[],
  ): Readonly<Record<string, unknown>> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }
}
