# Fase 04 — Serviços: cartões

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
Carrossel horizontal com os serviços, cada cartão com número (01, 02…), ícone, título, texto e "Saber mais →". O último cartão aparece cortado e esconde conteúdo. Não foram fornecidas fotografias de serviços.

Serviços (do rodapé): Infraestrutura de redes e servidores, Suporte remoto, Suporte on site, Manutenção de equipamentos, Contratos de TI, Construtoria (consultoria), Sistemas e software, Locação de equipamentos de TI, Websites e sistemas web.

## Perguntas (ronda 1)

**Q1. Layout**
- A) Grelha (3 colunas em desktop, 2 em tablet, 1 em mobile) *(recomendado: mostra tudo)*
- B) Manter o carrossel, com setas e indicador claro
- C) Lista editorial (uma linha por serviço: ícone, título, descrição, seta)
- D) Saltar

**Q2. Imagens nos serviços**
- A) Só ícones do ui-kit *(recomendado: não há fotografias de serviços)*
- B) Imagem só nos 2 serviços principais (a fornecer)
- C) Todos com imagem (a fornecer)
- D) Saltar

**Q3. Números nos cartões (01, 02…)**
- A) Remover *(recomendado)*
- B) Manter
- C) Saltar

**Q4. Serviços feitos com parceiros**
- A) Etiqueta discreta "Com parceiros" nos serviços terceirizados *(recomendado: transparência)*
- B) Sem etiqueta
- C) Saltar

*(Se escolher A na Q4, perguntar ao utilizador **quais** serviços são terceirizados. Não adivinhar.)*

## Implementação
- Cartão inteiro clicável (um só link, seta como indicador) em vez de "Saber mais →" repetido.
- Altura uniforme; ícones consistentes com a secção de ícones do `/ui-kit`.
- A 320px, coluna única, com o título em 2 linhas no máximo.

## Critérios de aceitação
- Todos os serviços visíveis sem interacção especial (ou carrossel acessível por teclado).
- Nenhum texto cortado a 320px.
