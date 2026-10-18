import { Injectable, signal } from '@angular/core';
import { pt, TranslationKey } from '../i18n/pt';

const translations: Record<TranslationKey, string> = {
  'nav.home': pt.nav.home,
  'nav.about': pt.nav.about,
  'nav.services': pt.nav.services,
  'nav.products': pt.nav.products,
  'nav.web': pt.nav.web,
  'nav.projects': pt.nav.projects,
  'nav.news': pt.nav.news,
  'nav.partners': pt.nav.partners,
  'nav.contact': pt.nav.contact,
  'actions.requestQuote': pt.actions.requestQuote,
  'actions.contact': pt.actions.contact,
  'actions.whatsapp': pt.actions.whatsapp,
  'actions.email': pt.actions.email,
  'actions.learnMore': pt.actions.learnMore,
  'actions.backToTop': pt.actions.backToTop,
  'pages.home': pt.pages.home,
  'pages.about': pt.pages.about,
  'pages.services': pt.pages.services,
  'pages.serviceDetail': pt.pages.serviceDetail,
  'pages.products': pt.pages.products,
  'pages.web': pt.pages.web,
  'pages.projects': pt.pages.projects,
  'pages.news': pt.pages.news,
  'pages.newsDetail': pt.pages.newsDetail,
  'pages.partners': pt.pages.partners,
  'pages.partnerDetail': pt.pages.partnerDetail,
  'pages.contact': pt.pages.contact,
  'pages.privacy': pt.pages.privacy,
  'pages.terms': pt.pages.terms,
  'pages.notFound': pt.pages.notFound,
  'pages.uiKit': pt.pages.uiKit,
  'seo.home': pt.seo.home,
  'seo.about': pt.seo.about,
  'seo.services': pt.seo.services,
  'seo.serviceDetail': pt.seo.serviceDetail,
  'seo.products': pt.seo.products,
  'seo.web': pt.seo.web,
  'seo.projects': pt.seo.projects,
  'seo.news': pt.seo.news,
  'seo.newsDetail': pt.seo.newsDetail,
  'seo.partners': pt.seo.partners,
  'seo.partnerDetail': pt.seo.partnerDetail,
  'seo.contact': pt.seo.contact,
  'seo.privacy': pt.seo.privacy,
  'seo.terms': pt.seo.terms,
  'seo.notFound': pt.seo.notFound,
  'seo.uiKit': pt.seo.uiKit,
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<'pt'>('pt');

  t(key: TranslationKey): string {
    return translations[key];
  }
}
