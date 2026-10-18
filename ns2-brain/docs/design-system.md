# Design system — NS2 Innovation

Meta: **premium, editorial, tecnológico, actual**. Escuro por omissão, azul da marca como único acento, muito espaço, tipografia grande e confiante, movimento subtil e preciso.

## 1. O que aproveitar das referências (`docs/referencias/`)
| Referência | Aproveitar | Não copiar |
|---|---|---|
| **WaveNet** (`ref-wavenet-*`) | Fundo azul-marinho profundo; títulos enormes com uma palavra em itálico; formas 3D/arame abstractas; cartões arredondados; faixa de métricas; faixa de marcas; bloco CTA "Let's start now"; rodapé com newsletter-style grid | Cores ciano; stock de pessoas de aparência europeia |
| **Bauen** e **go.arch** (`ref-bauen-*`, `ref-goarch-*`) | Secções numeradas e títulos em maiúsculas com **uma palavra a cor de acento**; guias verticais finas (grelha visível); hero de página inteira com sobreposição escura; texto vertical lateral; cartões de projecto que revelam no hover; *numerais gigantes*; setas "PREV/NEXT" | Dourado/bronze (aqui o acento é o azul do logo); tipografia condensada em excesso |

## 2. Motivo de marca: a **diagonal**
O logo é cortado por uma diagonal (N azul / S escuro). Usa-a como assinatura:
- *clip-path* diagonal em máscaras de imagem e divisores de secção (`polygon(0 0, 100% 0, 100% 88%, 0 100%)`);
- linha diagonal fina desenhada (DrawSVG) no hero e no CTA final;
- *hover* de cartões revela por uma diagonal.
Com moderação: no máximo 1–2 usos por ecrã.

## 3. Cores (tokens semânticos)
Azul da marca (extraído do logo): **#437BC7**. Preto do logo: **#231F20**.

Variáveis em `:root` (claro) e `.dark` (escuro), expostas ao Tailwind via `@theme inline`:

| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#05070D` | `#F6F8FC` | fundo da página |
| `--surface` | `#0A0E1A` | `#FFFFFF` | secções/cartões |
| `--surface-2` | `#101626` | `#EDF1F8` | cartões elevados, inputs |
| `--line` | `rgba(255,255,255,.09)` | `rgba(10,14,26,.10)` | bordas, guias |
| `--fg` | `#F4F6FB` | `#0A0E1A` | texto principal |
| `--fg-muted` | `#9AA3B8` | `#52607A` | texto secundário |
| `--accent` | `#437BC7` | `#2F63AE` | botões, links, realces (claro mais escuro p/ contraste AA) |
| `--accent-bright` | `#6BA0EA` | `#437BC7` | texto/ícone de acento sobre fundo |
| `--accent-glow` | `rgba(67,123,199,.35)` | `rgba(47,99,174,.18)` | brilhos, sombras coloridas |
| `--on-accent` | `#FFFFFF` | `#FFFFFF` | texto sobre botão de acento |
| `--success` / `--danger` | `#34D399` / `#F87171` | `#059669` / `#DC2626` | estados de formulário |

Regras: sem outras cores de marca; gradientes só azul→azul-marinho/transparente; sem dourado. Verifica contraste AA (4.5:1 texto, 3:1 UI grande).

## 4. Tipografia
- **Títulos:** *Sora* variable (500–700). Uppercase com tracking `0.08em` apenas em etiquetas/rótulos de secção; títulos grandes em *sentence case*, `tracking-tight`, `leading-[1.02]`.
- **Texto:** *DM Sans* variable (400–600).
- Auto-alojadas via `@fontsource-variable/*` importadas no `styles.css`; `font-display: swap`.
- Escala fluida com `clamp()` (definir como tokens `--text-display`, `--text-h1`, `--text-h2`, `--text-h3`, `--text-lead`, `--text-body`, `--text-small`):
  display `clamp(3rem, 9vw, 8.5rem)` · h1 `clamp(2.5rem, 6vw, 5.5rem)` · h2 `clamp(2rem, 4.2vw, 3.75rem)` · h3 `clamp(1.25rem, 2vw, 1.75rem)` · lead `clamp(1.125rem, 1.6vw, 1.375rem)`.
- Truque editorial: uma palavra do título em *itálico* ou a cor `accent-bright`.
- Medida de leitura 60–70 caracteres (`max-w-[62ch]`).

