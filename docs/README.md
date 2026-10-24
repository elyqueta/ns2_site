# Protocolo de Fases — NS2 Innovation

## Como funciona

O projecto é entregue **por fases**, uma de cada vez, com aprovação humana entre elas.

1. Só executa a fase que o utilizador indicar (ex.: "executa a fase 03"). Nunca adiante trabalho de fases futuras.
2. Antes de começar: leia a ficha da fase pedida e todos os documentos que ela lista em "Ler antes".
3. Implemente apenas o âmbito da fase. O que está em "Fora do âmbito" não se toca.
4. No fim da fase:
   - corra `npm run build` (tem de passar sem erros nem warnings novos) e `npm test` se existirem testes;
   - actualize `docs/PROGRESSO.md` (estado da fase, decisões tomadas, pendências);
   - faça um commit local: `feat(fase-XX): <resumo>` (não faça push);
   - escreva o Relatório de fase (formato neste documento) e PARE.
5. Não avance para a fase seguinte até o utilizador dizer explicitamente "avança para a fase N".
6. Dúvida = pare e pergunte. Apresente a pergunta com 2–4 opções numeradas e a sua recomendação. Nunca invente informação da empresa.

---

## Formato do Relatório de Fase

Após completar uma fase, escreva um relatório contendo:

- **Fase:** número e nome
- **Estado:** concluída / pendente
- **Decisões tomadas:** resumo das escolhas feitas
- **Ficheiros alterados:** lista de caminhos
- **Ficheiros criados:** lista de caminhos (se houver)
- **Verificações feitas:** resultado do build e testes
- **Pendências:** itens em aberto
- **Próximos passos:** o que falta fazer

---

## Exemplo de Relatório

```
## Fase 04 — Início
- Estado: concluída
- Decisões tomadas: layout com hero, secção "Quem somos", serviços em destaque
- Ficheiros alterados: src/app/pages/home/home.html, src/app/pages/home/home.ts
- Verificações feitas: npm run build passa (30 rotas), npm test sem regressão
- Pendências: fotografias locais em falta
```
