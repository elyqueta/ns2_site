import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem('ns2-theme');
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    localStorage.removeItem('ns2-theme');
    document.documentElement.classList.remove('dark');
  });

  it('uses the theme selected by the anti-flash script and persists changes', () => {
    document.documentElement.classList.add('dark');

    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');

    service.toggle();

    expect(service.theme()).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('ns2-theme')).toBe('light');
  });

  it('restores a saved theme', () => {
    localStorage.setItem('ns2-theme', 'dark');

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
