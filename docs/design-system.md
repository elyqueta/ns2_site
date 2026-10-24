# Design System — NS2 Innovation

## Tokens tipográficos (`src/styles.css`, bloco `@theme`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-display` | `clamp(2.5rem, 5.5vw, 5rem)` | Apenas no `<h1>` do Hero da Home |
| `--text-display--line-height` | `1.05` | Linha do texto-display |
| `--text-page` | `clamp(2.25rem, 4.5vw, 4rem)` | Títulos de página (`PageHero`) |
| `--text-page--line-height` | `1.08` | Linha dos títulos de página |
| `--text-h1` | `clamp(2.25rem, 4.5vw, 4rem)` | Títulos principais (`<h1>`) |
| `--text-h1--line-height` | `1.08` | Linha dos h1 |
| `--text-h2` | `clamp(1.75rem, 3.4vw, 3rem)` | Títulos de secção (`<h2>`) |
| `--text-h2--line-height` | `1.12` | Linha dos h2 |
| `--text-h3` | `clamp(1.125rem, 1.7vw, 1.5rem)` | Títulos de cartão (`<h3>`) |
| `--text-h3--line-height` | `1.2` | Linha dos h3 |
| `--text-lead` | `clamp(1.125rem, 1.6vw, 1.375rem)` | Texto de destaque (lead) |
| `--text-body` | `1rem` | Texto corrido |
| `--text-small` | `0.875rem` | Texto auxiliar |

### Regras de uso
- **`text-display` só no hero da Home** (`src/app/pages/home/hero/hero.html`). Não usar em cabeçalhos de página.
- **`text-page` para todos os títulos de página** (`PageHero` em `shared/ui/page-hero/page-hero.html`, classes `text-page` + `leading-[1.08]`).
- Texto corrido e `text-lead` não mudam.
- No UI kit (`src/app/pages/ui-kit/ui-kit.html`), o `<h1>` do cabeçalho usa `text-page`; os restantes usos de `text-display` ficam apenas na amostra da secção "Tipografia".

## Navbar agrupada

### Estrutura (6 entradas)

| Entrada | Tipo | Destino / filhos |
|---------|------|------------------|
| Início | link | `/` |
| Sobre | link | `/sobre` |
| Soluções | dropdown | Serviços `/servicos` · Produtos `/produtos` · Desenvolvimento web `/desenvolvimento-web` |
| Trabalho | dropdown | Projectos `/projectos` · Notícias `/noticias` |
| Parceiros | link | `/parceiros` |
| Contacto | link | `/contacto` |

### Implementação
- `src/app/data/navegacao.ts`: `primaryNavigation` (lista plana, para rodapé) e `headerNavigation` (agrupada, para header).
- `src/app/shared/layout/header/header.ts` / `header.html`: renderiza links diretos e `<app-nav-dropdown>` para grupos.
- `src/app/shared/layout/header/nav-dropdown/`: componente `NavDropdown` com animação GSAP (fade + translateY), acessível por teclado (↑/↓, Escape) e clique.
- `src/app/shared/layout/mobile-menu/mobile-menu.ts` / `.html`: mostra "Soluções" e "Trabalho" como subtítulos não clicáveis, seguidos dos filhos como links.
- O botão "Pedir orçamento" foi removido da navbar (desktop e móvel); mantém-se o FAB de WhatsApp, o hero e as `cta-band`.
- Em desktop, a navbar aparece a partir de `lg:` (≥1024 px); abaixo disso, menu móvel.

## Ícones

- Novo ícone `chevron-down` adicionado a `src/app/shared/ui/icon/icon.html` e `icon.ts`, com tradução em `uiKit.icons` (pt/en).
