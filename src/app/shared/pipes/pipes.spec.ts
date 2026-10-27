import { TestBed } from '@angular/core/testing';
import { DataPtPipe } from './data-pt.pipe';
import { KzPipe } from './kz.pipe';

describe('UI formatting pipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPtPipe, KzPipe],
    });
  });

  it('formats amounts in Angolan kwanza', () => {
    expect(TestBed.inject(KzPipe).transform(0)).toContain('Kz');
  });

  it('formats dates in Portuguese', () => {
    expect(TestBed.inject(DataPtPipe).transform(new Date(2026, 9, 18))).toBe(
      '18 de Outubro de 2026',
    );
  });

  it('rejects invalid values rather than hiding them', () => {
    expect(() => TestBed.inject(KzPipe).transform(Number.NaN)).toThrow(RangeError);
    expect(() => TestBed.inject(DataPtPipe).transform('not-a-date')).toThrow(RangeError);
  });
});
