import { contactDetails } from './contacto';

export interface ContactMapConfig {
  readonly name: string;
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly phone: string;
  readonly styleUrl: string;
}

export const contactMapConfig: ContactMapConfig = {
  name: 'NS2 Innovation',
  address: contactDetails.address,
  latitude: -8.891234,
  longitude: 13.2043788,
  phone: '+244 924 666 323',
  styleUrl: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
};

export const mapWorkerUrl = '/maplibre-gl-worker.mjs';

export const contactMapContent = {
  sectionTitle: 'Como chegar até nós',
  sectionLead: 'Veja a localização e abra o Google Maps para calcular a rota.',
  mapLabel: 'Mapa interactivo da localização da NS2 Innovation',
  locationButton: 'Usar a minha localização',
  locationButtonLabel: 'Usar a minha localização para iniciar a navegação',
  zoomIn: 'Aumentar o zoom do mapa',
  zoomOut: 'Diminuir o zoom do mapa',
  recenter: 'Recentralizar o mapa na NS2 Innovation',
  originLabel: 'Ponto de partida (opcional)',
  originPlaceholder: 'Escreva uma morada, bairro ou local',
  originHelp:
    'Escreva pelo menos 3 caracteres e escolha uma sugestão, ou envie o texto directamente ao Google Maps.',
  originSearchLoading: 'A procurar locais…',
  originSearchEmpty: 'Não encontrámos sugestões. Pode continuar a escrever ou abrir o Google Maps.',
  originSearchUnavailable:
    'A pesquisa de locais está indisponível. Pode continuar a escrever ou abrir o Google Maps.',
  originSearchNotConfigured:
    'As sugestões ainda não estão configuradas. Pode escrever o local e abrir o Google Maps.',
  googleMapsAttribution: 'Google Maps',
  approximationNotice:
    'O marcador usa coordenadas aproximadas da zona do Gamek; confirme o ponto exacto antes de se deslocar.',
  googleMapsLabel: 'Traçar rota no Google Maps',
  mapLoading: 'A carregar o mapa…',
  mapUnavailable: 'Não foi possível carregar o mapa. Verifique a ligação à internet.',
  locationLoading: 'A obter a sua localização…',
  locationSuccess: 'Localização obtida. Abra o Google Maps para ver a rota até ao escritório.',
  permissionDenied:
    'A permissão de localização foi recusada. Pode indicar um ponto de partida ou abrir o Google Maps.',
  positionUnavailable:
    'Não foi possível determinar a sua localização. Pode indicar um ponto de partida ou abrir o Google Maps.',
  locationTimeout:
    'A localização demorou demasiado tempo. Tente novamente ou indique um ponto de partida.',
  geolocationUnavailable:
    'A localização do navegador não está disponível. Use HTTPS ou localhost, ou indique um ponto de partida.',
  officePopup: 'Localização aproximada do escritório',
  straightDistanceLabel: 'Distância directa aproximada',
  straightDistanceNote:
    'Calculada em linha recta até ao marcador. A distância por estrada pode ser diferente.',
} as const;
