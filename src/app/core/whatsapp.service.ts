import { Injectable } from '@angular/core';

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
  private readonly phoneNumber = '244924666323';

  createWhatsappUrl(message: string): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  createMailtoUrl(email: string, subject: string, message: string): string {
    const params = new URLSearchParams({ subject, body: message });
    return `mailto:${email}?${params.toString()}`;
  }

  buildContactMessage(details: ContactMessageDetails, includeEmail = false): string {
    const company = details.company ? ` da empresa ${details.company}` : '';
    const emailLine = includeEmail && details.email ? [`Email: ${details.email}`] : [];
    return [
      `Olá! Sou ${details.name}${company}.`,
      `Interesse: ${details.interest}`,
      `Telefone: ${details.phone}`,
      ...emailLine,
      details.message,
    ].join('\n');
  }
}
