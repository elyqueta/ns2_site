# AGENTS.md — Site institucional da NS2 Innovation

> Lê este ficheiro **por inteiro** antes de qualquer acção. Depois lê `docs/README.md` e `docs/PROGRESSO.md`.
> Este ficheiro manda. Se um pedido do utilizador contrariar uma regra daqui, avisa e pergunta antes de agir.

---

## 1. Como trabalhas (fluxo por fases, obrigatório)

O projecto é entregue **por fases**, uma de cada vez, com aprovação humana entre elas.

1. Só executas a fase que o utilizador indicar (ex.: "executa a fase 03"). Nunca adiantes trabalho de fases futuras.
2. Antes de começar: lê `docs/fases/fase-XX-*.md` da fase pedida e **todos** os documentos que ela lista em "Ler antes".
3. Implementa **apenas** o âmbito da fase. O que está em "Fora do âmbito" não se toca.
4. No fim da fase:
   - corre `npm run build` (tem de passar sem erros nem warnings novos) e `npm test` se existirem testes;
   - actualiza `docs/PROGRESSO.md` (estado da fase, decisões tomadas, pendências);
   - faz **um** commit local: `feat(fase-XX): <resumo>` (não faças push);
   - escreve o **Relatório de fase** (formato em `docs/README.md`) e **PÁRA**.
5. Não avances para a fase seguinte até o utilizador dizer explicitamente "avança para a fase N". Se ele pedir correcções, corrige **só** isso, actualiza `PROGRESSO.md` e volta a parar.
6. **Dúvida = pára e pergunta.** Apresenta a pergunta com 2–4 opções numeradas e a tua recomendação. Nunca inventes informação da empresa (números, clientes, testemunhos, prémios, equipa, preços, moradas, redes sociais).

---

## 2. Contexto do projecto

- **Empresa:** NS2 Innovation — tecnologia e comércio de produtos informáticos. Luanda, Angola.
- **Objectivo do site:** promover a empresa e gerar contactos (pedidos de orçamento por WhatsApp e email). Não é uma loja; não há pagamentos.
- **Posicionamento:** agência/empresa de tecnologia **premium e actual**. A NS2 desenvolve sites de outras empresas (ex.: Gráfica Viva); o próprio site tem de ser a melhor montra possível.
- **Público:** empresas, instituições e particulares em Angola.
- **Estado:** versão **100% estática** (sem backoffice, sem base de dados, sem API própria). Backoffice virá no futuro: mantém os dados em camadas separadas (ver §6) para facilitar a migração.
- **Referências visuais:** `docs/referencias/` (ver `docs/design-system.md` para o que aproveitar de cada uma).
- **Logo e assets:** `public/brand/` e `public/favicon.ico` (ver `docs/assets.md`). **Não redesenhes nem alteres o logo.**

---

## 3. Stack (já instalada no repositório)

Angular **22** (standalone, signals, novo control flow) · SSR com prerender (`@angular/ssr`) · Tailwind CSS **v4** (via `@tailwindcss/postcss`) · Vitest · TypeScript 6 · Node ≥ 22.22.3.

Dependências a acrescentar (e só estas, salvo aprovação): `gsap` (inclui ScrollTrigger, SplitText, DrawSVG, Flip), `lenis`, `@fontsource-variable/sora`, `@fontsource-variable/dm-sans`.

---

## 4. Regras invioláveis

### 4.1 CSS
1. **Existe um único ficheiro `.css` em todo o projecto: `src/styles.css`.** Contém apenas: `@import "tailwindcss"`, imports de fontes, `@custom-variant dark`, `@theme` (tokens), variáveis CSS dos temas e poucas regras `@layer base`/`@utilities` indispensáveis.
2. **Apaga `src/app/app.css`** e remove `styleUrl` do `App`. Nenhum componente tem `styles`, `styleUrl`, `styleUrls` nem ficheiros `.css`/`.scss`. Gera componentes com `ng g c <caminho> --style=none`.
3. Toda a estilização é feita com **classes utilitárias Tailwind** nos `.html`. Sem `style="..."` inline (excepção: valores dinâmicos via `[style.x]` quando indispensável para animação/posição, e custom properties).
4. Sem `<style>` dentro de `.html`. (O `app.html` actual traz um bloco `<style>` de placeholder: **remove-o por completo**.)
5. Sem `tailwind.config.js`: toda a configuração vive no `@theme` do `styles.css` (Tailwind v4).
6. Usa **tokens semânticos** (`bg-surface`, `text-fg`, `border-line`, `text-accent`…) para que o modo claro/escuro funcione sem `dark:` espalhado. Usa `dark:` só em excepções justificadas.
7. Mobile-first. Breakpoints Tailwind por omissão. Testa 360 px, 768 px, 1280 px e 1920 px.

