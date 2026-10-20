# Fase 11 — Contacto e rodapé

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
- Rodapé: logótipo e descrição, colunas Navegação, Serviços e Contacto (dois telefones, email, morada em Luanda com "Abrir no Google Maps"), links legais e "Voltar ao topo". O botão flutuante do WhatsApp chega a sobrepor-se ao rodapé.
- Não há fachada nem escritório para fotografar. A morada existe no site.

## Imagem fornecida
`public/images/heros/contacto.webp` (telemóvel com ícones de contacto, azul escuro). Provável licença "Premium": confirmar.

## Perguntas (ronda 1)

**Q1. Em vez de fachada**
- A) Fotografia de Luanda de Unsplash/Pexels (a fornecer; `public/images/contacto/luanda.webp`) *(recomendado)*
- B) Mapa estilizado com a morada e "Abrir no Google Maps"
- C) Só o hero de ícones, sem mais imagens
- D) Saltar

**Q2. Canal principal na página Contacto**
- A) WhatsApp em destaque + telefone + email, sem formulário *(recomendado se já respondem por WhatsApp)*
- B) Formulário + canais alternativos
- C) Manter como está
- D) Saltar

**Q3. Botão flutuante do WhatsApp**
- A) Manter, com margem de segurança e a subir quando o rodapé entra no ecrã *(recomendado)*
- B) Esconder perto do rodapé
- C) Manter como está
- D) Saltar

**Q4. Rodapé**
- A) Acrescentar redes sociais e horário (a fornecer) e reduzir links duplicados da navegação
- B) Só corrigir tamanho do texto pequeno e contraste
- C) Manter
- D) Saltar

## Dados que o agente **não pode inventar**
Horário, redes sociais, número de WhatsApp, e se há atendimento presencial. **Perguntar ao utilizador.** A morada actual não deve sugerir um escritório aberto ao público se não for o caso (perguntar se mantém "Morada" ou usa "Zona de atendimento").

## Critérios de aceitação
- O visitante contacta em 1 toque a 320px.
- O botão flutuante nunca tapa texto ou links do rodapé.
