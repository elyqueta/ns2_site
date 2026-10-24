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
    // Logos existentes apenas para parceiros com imagem disponível
    expect(parceiros.find((p) => p.slug === 'dell')?.logo).toBe('/images/parceiros/dell.webp');
    expect(parceiros.find((p) => p.slug === 'lenovo')?.logo).toBe('/images/parceiros/lenovo.webp');
    expect(parceiros.find((p) => p.slug === 'apple')?.logo).toBe('/images/parceiros/apple.webp');
    expect(parceiros.find((p) => p.slug === 'samsung')?.logo).toBe('/images/parceiros/samsung.webp');
    expect(parceiros.find((p) => p.slug === 'multilaser')?.logo).toBe(
      '/images/parceiros/multilaser.webp',
    );
    expect(parceiros.find((p) => p.slug === 'hp')?.logo).toBeUndefined();
    expect(parceiros.find((p) => p.slug === 'knup')?.logo).toBeUndefined();
  });

  it('não descreve as marcas fornecidas como parceiras oficiais', () => {
    expect(parceiros.every((partner) => partner.oficial === false)).toBe(true);
  });
});
