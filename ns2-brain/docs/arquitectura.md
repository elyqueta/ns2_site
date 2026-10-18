# Arquitectura

## 1. Princípios
- Estático hoje, backoffice amanhã: o conteúdo vive em `src/app/data/*.ts` tipado; as páginas consomem-no via um serviço fino (`ContentService`) que devolve *signals*/valores. No futuro troca-se a fonte por API sem tocar nos componentes.
- Prerender de todas as rotas. Conteúdo visível sem JavaScript; animações são *progressive enhancement*.
- Separação rígida: `.ts` (lógica) / `.html` (marcação) / `styles.css` (único, tokens).

## 2. Serviços `core/`
| Serviço | Responsabilidade |
|---|---|
| `ThemeService` | `theme = signal<'dark'\|'light'>`; lê/escreve `localStorage('ns2-theme')`; aplica classe `dark` ao `<html>`; só no browser. |
| `I18nService` | `lang = signal<'pt'\|'en'>`, `t(key)`, pipe `t`. Na Fase 00–12 só `pt`. Ver §4. |
| `AnimationService` | Regista GSAP/ScrollTrigger/SplitText, cria `gsap.matchMedia()`, expõe `ctx(scope)`, `refresh()`, `reducedMotion()`. Browser only. |
| `ScrollService` | Lenis: init, `scrollTo`, `stop/start`, reset ao mudar de rota. |
| `SeoService` | `title`, `meta description`, canonical, Open Graph, JSON-LD por rota. |
| `WhatsappService` | Constrói `https://wa.me/244924666323?text=…` a partir de um modelo de mensagem; também `mailto:`. |
| `ContentService` | Acesso tipado a `data/*`. |

## 3. Rotas
Definidas em `app.routes.ts` com `loadComponent` e `title`. `app.routes.server.ts`: `RenderMode.Prerender` para `**` com `getPrerenderParams` para `servicos/:slug`, `noticias/:slug`, `parceiros/:slug` (lê os slugs de `data/`).
Scroll: desactiva o scroll automático do router para páginas (`withInMemoryScrolling({scrollPositionRestoration:'disabled'})`) e trata o reset via `ScrollService` + transição de página.

## 4. i18n (preparado desde o início, activado na Fase 13)
- `src/app/i18n/pt.ts` exporta um objecto aninhado `as const` com **todas** as chaves de UI (nav, botões, títulos de secção, rótulos de formulário, mensagens).
- Pipe puro/`computed` `t`: `{{ 'nav.servicos' | t }}`.
- Conteúdo longo (descrições de serviços, notícias, etc.) em `data/*.ts` com estrutura **`{ pt: string, en?: string }`** ou chaves para o dicionário — escolhe **uma** abordagem na Fase 00 e usa-a em tudo (recomendado: campos `{pt, en}` no conteúdo; chaves no dicionário para UI).
- Idioma é **estado do cliente** (sem rotas `/en`): `lang` em `localStorage('ns2-lang')`, `<html lang>` actualizado, `Title/Meta` reagem ao idioma. Prerender fica em PT.
- Fase 13 acrescenta `en.ts`, o botão PT/EN no header/menu móvel e traduz **todo** o conteúdo.

## 5. Tema
- `@custom-variant dark (&:where(.dark, .dark *));` no `styles.css`.
- `index.html` inclui um script inline mínimo que define a classe `dark` antes da pintura (lê `localStorage`, senão `prefers-color-scheme`, senão `dark`).
- `ThemeService` sincroniza depois da hidratação.

## 6. Componentes: regras de desenho
- *Dumb components* em `shared/ui/` (inputs/outputs), sem acesso a serviços de dados.
- Componentes de página compõem secções; cada secção é um componente próprio (`pages/home/hero/hero.ts|html`).
- Nomes: `kebab-case` em ficheiros/pastas; classe `PascalCase` sem sufixo.

## 7. Segurança e privacidade
- Sem cookies de tracking, sem analytics na versão estática (decisão futura). Só `localStorage` para tema/idioma.
- Links externos com `rel="noopener noreferrer"`.
- Não incluir chaves, tokens ou URLs de serviços internos.

## 8. Build/deploy (decisão na Fase 14)
O repositório está em `outputMode: "server"`. Como o site é estático, avalia na Fase 14 mudar para `"static"` (hospedagem estática barata) e remover `server.ts`. **Não alteres antes sem aprovação.**
