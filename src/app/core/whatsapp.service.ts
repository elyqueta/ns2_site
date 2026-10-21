import { Injectable, inject } from '@angular/core';
import { I18nService } from './i18n.service';

export interface ContactMessageDetails {
  readonly name: string;
  readonly company: string;
  readonly interest: string;
  readonly phone: string;
  readonly email: string;
  readonly message: string;
}

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly i18n = inject(I18nService);
  private readonly phoneNumber = '244924666323';

  createWhatsappUrl(message: string): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  createMailtoUrl(email: string, subject: string, message: string): string {
    const params = new URLSearchParams({ subject, body: message });
    return `mailto:${email}?${params.toString()}`;
  }

  buildContactMessage(details: ContactMessageDetails, includeEmail = false): string {
    const english = this.i18n.lang() === 'en';
    const company = details.company ? ` da empresa ${details.company}` : '';
    const englishCompany = details.company ? ` at ${details.company}` : '';
    const emailLine = includeEmail && details.email ? [`Email: ${details.email}`] : [];
    return [
      english
        ? `Hello! My name is ${details.name}${englishCompany}.`
        : `Olá! Sou ${details.name}${company}.`,
      `${english ? 'Interest' : 'Interesse'}: ${details.interest}`,
      `${english ? 'Phone' : 'Telefone'}: ${details.phone}`,
      ...emailLine,
      details.message,
    ].join('\n');
  }
}
