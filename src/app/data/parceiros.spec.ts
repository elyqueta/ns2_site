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

  it('does not describe the supplied brands as official partners', () => {
    expect(parceiros.every((partner) => partner.oficial === false)).toBe(true);
    expect(parceiros.every((partner) => partner.logo === undefined)).toBe(true);
  });
});
