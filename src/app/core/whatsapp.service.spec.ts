import { WhatsappService } from './whatsapp.service';

describe('WhatsappService', () => {
  const service = new WhatsappService();

  it('encodes WhatsApp messages with Portuguese characters', () => {
    expect(service.createWhatsappUrl('Olá! Quero pedir um orçamento.')).toBe(
      'https://wa.me/244924666323?text=Ol%C3%A1!%20Quero%20pedir%20um%20or%C3%A7amento.',
    );
  });

  it('builds the contact message with an optional company', () => {
    expect(
      service.buildContactMessage({
        name: 'Ana',
        company: 'NS2',
        interest: 'Websites',
        phone: '+244 900 000 000',
        email: '',
        message: 'Preciso de um orçamento.',
      }),
    ).toBe(
      'Olá! Sou Ana da empresa NS2.\nInteresse: Websites\nTelefone: +244 900 000 000\nPreciso de um orçamento.',
    );
  });

  it('includes email only in the email version of the message', () => {
    const details = {
      name: 'Ana',
      company: '',
      interest: 'Websites',
      phone: '+244 900 000 000',
      email: 'ana@example.com',
      message: 'Preciso de um orçamento.',
    };
    expect(service.buildContactMessage(details)).not.toContain('Email:');
    expect(service.buildContactMessage(details, true)).toContain('Email: ana@example.com');
  });

  it('encodes mailto subject and body', () => {
    expect(service.createMailtoUrl('contacto@example.com', 'Orçamento — website', 'Olá!')).toBe(
      'mailto:contacto@example.com?subject=Or%C3%A7amento+%E2%80%94+website&body=Ol%C3%A1%21',
    );
  });
});
