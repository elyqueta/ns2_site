import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import type { Map as MapLibreMap, Marker as MapLibreMarker } from 'maplibre-gl';
import { ContactMapConfig, mapWorkerUrl } from '../../../data/map.config';
import { Icon } from '../icon/icon';

export interface ContactMapCopy {
  readonly sectionTitle: string;
  readonly sectionLead: string;
  readonly mapLabel: string;
  readonly locationButton: string;
  readonly locationButtonLabel: string;
  readonly zoomIn: string;
  readonly zoomOut: string;
  readonly recenter: string;
  readonly originLabel: string;
  readonly originPlaceholder: string;
  readonly originHelp: string;
  readonly approximationNotice: string;
  readonly googleMapsLabel: string;
  readonly mapLoading: string;
  readonly mapUnavailable: string;
  readonly locationLoading: string;
  readonly locationSuccess: string;
  readonly permissionDenied: string;
  readonly positionUnavailable: string;
  readonly locationTimeout: string;
  readonly geolocationUnavailable: string;
  readonly officePopup: string;
  readonly straightDistanceLabel: string;
  readonly straightDistanceNote: string;
}

type MapStatus = 'loading' | 'ready' | 'unavailable';
type LocationStatus =
  'idle' | 'loading' | 'success' | 'denied' | 'unavailable' | 'timeout' | 'unsupported';

