export interface ContactLink {
  readonly label: string;
  readonly href: string;
}

export const contactDetails = {
  address:
    'Avenida 21 de Janeiro, Bairro Gamek (próximo da Organizações Chana), n.º s/n, Município de Luanda, Província de Luanda, Angola.',
  phones: [
    { label: '+244 924 666 323', href: 'tel:+244924666323' },
    { label: '+244 935 898 513', href: 'tel:+244935898513' },
  ] satisfies readonly ContactLink[],
  email: { label: 'contacto@ns2innovation.com', href: 'mailto:contacto@ns2innovation.com' },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+21+de+Janeiro+Gamek+Luanda',
} as const;

export const contactPageContent = {
  title: 'Vamos conversar.',
  lead: 'Conte-nos o que precisa. A nossa equipa está disponível para ajudar.',
  homeLabel: 'Início',
  breadcrumbLabel: 'Navegação estrutural',
  contactTitle: 'Fale connosco',
  whatsappTitle: 'WhatsApp',
  phoneTitle: 'Telefone',
  emailTitle: 'Email',
  addressTitle: 'Morada',
  formTitle: 'Envie-nos uma mensagem',
  formDescription:
    'Preencha os campos abaixo. A mensagem será preparada no WhatsApp ou no seu programa de email.',
  nameLabel: 'Nome',
  companyLabel: 'Empresa',
  phoneLabel: 'Telefone',
  emailLabel: 'Email',
  interestLabel: 'Assunto',
  interestPlaceholder: 'Seleccione um assunto',
  messageLabel: 'Mensagem',
  messagePlaceholder: 'Descreva brevemente como podemos ajudar.',
  consentLabel: 'Concordo em usar estes dados apenas para me contactarem.',
  requiredError: 'Este campo é obrigatório.',
  phoneError: 'Indique um número de telefone válido.',
  emailError: 'Indique um endereço de email válido.',
  messageError: 'A mensagem deve ter pelo menos 10 caracteres.',
  consentError: 'É necessário dar consentimento para continuar.',
  whatsappSubmit: 'Enviar por WhatsApp',
  emailSubmit: 'Enviar por email',
  sendingStatus: 'A abrir a aplicação escolhida…',
  submissionError: 'Não foi possível abrir a aplicação. Tente novamente.',
  mapSectionTitle: 'Como chegar até nós',
  mapSectionLead: 'Consulte a localização da NS2 Innovation e escolha como iniciar a navegação.',
  legalNavLabel: 'Informação legal',
  privacyLabel: 'Política de Privacidade',
  termsLabel: 'Termos e Condições',
} as const;

export const contactInterests = [
  'Infraestrutura de redes e servidores',
  'Suporte e manutenção',
  'Contratos de TI',
  'Consultoria (Construtoria)',
  'Sistemas e software',
  'Locação de equipamentos',
  'Produtos (portáteis, desktops, peças, acessórios, móveis, consumíveis)',
  'Websites',
  'Loja online',
  'Sistema web',
  'Outro',
] as const;

export const footerServices = [
  {
    label: 'Infraestrutura de redes e servidores',
    href: '/servicos/infraestrutura-redes-servidores',
  },
  { label: 'Suporte remoto', href: '/servicos/suporte-remoto' },
  { label: 'Suporte on site', href: '/servicos/suporte-on-site' },
  { label: 'Manutenção de equipamentos', href: '/servicos/manutencao-equipamentos' },
  { label: 'Contratos de TI', href: '/servicos/contratos-ti' },
  { label: 'Construtoria (consultoria)', href: '/servicos/construtoria' },
  { label: 'Sistemas e software', href: '/servicos/sistemas-software' },
  { label: 'Locação de equipamentos de TI', href: '/servicos/locacao-equipamentos-ti' },
] as const;
