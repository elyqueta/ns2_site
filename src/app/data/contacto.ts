export interface ContactLink {
  readonly label: string;
  readonly href: string;
}

import { LocalizedText } from '../i18n/types';

export const contactDetails = {
  address: {
    pt: 'Avenida 21 de Janeiro, Bairro Gamek (próximo da Organizações Chana), n.º s/n, Município de Luanda, Província de Luanda, Angola.',
    en: '21 de Janeiro Avenue, Gamek neighbourhood (near Organizações Chana), no number, Municipality of Luanda, Province of Luanda, Angola.',
  } satisfies LocalizedText,
  phones: [
    { label: '+244 924 666 323', href: 'tel:+244924666323' },
    { label: '+244 935 898 513', href: 'tel:+244935898513' },
  ] satisfies readonly ContactLink[],
  email: { label: 'contacto@ns2innovation.com', href: 'mailto:contacto@ns2innovation.com' },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+21+de+Janeiro+Gamek+Luanda',
} as const;

export const contactPageContent = {
  title: { pt: 'Vamos conversar.', en: 'Let’s talk.' },
  lead: {
    pt: 'Conte-nos o que precisa. A nossa equipa está disponível para ajudar.',
    en: 'Tell us what you need. Our team is ready to help.',
  },
  homeLabel: { pt: 'Início', en: 'Home' },
  breadcrumbLabel: { pt: 'Navegação estrutural', en: 'Breadcrumb' },
  contactTitle: { pt: 'Fale connosco', en: 'Get in touch' },
  whatsappTitle: { pt: 'WhatsApp', en: 'WhatsApp' },
  phoneTitle: { pt: 'Telefone', en: 'Phone' },
  emailTitle: { pt: 'Email', en: 'Email' },
  addressTitle: { pt: 'Morada', en: 'Address' },
  formTitle: { pt: 'Envie-nos uma mensagem', en: 'Send us a message' },
  formDescription: {
    pt: 'Preencha os campos abaixo. A mensagem será preparada no WhatsApp ou no seu programa de email.',
    en: 'Complete the fields below. Your message will be prepared in WhatsApp or your email app.',
  },
  nameLabel: { pt: 'Nome', en: 'Name' },
  companyLabel: { pt: 'Empresa', en: 'Company' },
  phoneLabel: { pt: 'Telefone', en: 'Phone' },
  emailLabel: { pt: 'Email', en: 'Email' },
  interestLabel: { pt: 'Assunto', en: 'Topic' },
  interestPlaceholder: { pt: 'Seleccione um assunto', en: 'Select a topic' },
  messageLabel: { pt: 'Mensagem', en: 'Message' },
  messagePlaceholder: {
    pt: 'Descreva brevemente como podemos ajudar.',
    en: 'Briefly describe how we can help.',
  },
  consentLabel: {
    pt: 'Concordo em usar estes dados apenas para me contactarem.',
    en: 'I agree that these details may only be used to contact me.',
  },
  requiredError: { pt: 'Este campo é obrigatório.', en: 'This field is required.' },
  phoneError: { pt: 'Indique um número de telefone válido.', en: 'Enter a valid phone number.' },
  emailError: { pt: 'Indique um endereço de email válido.', en: 'Enter a valid email address.' },
  messageError: {
    pt: 'A mensagem deve ter pelo menos 10 caracteres.',
    en: 'The message must contain at least 10 characters.',
  },
  consentError: {
    pt: 'É necessário dar consentimento para continuar.',
    en: 'Consent is required to continue.',
  },
  whatsappSubmit: { pt: 'Enviar por WhatsApp', en: 'Send via WhatsApp' },
  emailSubmit: { pt: 'Enviar por email', en: 'Send by email' },
  sendingStatus: { pt: 'A abrir a aplicação escolhida…', en: 'Opening the selected app…' },
  submissionError: {
    pt: 'Não foi possível abrir a aplicação. Tente novamente.',
    en: 'The app could not be opened. Please try again.',
  },
  mapSectionTitle: { pt: 'Como chegar até nós', en: 'How to find us' },
  mapSectionLead: {
    pt: 'Consulte a localização da NS2 Innovation e escolha como iniciar a navegação.',
    en: 'View the NS2 Innovation location and choose how to start navigation.',
  },
  legalNavLabel: { pt: 'Informação legal', en: 'Legal information' },
  privacyLabel: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
  termsLabel: { pt: 'Termos e Condições', en: 'Terms and Conditions' },
} as const;

export const contactInterests: readonly LocalizedText[] = [
  { pt: 'Infraestrutura de redes e servidores', en: 'Network and server infrastructure' },
  { pt: 'Suporte e manutenção', en: 'Support and maintenance' },
  { pt: 'Contratos de TI', en: 'IT support contracts' },
  { pt: 'Consultoria (Construtoria)', en: 'Consulting (Construtoria)' },
  { pt: 'Sistemas e software', en: 'Systems and software' },
  { pt: 'Locação de equipamentos', en: 'Equipment rental' },
  {
    pt: 'Produtos (portáteis, desktops, peças, acessórios, móveis, consumíveis)',
    en: 'Products (laptops, desktops, parts, accessories, furniture, consumables)',
  },
  { pt: 'Websites', en: 'Websites' },
  { pt: 'Loja online', en: 'Online shop' },
  { pt: 'Sistema web', en: 'Web system' },
  { pt: 'Outro', en: 'Other' },
] as const;

export const footerServices = [
  {
    label: { pt: 'Infraestrutura de redes e servidores', en: 'Network and server infrastructure' },
    href: '/servicos/infraestrutura-redes-servidores',
  },
  { label: { pt: 'Suporte remoto', en: 'Remote support' }, href: '/servicos/suporte-remoto' },
  { label: { pt: 'Suporte on site', en: 'On-site support' }, href: '/servicos/suporte-on-site' },
  {
    label: { pt: 'Manutenção de equipamentos', en: 'Equipment maintenance' },
    href: '/servicos/manutencao-equipamentos',
  },
  { label: { pt: 'Contratos de TI', en: 'IT support contracts' }, href: '/servicos/contratos-ti' },
  {
    label: { pt: 'Construtoria (consultoria)', en: 'Construtoria (consulting)' },
    href: '/servicos/construtoria',
  },
  {
    label: { pt: 'Sistemas e software', en: 'Systems and software' },
    href: '/servicos/sistemas-software',
  },
  {
    label: { pt: 'Locação de equipamentos de TI', en: 'IT equipment rental' },
    href: '/servicos/locacao-equipamentos-ti',
  },
] as const;
