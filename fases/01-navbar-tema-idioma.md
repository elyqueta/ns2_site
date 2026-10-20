# Fase 01 — Navbar: tema, tradução e logótipo

> **Regras obrigatórias (resumo; ver `00-regras-do-agente.md`)**
> 1. Executa **só esta fase**. Não leias nem apliques as seguintes.
> 2. **Antes de alterar código**, faz as perguntas de escolha múltipla abaixo (ferramenta de perguntas se existir; senão A/B/C/D). Máx. 4 por ronda. Espera as respostas.
> 3. Aplica **apenas** o escolhido. "Saltar" = registar e avançar.
> 4. Verifica escuro/claro, 320px a 1920px e `prefers-reduced-motion`. Actualiza `/ui-kit` se criares ou alterares componentes.
> 5. No fim, **acrescenta esta fase ao markdown de progresso do repositório** (formato em `00-regras-do-agente.md`).

## Situação actual
Logótipo à esquerda (pequeno; o "innovation" fica ilegível), 9 ligações (Início, Sobre, Serviços, Produtos, Desenvolvimento web, Projectos, Notícias, Parceiros, Contacto), botão de tema (sol/lua) e CTA "Pedir orçamento".

## Pedido do utilizador
Botão de **tema à direita** do "Pedir orçamento" e botão de **traduzir à esquerda** (do CTA).

Nota do consultor UX: agrupar os dois utilitários juntos e deixar o CTA no extremo direito é a convenção mais comum e alinha o CTA com a margem do contentor. O pedido original também funciona se os dois botões forem visualmente mais leves do que o CTA.

## Perguntas (ronda 1)

**Q1. Ordem dos botões à direita**
- A) `Traduzir · Tema · Pedir orçamento` *(recomendado pelo consultor)*
- B) `Traduzir · Pedir orçamento · Tema` *(pedido original do utilizador)*
- C) `Tema · Traduzir · Pedir orçamento`
- D) Saltar

**Q2. Aspecto do seletor de idioma**
- A) Ícone de globo + código ("PT ▾") com menu PT/EN *(recomendado)*
- B) Alternador visível "PT | EN"
- C) Só ícone de globo que abre menu
- D) Saltar

**Q3. Como traduzir**
- A) Rotas por idioma (`/en/...`) com i18n do framework, melhor para SEO *(recomendado se o framework suportar)*
- B) Dicionário no cliente com o idioma guardado (cookie/localStorage)
- C) Só preparar a interface agora (botão com "EN brevemente") e traduzir depois
- D) Widget do Google Translate *(não recomendado: parte o layout e o aspecto)*

## Perguntas (ronda 2)

**Q4. Mobile (até 480px)**
- A) Tema e idioma dentro do menu; à vista só logótipo, CTA compacto e menu *(recomendado)*
- B) Tema e idioma visíveis como ícones; CTA dentro do menu
- C) Tudo dentro do menu
- D) Saltar

**Q5. Logótipo**
- A) Aumentar 20–30% e garantir que "innovation" fica legível
- B) Manter o tamanho
- C) Até 480px usar só o símbolo (`/brand/logo-mark.svg`) *(recomendado em conjunto com A)*
- D) Saltar

## Implementação (conforme as respostas)
- Botões com `aria-label` descritivo ("Mudar para tema escuro", "Mudar idioma"); menu de idioma com `aria-expanded`, navegável por teclado e a fechar com Esc.
- Atributo `<html lang>` actualizado ao mudar de idioma. Preferências de tema e de idioma persistidas.
- Alvos de toque de pelo menos 44px; ordem de tabulação igual à ordem visual; sem salto de layout ao trocar de tema.
- Se a tradução ficar adiada (Q3-C), o botão não deve parecer avariado: estado desactivado com explicação.
- Não inventar traduções: traduzir só os textos existentes e pedir revisão ao utilizador.

## Critérios de aceitação
- Barra sem quebrar linha a 1280px e 1024px; menu mobile funcional a 320px.
- O CTA continua a ser o elemento mais destacado da barra.
- Tema e idioma funcionam por teclado e leitor de ecrã.
