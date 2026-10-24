import { parceiros } from './parceiros';

describe('partner content', () => {
  it('provides the seven supplied brands with product-category destinations', () => {
    expect(parceiros.map((partner) => partner.slug)).toEqual([
      'dell',
      'lenovo',
      'hp',
      'apple',
      'samsung',
      'knup',
      'multilaser',
    ]);
    expect(parceiros.every((partner) => partner.href === `/parceiros/${partner.slug}`)).toBe(true);
    expect(
      parceiros.every((partner) =>
        ['notebooks', 'acessorios'].includes(partner.categoriaProdutoSlug),
      ),
    ).toBe(true);
  });

  it('descreve as marcas fornecidas com logos e destinos de categoria de produto', () => {
    expect(parceiros.map((partner) => partner.slug)).toEqual([
      'dell',
      'lenovo',
      'hp',
      'apple',
      'samsung',
      'knup',
      'multilaser',
    ]);
    expect(parceiros.every((partner) => partner.href === `/parceiros/${partner.slug}`)).toBe(true);
    expect(
      parceiros.every((partner) =>
        ['notebooks', 'acessorios'].includes(partner.categoriaProdutoSlug),
      ),
    ).toBe(true);
    expect(parceiros.every((partner) => partner.logo !== undefined)).toBe(true);
  });

  it('não descreve as marcas fornecidas como parceiras oficiais', () => {
    expect(parceiros.every((partner) => partner.oficial === false)).toBe(true);
  });
});
