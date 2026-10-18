import { DataPtPipe } from './data-pt.pipe';
import { KzPipe } from './kz.pipe';

describe('UI formatting pipes', () => {
  it('formats amounts in Angolan kwanza', () => {
    expect(new KzPipe().transform(0)).toContain('Kz');
  });

  it('formats dates in Portuguese', () => {
    expect(new DataPtPipe().transform(new Date(2026, 9, 18))).toBe('18 de Outubro de 2026');
  });

  it('rejects invalid values rather than hiding them', () => {
    expect(() => new KzPipe().transform(Number.NaN)).toThrow(RangeError);
    expect(() => new DataPtPipe().transform('not-a-date')).toThrow(RangeError);
  });
});
