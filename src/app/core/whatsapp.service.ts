import { Injectable } from '@angular/core';

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
}
