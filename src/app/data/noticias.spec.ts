import { newsPageContent, noticias } from './noticias';

describe('news content', () => {
  it('provides the three model articles in newest-first order', () => {
    expect(noticias.map((article) => article.slug)).toEqual([
      'site-ou-landing-page-qual-escolher',
      'cabeamento-estruturado-o-que-verificar',
      'manutencao-preventiva-evita-paragens',
    ]);
    expect(new Date(noticias[0].data).getTime()).toBeGreaterThan(
      new Date(noticias[1].data).getTime(),
    );
    expect(new Date(noticias[1].data).getTime()).toBeGreaterThan(
      new Date(noticias[2].data).getTime(),
    );
  });

  it('uses only supplied categories and safe typed content blocks', () => {
    expect(new Set(noticias.map((article) => article.categoria.pt))).toEqual(
      new Set(['Web e sistemas', 'Dicas de TI']),
    );
    expect(noticias.every((article) => article.corpo.length > 0)).toBe(true);
    expect(newsPageContent.copyError.pt).toContain('Não foi possível copiar');
  });
});
