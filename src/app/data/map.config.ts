import { contactDetails } from './contacto';
import { LocalizedText } from '../i18n/types';

export interface ContactMapConfig {
  readonly name: string;
  readonly address: LocalizedText;
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
  sectionTitle: { pt: 'Como chegar até nós', en: 'How to find us' },
  sectionLead: {
    pt: 'Veja a localização e abra o Google Maps para calcular a rota.',
    en: 'View the location and open Google Maps to plan your route.',
  },
  mapLabel: {
    pt: 'Mapa interactivo da localização da NS2 Innovation',
    en: 'Interactive map showing the NS2 Innovation location',
  },
  locationButton: { pt: 'Usar a minha localização', en: 'Use my location' },
  locationButtonLabel: {
    pt: 'Usar a minha localização para iniciar a navegação',
    en: 'Use my location to start navigation',
  },
  zoomIn: { pt: 'Aumentar o zoom do mapa', en: 'Zoom in on the map' },
  zoomOut: { pt: 'Diminuir o zoom do mapa', en: 'Zoom out on the map' },
  recenter: {
    pt: 'Recentralizar o mapa na NS2 Innovation',
    en: 'Recenter the map on NS2 Innovation',
  },
  originLabel: { pt: 'Ponto de partida (opcional)', en: 'Starting point (optional)' },
  originPlaceholder: {
    pt: 'Escreva uma morada, bairro ou local',
    en: 'Enter an address, neighbourhood or place',
  },
  originHelp: {
    pt: 'Escreva pelo menos 3 caracteres e escolha uma sugestão, ou envie o texto directamente ao Google Maps.',
    en: 'Enter at least 3 characters and choose a suggestion, or send the text directly to Google Maps.',
  },
  originSearchLoading: { pt: 'A procurar locais…', en: 'Searching for places…' },
  originSearchEmpty: {
    pt: 'Não encontrámos sugestões. Pode continuar a escrever ou abrir o Google Maps.',
    en: 'No suggestions found. Keep typing or open Google Maps.',
  },
  originSearchUnavailable: {
    pt: 'A pesquisa de locais está indisponível. Pode continuar a escrever ou abrir o Google Maps.',
    en: 'Place search is unavailable. Keep typing or open Google Maps.',
  },
  originSearchNotConfigured: {
    pt: 'As sugestões ainda não estão configuradas. Pode escrever o local e abrir o Google Maps.',
    en: 'Suggestions are not configured yet. Enter a place and open Google Maps.',
  },
  googleMapsAttribution: { pt: 'Google Maps', en: 'Google Maps' },
  approximationNotice: {
    pt: 'O marcador usa coordenadas aproximadas da zona do Gamek; confirme o ponto exacto antes de se deslocar.',
    en: 'The marker uses approximate coordinates for Gamek; confirm the exact point before travelling.',
  },
  googleMapsLabel: { pt: 'Traçar rota no Google Maps', en: 'Get directions in Google Maps' },
  mapLoading: { pt: 'A carregar o mapa…', en: 'Loading map…' },
  mapUnavailable: {
    pt: 'Não foi possível carregar o mapa. Verifique a ligação à internet.',
    en: 'The map could not be loaded. Check your internet connection.',
  },
  locationLoading: { pt: 'A obter a sua localização…', en: 'Getting your location…' },
  locationSuccess: {
    pt: 'Localização obtida. Abra o Google Maps para ver a rota até ao escritório.',
    en: 'Location found. Open Google Maps to see the route to the office.',
  },
  permissionDenied: {
    pt: 'A permissão de localização foi recusada. Pode indicar um ponto de partida ou abrir o Google Maps.',
    en: 'Location permission was denied. Enter a starting point or open Google Maps.',
  },
  positionUnavailable: {
    pt: 'Não foi possível determinar a sua localização. Pode indicar um ponto de partida ou abrir o Google Maps.',
    en: 'Your location could not be determined. Enter a starting point or open Google Maps.',
  },
  locationTimeout: {
    pt: 'A localização demorou demasiado tempo. Tente novamente ou indique um ponto de partida.',
    en: 'Getting your location took too long. Try again or enter a starting point.',
  },
  geolocationUnavailable: {
    pt: 'A localização do navegador não está disponível. Use HTTPS ou localhost, ou indique um ponto de partida.',
    en: 'Browser location is unavailable. Use HTTPS or localhost, or enter a starting point.',
  },
  officePopup: { pt: 'Localização aproximada do escritório', en: 'Approximate office location' },
  straightDistanceLabel: {
    pt: 'Distância directa aproximada',
    en: 'Approximate straight-line distance',
  },
  straightDistanceNote: {
    pt: 'Calculada em linha recta até ao marcador. A distância por estrada pode ser diferente.',
    en: 'Calculated in a straight line to the marker. Road distance may differ.',
  },
} as const;