### 4.2 Templates vs lógica
1. **Cada componente tem 2 ficheiros: `nome.ts` e `nome.html`** (`templateUrl`, nunca `template:` inline). Nunca misturar.
2. Os `.html` só contêm marcação, bindings simples (`{{ }}`, `[prop]`, `(evento)`), `@if/@for/@switch` e pipes puros. **Proibido** lógica nos templates: sem expressões complexas, sem chamadas a funções com efeitos, sem `new`, `Math`, `JSON`, concatenações longas, ternários aninhados.
3. Lógica, formatação, derivações → `computed()`/métodos no `.ts` ou serviços/pipes. Dados de conteúdo → ficheiros em `src/app/data/` (ver §6).
4. Textos visíveis nunca ficam *hardcoded* nos `.html`: vêm de `src/app/data/` ou do dicionário i18n (ver `docs/arquitectura.md` §i18n). Excepção: rótulos puramente técnicos (aria de ícones podem vir do dicionário também).
5. Convenção deste repositório (Angular CLI actual): ficheiros sem sufixo `.component` (`header.ts`, `header.html`), classes sem sufixo (`export class Header`), selector com prefixo `app-`.

### 4.3 Angular
- `ChangeDetectionStrategy.OnPush` em todos os componentes; `inject()` em vez de construtor; `signal`/`computed`/`input()`/`output()`; `@for` com `track`.
- Rotas com *lazy loading* (`loadComponent`). Cada rota define `title` e `data` SEO (ver `docs/seo-e-acessibilidade.md`).
- **SSR-safe:** nunca acedas a `window`, `document`, `localStorage`, `matchMedia`, GSAP ou Lenis fora de `afterNextRender()` / `isPlatformBrowser`. O build com prerender não pode rebentar nem produzir *flash* de conteúdo escondido (conteúdo visível por omissão; as animações é que escondem, e só no browser).
- Standalone puro: sem NgModules.
- Formulários: *Reactive Forms* tipados.

### 4.4 Animação (GSAP) — nível Awwwards, mas disciplinado
- Todo o movimento usa **GSAP** (+ ScrollTrigger, SplitText, etc.) e **Lenis** para *smooth scroll* ligado ao ticker do GSAP. Sem outras bibliotecas de animação. Sem animações CSS decorativas além de *transitions* simples de hover.
- Animação vive em **serviço + directivas** reutilizáveis (`docs/animacoes.md`), nunca espalhada em componentes.
- Anima apenas `transform`, `opacity`, `clip-path`, `filter` leve. Nunca `top/left/width/height`.
- `prefers-reduced-motion: reduce` → sem parallax, sem pin, sem split; apenas *fades* curtos. Obrigatório.
- Limpeza: `gsap.context()` + `ctx.revert()` e `ScrollTrigger.kill()` em `ngOnDestroy`/`DestroyRef`. `ScrollTrigger.refresh()` após fontes/imagens e mudança de rota.
- Alvo de desempenho: 60 fps em telemóvel médio. Se uma animação pesar, simplifica.

### 4.5 Conteúdo e honestidade
- **Não inventes** estatísticas, número de clientes, anos de experiência, prémios, testemunhos, logótipos de clientes, certificações ou preços. Sem *lorem ipsum*. Se faltar conteúdo, usa o que está em `docs/conteudo/` ou marca o campo `// TODO(conteúdo): …`, regista em `PROGRESSO.md` e segue.
- O conteúdo oficial está em `docs/conteudo/*.md` (já convertido a partir dos PDF; **não tentes ler os PDF**). Português de **Angola**, ver `docs/conteudo/00-regras-de-escrita.md`.
- **Nunca publiques informação interna** do preçário (margens, custos de fornecedores, estratégia de reajuste, provedores cloud/IA/WhatsApp, fórmulas, "preço promocional" como estratégia interna). Só se mostra o que está em `docs/conteudo/desenvolvimento-web.md`, e **apenas como "a partir de"**.
- O texto do logo contém um erro ("Técnologia"). **Em texto do site escreve sempre "Tecnologia".** Não uses as variantes `logo-full*` (que incluem a linha com o erro); usa `logo-horizontal*` e `logo-mark*` (ver `docs/assets.md`).

### 4.5.1 Contacto
- **WhatsApp é o canal principal**, email o alternativo. Botão flutuante de WhatsApp em todas as páginas. Formulário de contacto/orçamento: gera mensagem pré-preenchida para `wa.me` e oferece alternativa `mailto:`. Sem envio para servidores. Ver `docs/conteudo/contacto-e-legal.md`.

### 4.6 Imagens
- **Pessoas:** se aparecerem pessoas, têm de reflectir **Angola e o mercado angolano** (pessoas angolanas, na sua maioria de pele negra ou mestiça, ambientes e vestuário profissionais contemporâneos). **Evita aparência europeia** e fotografias de banco de imagens genéricas "corporate". Na dúvida, **não uses pessoas**.
- Não descarregues imagens de terceiros nem uses URLs externas. Onde faltar foto real, usa o componente `MediaSlot` (placeholder de marca, sem pessoas) e regista o ficheiro em falta em `docs/assets.md` §Imagens necessárias.
- Formatos: `.webp`/`.avif` para fotos, `.svg` para ícones e ilustrações; `NgOptimizedImage` com `width`/`height`; *lazy* abaixo da dobra.
- Ícones e ilustrações em **SVG** (inline via componente `Icon` ou ficheiros em `public/`). Sem *icon fonts*.

