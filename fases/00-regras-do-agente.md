# Fase 00 — Regras do agente (ler antes de qualquer fase)

## Papel
És o agente de código do projecto NS2 Innovation. Aplicas melhorias **por fases**, só depois de o utilizador (Cláudio) escolher as opções.

## Regras

1. **Uma fase de cada vez.** Lê apenas o `.md` da fase pedida. Não adiantes trabalho das fases seguintes.
2. **Inspecciona antes de mexer:** framework, estrutura de componentes, estilos, tokens e a página `/ui-kit` (`https://ns2-site-weld.vercel.app/ui-kit`). Reutiliza tokens e componentes existentes (`--bg`, `--surface`, `--surface-2`, `--fg`, `--fg-muted`, `--accent`, `--accent-bright`, `--line`).
3. **Pergunta primeiro.** Cada fase tem perguntas de **escolha múltipla**. Faz as perguntas ao utilizador antes de alterar código:
   - usa a ferramenta de perguntas/opções do teu ambiente se existir; senão, lista as opções com letras (A, B, C, D);
   - no máximo **4 perguntas por ronda**; se houver mais, faz mais rondas;
   - marca a opção recomendada com *(recomendado)*;
   - inclui sempre "Saltar esta sugestão";
   - espera a resposta antes de continuar.
4. **Aplica só o escolhido.** Se a resposta for "saltar", regista-o no progresso e não implementes.
5. **Não inventes conteúdo:** clientes, números, prazos, testemunhos, equipa, escritório ou resultados. Se faltar um dado, pergunta ao utilizador.
6. **Imagens:** nunca uses ficheiros de `_referencias-nao-publicar/`. Verifica `triagem-de-imagens.md` para o estado de cada imagem. Escreve sempre `alt` adequado (ou `alt=""` se decorativa), usa `loading="lazy"` excepto no hero visível, define `width`/`height` (ou `aspect-ratio`) para evitar saltos de layout.
7. **Verificações em cada fase:** tema escuro e claro; larguras 320, 375, 768, 1280 e 1920px; sem scroll horizontal; foco visível por teclado; `prefers-reduced-motion` respeitado; alvos de toque ≥ 44px em mobile.
8. **`/ui-kit`:** se criares ou alterares um componente, actualiza a página `ui-kit` para reflectir o novo padrão.
9. **Não alteres** lógica de negócio, rotas existentes, textos legais nem contactos sem perguntar.
10. **Registo de progresso (obrigatório no fim de cada fase).** Procura o markdown de progresso do repositório (`PROGRESS.md`, `PROGRESSO.md`, `progresso.md`, `docs/progress*`, `docs/progresso*`). Se não existir, pergunta ao utilizador onde criar. Acrescenta uma secção no formato:

```md
## Fase NN — <nome da fase> (<data>)
- Estado: concluída | parcial | saltada
- Decisões do utilizador: <pergunta → opção escolhida>
- Ficheiros criados/alterados: <lista>
- Verificações feitas: tema claro/escuro, 320px–1920px, teclado, movimento reduzido
- Pendências e dados em falta: <lista, ex.: fotos próprias, logótipos HP/KNUP>
```

11. No fim da fase, resume em 5 linhas o que mudou e pára. Não comeces a fase seguinte.

## Contexto do negócio
Duas pessoas, sem escritório nem funcionários, alguns serviços terceirizados, só dois projectos web apresentáveis (Gráfica Viva e Foco). A comunicação deve ser honesta: "equipa pequena, atendimento directo".
