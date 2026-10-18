# Fase 00 — Fundações e limpeza

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- AGENTS.md (inteiro)
- arquitectura.md
- design-system.md §3–5
- assets.md §1–2

## Tarefas
1. Instalar dependências: `npm i gsap lenis @fontsource-variable/sora @fontsource-variable/dm-sans`. Confirmar Node ≥ 22.22.3.
2. **Limpar o placeholder do CLI:** apagar `src/app/app.css`; remover `styleUrl` e `title` de exemplo em `app.ts`; substituir `app.html` por `<router-outlet />` (sem `<style>`, sem SVG de exemplo); actualizar `app.spec.ts` para um teste válido.
3. `src/styles.css` (único CSS): `@import 'tailwindcss'`; imports das fontes; `@custom-variant dark`; variáveis dos dois temas (`:root` e `.dark`) conforme `design-system.md §3`; `@theme inline` a expor tokens (`--color-bg`, `--color-surface`, `--color-surface-2`, `--color-line`, `--color-fg`, `--color-fg-muted`, `--color-accent`, `--color-accent-bright`, `--color-on-accent`, fontes `--font-display`/`--font-sans`, escala de texto fluida, raios); `@layer base` com `html{scroll-behavior:auto}`, `body` (bg/fg/fonte), `::selection`, foco visível, `prefers-reduced-motion`.
4. `index.html`: `lang="pt-AO"`, `<title>` base, `meta description`, `theme-color` (por tema), favicon já ligado, script inline mínimo anti-*flash* de tema (ver `arquitectura.md §5`).
5. Criar a estrutura de pastas de `AGENTS.md §6` (com ficheiros vazios apenas onde necessário; sem placeholders inúteis).
6. Serviços *skeleton* em `core/`: `ThemeService`, `I18nService` (só `pt`), `SeoService`, `WhatsappService`, `ContentService` (assinaturas + implementação mínima, SSR-safe). `i18n/pt.ts` com as chaves de navegação e botões globais. Decidir e documentar em `PROGRESSO.md` a abordagem de conteúdo bilingue (`arquitectura.md §4`).
7. Rotas completas de `AGENTS.md §5` com `loadComponent`, `title` e componentes de página **mínimos** (cada um com um `<h1>` vindo do dicionário e `<main>`), mais a rota `ui-kit`. `app.routes.server.ts` com `getPrerenderParams` preparado (listas vazias por enquanto).
8. Copiar para `public/`: confirmar que `public/brand/*` e `public/favicon.ico` fornecidos estão lá (já vêm prontos; **não os recriar**).

## Fora do âmbito
- Gerar componentes de UI, header/footer ou animações (fases seguintes).
- Escrever conteúdo real das páginas.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] `npm run build` passa (com prerender de todas as rotas).
- [ ] `npm start` mostra cada rota com o seu título, sobre fundo escuro com as fontes certas.
- [ ] Existe **um só** `.css` (`find src -name '*.css'` devolve apenas `src/styles.css`).
- [ ] Ao alternar manualmente a classe `dark` no `<html>` os tokens mudam.
- [ ] Favicon visível no separador.
- [ ] Definition of Done de `AGENTS.md §8`.