### 4.7 Temas
- Modo **escuro por omissão** (identidade das referências), com alternância claro/escuro persistida (`localStorage`) e respeito por `prefers-color-scheme` na primeira visita. Classe `dark` no `<html>`; script mínimo no `index.html` para evitar *flash* (única excepção a "sem JS no HTML").
- Os dois temas têm de estar **igualmente polidos**; contraste AA no mínimo.

### 4.8 Idioma
- O site nasce em **português (pt-AO)**, mas todo o texto passa desde a Fase 00 pela camada de dicionário (ver `docs/arquitectura.md`) para a tradução ser trivial. O **botão PT/EN só se implementa na Fase 13.** Não traduzas antes.

### 4.9 Qualidade
- TypeScript estrito, sem `any`. Sem `console.log` no código entregue. Sem código morto nem ficheiros de exemplo do CLI.
- Acessibilidade: HTML semântico, `alt` úteis, foco visível, navegação por teclado, `aria-*` correctos, alvos de toque ≥ 44 px.
- Prettier do repo (`.prettierrc`) e `.editorconfig` respeitados.

---

## 5. Sitemap (rotas finais)

| Rota | Página | Fase |
|---|---|---|
| `/` | Início | 04 |
| `/sobre` | Sobre a NS2 | 05 |
| `/servicos` · `/servicos/:slug` | Serviços + detalhe (8 serviços) | 06 |
| `/produtos` | Produtos por categoria | 07 |
| `/desenvolvimento-web` | Websites, lojas e sistemas web (a partir de) | 08 |
| `/projectos` | Projectos (Gráfica Viva) | 08 |
| `/noticias` · `/noticias/:slug` | Notícias | 09 |
| `/parceiros` · `/parceiros/:slug` | Marcas e parceiros | 10 |
| `/contacto` | Contacto e pedido de orçamento | 11 |
| `/politica-de-privacidade` · `/termos-e-condicoes` | Legais | 11 |
| `**` | 404 | 11 |
| `/ui-kit` | Só desenvolvimento (noindex; removida na Fase 14) | 01 |

Todas as rotas parametrizadas têm de ser **prerendered** (`getPrerenderParams` em `app.routes.server.ts`).

---

## 6. Estrutura de pastas

```
src/
  styles.css                 # ÚNICO css
  index.html
  app/
    app.ts · app.html · app.config.ts · app.routes.ts · app.routes.server.ts
    core/                    # serviços singleton: theme, i18n, animation, seo, whatsapp, scroll
    data/                    # TODO o conteúdo tipado (servicos.ts, produtos.ts, web-pacotes.ts,
                             #   noticias.ts, parceiros.ts, projectos.ts, contacto.ts, navegacao.ts)
    i18n/                    # pt.ts (e en.ts na Fase 13), tipos das chaves
    shared/
      ui/                    # button, link-arrow, section-heading, card, badge, icon, media-slot,
                             #   accordion, form-field, breadcrumb, marquee…
      directives/            # reveal, split-text, parallax, magnetic, count-up, tilt…
      pipes/                 # kz (formato moeda), data-pt…
      layout/                # header, footer, mobile-menu, whatsapp-fab, page-transition, preloader
    pages/                   # uma pasta por página (home/, sobre/, servicos/…), cada uma com
                             #   componentes próprios de secção (hero, intro, lista…) — um ficheiro .ts + .html cada
public/
  brand/                     # logos SVG
  favicon.ico
  images/                    # webp/avif/svg de conteúdo
docs/                        # instruções (isto)
```

---

## 7. Mapa de documentos (consulta conforme a fase)

| Documento | Para quê |
|---|---|
| `docs/README.md` | Protocolo de fases, formato do relatório |
| `docs/PROGRESSO.md` | Estado das fases (tu actualizas) |
| `docs/arquitectura.md` | Estrutura, serviços core, i18n, tema, rotas, SSR |
| `docs/design-system.md` | Tokens, tipografia, componentes, linguagem visual |
| `docs/animacoes.md` | Catálogo de animações GSAP e directivas |
| `docs/assets.md` | Logo, favicon, imagens, ilustrações |
| `docs/seo-e-acessibilidade.md` | Meta, JSON-LD, a11y, desempenho |
| `docs/conteudo/` | Todo o texto oficial, por página |
| `docs/fases/` | Uma ficha por fase (00–14) |

---

## 8. Definition of Done (qualquer fase)

- [ ] Âmbito da fase cumprido, nada fora dele.
- [ ] `npm run build` passa (incluindo prerender) sem erros.
- [ ] Nenhum `.css` além de `src/styles.css`; nenhum `template:`/`styles:` inline; nenhuma lógica em `.html`.
- [ ] Modo claro e escuro verificados; 360 px e 1280 px verificados.
- [ ] `prefers-reduced-motion` respeitado onde há animação.
- [ ] Sem conteúdo inventado; pendências registadas em `PROGRESSO.md`.
- [ ] Relatório de fase escrito e **paragem** efectuada.