## 5. Layout
- Contentor: `max-w-[1440px]`, padding lateral `clamp(1.25rem, 4vw, 4rem)`.
- Espaçamento vertical de secção: `py-[clamp(5rem,10vw,10rem)]`.
- Grelha de 12 colunas; **guias verticais** (4 linhas `border-line`) em fundo de secções-chave no desktop.
- Cantos: cartões `rounded-3xl`, botões `rounded-full`, imagens `rounded-2xl` (ou máscara diagonal).
- Sombras discretas; no escuro preferir bordas `line` + brilho `accent-glow` no hover.
- Fundo: ruído/grain muito subtil (SVG data-URI, opacidade ≤ 4%) + *mesh* de gradiente azul desfocado nas zonas hero/CTA.

## 6. Componentes (Fase 01) — todos em `shared/ui/`, `.ts` + `.html`
| Componente | Notas |
|---|---|
| `Button` | variantes `primary` (preenchido acento), `secondary` (contorno), `ghost`; tamanhos `md/lg`; opcional ícone de seta que desliza; suporta `href` interno (`routerLink`) e externo; estado `loading` não necessário. Magnético (directiva na Fase 02). |
| `LinkArrow` | texto + seta, sublinhado animado. |
| `SectionHeading` | índice `01 — Serviços` (etiqueta uppercase) + título com palavra em destaque + descrição opcional. |
| `Card` | base com borda `line`, fundo `surface`, *spotlight* que segue o cursor (via CSS var `--mx/--my` actualizada por directiva). |
| `ServiceCard`, `ProductCard`, `PackageCard`, `PostCard`, `PartnerCard`, `ProjectCard` | especializações. |
| `Badge`/`Tag` | etiquetas pequenas. |
| `Icon` | SVG inline por nome (`ICONS` tipado): rede, servidor, suporte, ferramentas, contrato, consultoria, código, aluguer, portátil, desktop, peça, acessório, cadeira, impressora, whatsapp, email, telefone, pin, seta, seta-diagonal, sol, lua, menu, fechar, check, plus. Traço 1.5px, `currentColor`. Desenhados à mão (sem bibliotecas externas). |
| `MediaSlot` | placeholder de marca (gradiente + grelha + diagonal + legenda do ficheiro esperado) quando a imagem não existe; com imagem real usa `NgOptimizedImage`. |
| `Accordion` | FAQ; acessível; animação de altura com GSAP. |
| `FormField` (input, textarea, select) | label flutuante, estados erro/foco, `aria-describedby`. |
| `Breadcrumb` | para páginas de detalhe. |
| `Marquee` | faixa infinita (marcas/palavras); pausa no hover; respeita reduced-motion. |
| `CtaBand` | bloco final "Precisa de soluções de TI? Vamos começar." com diagonal e botões WhatsApp/Contacto. |
| `PageHero` | cabeçalho de páginas internas: breadcrumb, título display, lead, guias verticais, mancha de gradiente. |
| `ThemeToggle` | sol/lua, com transição suave do ícone; `aria-pressed`. |

## 7. Padrões de página recorrentes
1. `PageHero` (interior) ou hero imersivo (home).
2. Secções numeradas `01 — …` alternando `bg` e `surface`.
3. `CtaBand` + footer grande com wordmark gigante recortado (opcional).

## 8. Header / Footer (resumo; detalhe na Fase 03)
- Header fixo, transparente no topo, com *blur* e borda `line` ao rolar; esconde ao rolar para baixo, mostra ao subir. Logo `logo-horizontal(-dark)`; nav central; à direita `ThemeToggle` (e, na Fase 13, `LangToggle`) + botão "Pedir orçamento".
- Menu móvel em ecrã inteiro, links enormes com *stagger*.
- Footer: logo, descrição curta, colunas (Navegação, Serviços, Contacto), horários **só se fornecidos**, redes **só as confirmadas**, linha legal e ligações legais, "Voltar ao topo".

## 9. Logo no UI
- Fundo escuro → `logo-horizontal-dark.svg`; fundo claro → `logo-horizontal.svg`. Troca por tema (`@if` no `.html` ou duas `<img>` com `hidden dark:block`/`dark:hidden`). Altura header: 32–40 px. Favicon: `public/favicon.ico` (já fornecido).
- Área de respiro = altura do "N". Não esticar, não rodar, não recolorir fora das variantes fornecidas.
