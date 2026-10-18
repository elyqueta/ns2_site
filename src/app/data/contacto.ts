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
