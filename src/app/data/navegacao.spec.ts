import { headerNavigation, primaryNavigation } from './navegacao';
import { pt } from '../i18n/pt';
import { en } from '../i18n/en';

describe('navegação', () => {
  it('todas as rotas de primaryNavigation aparecem exactamente uma vez em headerNavigation', () => {
    const primarySlugs = primaryNavigation.map((item) => item.href);
    const headerSlugs = headerNavigation.flatMap((item) =>
      item.kind === 'link' ? [item.href] : item.children.map((child) => child.href),
    );

    expect(headerSlugs.sort()).toEqual(primarySlugs.sort());
    expect(headerSlugs.length).toBe(primarySlugs.length);
  });

  it('todas as chaves de navegação existem em pt e en', () => {
    const allNavKeys = headerNavigation.flatMap((item) =>
      item.kind === 'link'
        ? [item.label]
        : [item.label, ...item.children.map((child) => child.label)],
    );

    for (const key of allNavKeys) {
      expect(pt.nav[key as keyof typeof pt.nav]).toBeDefined();
      expect(en.nav[key as keyof typeof en.nav]).toBeDefined();
    }
  });

  it('chaves de ações do dropdown existem em pt e en', () => {
    expect(pt.actions.openSubmenu).toBeDefined();
    expect(pt.actions.closeSubmenu).toBeDefined();
    expect(en.actions.openSubmenu).toBeDefined();
    expect(en.actions.closeSubmenu).toBeDefined();
  });
});
