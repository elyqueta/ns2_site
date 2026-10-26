# Progresso — NS2 Innovation Site

## Fase 13 — Cartões de serviços da home: estilo "vidro" na secção com efeito pin

- **Estado:** concluída (inclui correcção 1)
- **Decisões tomadas (fase inicial):**
  - Q1: Paleta de 5 tons da marca a rotar pelos cartões (`63 111 181` · `84 94 214` · `36 140 156` · `120 82 200` · `46 125 168`)
  - Q2: Destaque contínuo (`--focus`) consoante a posição no scroll
  - Q3: Ilustrações actuais dos serviços como imagem provisória
  - Q4: Mobile sem pin: scroll horizontal nativo com snap e indicador de progresso
  - Q5: Títulos curtos da tabela da fase
  - Q6: Linha meta = descrição actual do serviço (2 linhas)
  - Q7: Ícone do ui-kit em quadrado de vidro ao lado do título
  - Q8: Botão "Saber mais" + seta
- **Decisões tomadas (correcção 1):**
  - Apresentação desktop: pin horizontal (opção A) — cada cartão passa completo, o último termina completo
  - Removido `mask-image`/`-webkit-mask-image` da pista (sem degradê nas laterais)
  - Pista full-bleed: wrapper `relative left-[50%] -mx-[50vw] w-[100vw] overflow-x-hidden` escapa do `max-w-[1440px]`
  - Track com `width: max-content` para acomodar todos os cards sem corte
  - `--svc-track-pad` fixo em `4vw` (não dinâmico, que estava a esmagar o espaço dos cards)
  - `--svc-track-pad-bottom: 60px` token
  - `scrollLength` = track.scrollWidth − window.innerWidth; medição após `document.fonts.ready` + `load` das imagens
  - Recalculo em `resize` e mudança de tema (`class` no `<html>` via `MutationObserver` + `ScrollTrigger.refresh()`)
  - Secção `overflow-x-clip` para evitar scroll horizontal da página
  - Secção `lg:pt-16 lg:pb-12` para remover vazio no fim
- **Ficheiros alterados:**
  - `src/styles.css` — tokens `--svc-*`, `.bg-svc-stage`, classes `.svc-*` (track `max-content`, overflow visível, sem máscara lateral)
  - `src/app/pages/home/services-preview/services-preview.html` — wrapper full-bleed, secção `overflow-x-clip`, `lg:pt-16 lg:pb-12`
  - `src/app/pages/home/services-preview/services-preview.ts` — mapeamento dos serviços (cor, título curto, imagem)
  - `src/app/shared/directives/home-services-pin.directive.ts` --foco contínuo + scrollLength correto + medição após fonts/imagens + recalculo em resize/tema via MutationObserver
  - `src/app/pages/ui-kit/ui-kit.html` + `ui-kit.ts` — cartão vidro no UI kit (com e sem badge)
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionServicoVidro`, `servicoVidroDescription`
- **Ficheiros criados:**
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.ts`
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.html`
- **Verificações feitas:** `npm run build` passa (38 rotas prerenderizadas); sem novos warnings. Testes: falhas pré-existentes não relacionadas.
- **Pendências:** fotografias reais dos serviços (fornecidas pelo utilizador, fase futura).
- **Próximos passos:** aguardar instrução para avançar para a fase seguinte.

---

## Correcção: Hero claro/escuro por tokens + typewriter funcional

- **Causas raiz:**
  1. `typewriter.directive.ts`: `if (!cursorEl) return;` impedia a animação de correr (sem `[data-typewriter-cursor]` no HTML); `onUpdate` lia `(ctxEl as any).n` inexistente → `slice(0, NaN)`; tweens de apagar/escrever fora da timeline; `@Input() ... any` viola AGENTS.md.
  2. `hero.html`: cores fixas (`bg-[#0a0e1a]`, `text-white`) tornam o modo claro ilegível (texto escuro sobre véu escuro).
  3. `header.html`: `logo-mark.svg` sempre visível, some no tema escuro (símbolo azul-marinho).

- **Ficheiros alterados:**
  - `src/app/shared/directives/typewriter.directive.ts` — reescrito por completo usando `registerAnimationDirective`, `input<LocalizedWords>`, sem `any`, sem `DestroyRef`/`PLATFORM_ID` manuais, cleanup via `gsap.context()` revert + destroy return; `effect()` recria animação na troca de idioma.
  - `src/app/pages/home/hero/hero.ts` — removido `heroWords`, `staticHighlight`, `heroItButtonClasses`; adicionado `firstHighlight`; `i18n` declarado antes dos `computed` que o usam.
  - `src/app/pages/home/hero/hero.html` — tokens semânticos (`bg-bg`, `text-fg`, `text-accent-bright`, `border-line`), sem `#hex`, sem `text-white`, `appTypewriter` uma só vez, cursor como irmão `[data-typewriter-cursor]`, `min-h-[1.05em]` na linha da palavra, botão secundário usa `variant="glass"`.
  - `src/app/shared/ui/button/button.ts` — variante `'glass'` adicionada a `ButtonVariant` e `variantClasses`.
  - `src/app/shared/layout/header/header.html` — logo com imagem clara (`dark:hidden`) + imagem escura (`dark:block`).
  - `src/app/pages/ui-kit/ui-kit.html` — botão `glass` adicionado na secção de botões.
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chave `buttonGlass` adicionada.

- **Verificações feitas:** `npm run build` passa (prerender 38 rotas, sem erros); `npm test` sem novas regressões (falhas pré-existentes em pipes/whatsapp/navegação). Sem `any`, sem `#hex` no `hero.html`, sem `text-white`, sem `console.log`.