@Component({
  selector: 'app-contact-map',
  imports: [Icon],
  templateUrl: './contact-map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMap {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly mapElement = viewChild<ElementRef<HTMLElement>>('mapElement');
  private map: MapLibreMap | null = null;
  private officeMarker: MapLibreMarker | null = null;
  private visitorMarker: MapLibreMarker | null = null;
  private maplibre: typeof import('maplibre-gl') | null = null;
  private observer: IntersectionObserver | null = null;
  private mapLoading = false;
  private mapLoadTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly config = input.required<ContactMapConfig>();
  readonly copy = input.required<ContactMapCopy>();
  readonly mapStatus = signal<MapStatus>('loading');
  readonly locationStatus = signal<LocationStatus>('idle');
  readonly manualOrigin = signal('');
  readonly straightDistanceKm = signal<number | null>(null);
  readonly straightDistanceLabel = computed(() => {
    const distance = this.straightDistanceKm();
    if (distance === null) {
      return '';
    }
    const formatted = new Intl.NumberFormat('pt-AO', { maximumFractionDigits: 1 }).format(distance);
    return `${formatted} km`;
  });

  readonly phoneUrl = computed(() => `tel:${this.config().phone.replace(/[^\d+]/g, '')}`);
  readonly googleMapsUrl = computed(() => {
    const { latitude, longitude } = this.config();
    const origin = this.manualOrigin().trim();
    const destination = `${latitude},${longitude}`;
    const originParameter = origin ? `&origin=${encodeURIComponent(origin)}` : '';
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}${originParameter}`;
  });

  private readonly renderCallback = afterNextRender(() => {
    const host = this.mapElement()?.nativeElement;
    const view = this.document.defaultView;
    if (!host || !view) {
      this.mapStatus.set('unavailable');
      return;
    }

    if ('IntersectionObserver' in view) {
      this.observer = new view.IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            void this.loadMap();
            this.observer?.disconnect();
            this.observer = null;
          }
        },
        { rootMargin: '160px' },
      );
      this.observer.observe(host);
    } else {
      void this.loadMap();
    }
  });

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.visitorMarker?.remove();
      this.officeMarker?.remove();
      this.map?.remove();
      this.map = null;
      this.clearMapLoadTimeout();
    });
  }

  updateOrigin(event: Event): void {
    const target = event.target;
    const Input = this.document.defaultView?.HTMLInputElement;
    if (Input && target instanceof Input) {
      this.manualOrigin.set(target.value);
    }
  }

  requestLocation(): void {
    const view = this.document.defaultView;
    if (!view?.isSecureContext || !view.navigator.geolocation || !this.map) {
      this.locationStatus.set('unsupported');
      return;
    }

    this.locationStatus.set('loading');
    view.navigator.geolocation.getCurrentPosition(
      (position) => this.handleLocation(position),
      (error) => this.handleLocationError(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
    );
  }

  zoomIn(): void {
    this.map?.zoomIn({ duration: this.reducedMotion() ? 0 : 250 });
  }

  zoomOut(): void {
    this.map?.zoomOut({ duration: this.reducedMotion() ? 0 : 250 });
  }

  recenter(): void {
    const { latitude, longitude } = this.config();
    this.map?.easeTo({
      center: [longitude, latitude],
      zoom: 14,
      duration: this.reducedMotion() ? 0 : 700,
    });
  }

  private distanceInKm(fromLat: number, fromLon: number, toLat: number, toLon: number): number {
    const earthRadiusKm = 6371;
    const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;
    const latitudeDelta = toRadians(toLat - fromLat);
    const longitudeDelta = toRadians(toLon - fromLon);
    const haversine =
      Math.sin(latitudeDelta / 2) ** 2 +
      Math.cos(toRadians(fromLat)) * Math.cos(toRadians(toLat)) * Math.sin(longitudeDelta / 2) ** 2;

    return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
  }

  private async loadMap(): Promise<void> {
    if (this.mapLoading || this.map) {
      return;
    }
    this.mapLoading = true;

    try {
      const maplibre = await import('maplibre-gl');
      this.maplibre = maplibre;
      const host = this.mapElement()?.nativeElement;
      if (!host) {
        this.mapStatus.set('unavailable');
        return;
      }

      const { latitude, longitude, styleUrl } = this.config();
      maplibre.setWorkerUrl(new URL(mapWorkerUrl, this.document.baseURI).href);
      const map = new maplibre.Map({
        container: host,
        style: styleUrl,
        center: [longitude, latitude],
        zoom: 14,
        cooperativeGestures: true,
        attributionControl: { compact: true },
      });
      map.addControl(new maplibre.ScaleControl({ maxWidth: 120, unit: 'metric' }), 'bottom-left');
      this.map = map;

      map.once('load', () => {
        this.clearMapLoadTimeout();
        this.addOfficeMarker(maplibre);
        this.mapStatus.set('ready');
      });
      map.on('error', () => {
        if (this.map === map && !map.isStyleLoaded()) {
          this.clearMapLoadTimeout();
          this.mapStatus.set('unavailable');
        }
      });
      this.mapLoadTimeout = setTimeout(() => {
        if (this.map === map && this.mapStatus() === 'loading') {
          this.mapStatus.set('unavailable');
          map.remove();
          this.map = null;
        }
      }, 15000);
    } catch {
      this.mapStatus.set('unavailable');
    } finally {
      this.mapLoading = false;
    }
  }

  private clearMapLoadTimeout(): void {
    if (this.mapLoadTimeout !== null) {
      clearTimeout(this.mapLoadTimeout);
      this.mapLoadTimeout = null;
    }
  }

  private addOfficeMarker(maplibre: typeof import('maplibre-gl')): void {
    const map = this.map;
    if (!map) {
      return;
    }
    const { latitude, longitude, name, address, phone } = this.config();
    const content = this.document.createElement('div');
    const title = this.document.createElement('strong');
    const addressText = this.document.createElement('p');
    const phoneLink = this.document.createElement('a');
    content.className = 'grid gap-1 text-sm leading-relaxed';
    title.className = 'font-display text-base font-semibold text-fg';
    addressText.className = 'm-0 text-fg-muted';
    phoneLink.className = 'mt-1 inline-flex min-h-11 items-center font-semibold text-accent-bright';
    title.textContent = name;
    addressText.textContent = address;
    phoneLink.href = `tel:${phone.replace(/[^\d+]/g, '')}`;
    phoneLink.textContent = phone;
    content.append(title, addressText, phoneLink);

    const popup = new maplibre.Popup({
      offset: 28,
      closeButton: true,
      className: 'ns2-contact-map-popup',
      maxWidth: 'min(18rem, calc(100vw - 3rem))',
    }).setDOMContent(content);
    const marker = new maplibre.Marker({
      element: this.createMarkerElement(false),
      anchor: 'bottom',
    })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map);
    this.officeMarker = marker;
  }

  private handleLocation(position: GeolocationPosition): void {
    const map = this.map;
    if (!map) {
      this.locationStatus.set('unavailable');
      return;
    }

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const maplibre = this.maplibre;
    if (!maplibre) {
      this.locationStatus.set('unavailable');
      return;
    }
    this.visitorMarker?.remove();
    this.visitorMarker = new maplibre.Marker({
      element: this.createMarkerElement(true),
      anchor: 'bottom',
    })
      .setLngLat([longitude, latitude])
      .addTo(map);
    this.manualOrigin.set(`${latitude},${longitude}`);
    const { latitude: officeLatitude, longitude: officeLongitude } = this.config();
    this.straightDistanceKm.set(
      this.distanceInKm(latitude, longitude, officeLatitude, officeLongitude),
    );
    const bounds = new maplibre.LngLatBounds()
      .extend([longitude, latitude])
      .extend([officeLongitude, officeLatitude]);
    map.fitBounds(bounds, {
      padding: 56,
      maxZoom: 14,
      duration: this.reducedMotion() ? 0 : 800,
    });
    this.locationStatus.set('success');
  }

  private handleLocationError(error: GeolocationPositionError): void {
    if (error.code === error.PERMISSION_DENIED) {
      this.locationStatus.set('denied');
    } else if (error.code === error.TIMEOUT) {
      this.locationStatus.set('timeout');
    } else {
      this.locationStatus.set('unavailable');
    }
  }

  private createMarkerElement(visitor: boolean): HTMLElement {
    const marker = this.document.createElement('div');
    marker.className = visitor
      ? 'grid size-10 place-items-center text-accent-bright drop-shadow-lg'
      : 'grid size-12 place-items-center text-accent-bright drop-shadow-lg';
    marker.setAttribute('aria-hidden', 'true');
    const svg = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 32 40');
    svg.setAttribute('width', visitor ? '28' : '36');
    svg.setAttribute('height', visitor ? '35' : '40');
    if (visitor) {
      const circle = this.document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '16');
      circle.setAttribute('cy', '16');
      circle.setAttribute('r', '9');
      circle.setAttribute('fill', 'currentColor');
      circle.setAttribute('stroke', 'white');
      circle.setAttribute('stroke-width', '3');
      svg.append(circle);
    } else {
      const path = this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute(
        'd',
        'M16 1C7.7 1 1 7.7 1 16c0 11 15 23 15 23s15-12 15-23C31 7.7 24.3 1 16 1Z',
      );
      path.setAttribute('fill', 'currentColor');
      const center = this.document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      center.setAttribute('cx', '16');
      center.setAttribute('cy', '16');
      center.setAttribute('r', '5');
      center.setAttribute('fill', 'var(--surface)');
      svg.append(path, center);
    }
    marker.append(svg);
    return marker;
  }

  private reducedMotion(): boolean {
    return (
      this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }
}
