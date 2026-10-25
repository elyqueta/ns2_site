# Progresso — NS2 Innovation Site

## Fase 13 — Cartões de serviços da home: estilo "vidro" na secção com efeito pin

- **Estado:** concluída
- **Decisões tomadas:**
  - Q1: Paleta de 5 tons da marca a rodar pelos cartões (`63 111 181` · `84 94 214` · `36 140 156` · `120 82 200` · `46 125 168`)
  - Q2: Destaque contínuo (`--focus`) consoante a posição no scroll
  - Q3: Ilustrações actuais dos serviços como imagem provisória
  - Q4: Mobile sem pin: scroll horizontal nativo com snap e indicador de progresso
  - Q5: Títulos curtos da tabela da fase
  - Q6: Linha meta = descrição actual do serviço (2 linhas)
  - Q7: Ícone do ui-kit em quadrado de vidro ao lado do título
  - Q8: Botão "Saber mais" + seta
- **Ficheiros alterados:**
  - `src/styles.css` — tokens `--svc-*`, `.bg-svc-stage`, classes `.svc-*` (cartões vidro)
  - `src/app/pages/home/services-preview/services-preview.html` — markup dos cartões vidro, fundo da secção
  - `src/app/pages/home/services-preview/services-preview.ts` — mapeamento dos serviços (cor, título curto, imagem)
  - `src/app/shared/directives/home-services-pin.directive.ts` — cálculo de `--focus` nos cartões no `onUpdate`
  - `src/app/pages/ui-kit/ui-kit.html` + `ui-kit.ts` — cartão vidro no UI kit (com e sem badge)
  - `src/app/i18n/pt.ts` + `src/app/i18n/en.ts` — chaves `sectionServicoVidro`, `servicoVidroDescription`
- **Ficheiros criados:**
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.ts`
  - `src/app/shared/ui/servico-vidro-card/servico-vidro-card.html`
- **Verificações feitas:** `npm run build` passa (38 rotas prerenderizadas); sem novos warnings. Testes: falhas pré-existentes não relacionadas.
- **Pendências:** fotografias reais dos serviços (fornecidas pelo utilizador, fase futura); `docs/PROGRESSO.md` em falta antes desta fase.
- **Próximos passos:** aguardar instrução para avançar para a fase seguinte.
