# NS2 Innovation — pacote de melhorias visuais e imagens

Site: https://ns2-site-weld.vercel.app · Sistema visual: https://ns2-site-weld.vercel.app/ui-kit

Este pacote foi preparado a partir de uma revisão UI/UX (modo escuro e claro, responsivo até 320px). O objectivo é a página **parecer menos gerada por IA**, ser interactiva e representar correctamente uma empresa de desenvolvimento web de Luanda.

## Como usar

1. Descompacta na **raiz do repositório**. A pasta `public/images/` junta-se à existente (não há ficheiros em conflito com `public/brand/`).
2. Dá ao agente de código esta instrução: *"Lê `LEIA-ME.md` e `fases/00-regras-do-agente.md`. Executa só a fase 01 e pára no fim."*
3. Responde às perguntas de escolha múltipla do agente. Quando a fase terminar, pede a seguinte.
4. **Nunca peças várias fases de uma vez.** Cada fase termina com um registo no markdown de progresso do repositório.

## Fases (por ordem)

| # | Ficheiro | O que resolve |
|---|---|---|
| 00 | `fases/00-regras-do-agente.md` | Regras gerais, formato das perguntas, registo de progresso |
| 01 | `fases/01-navbar-tema-idioma.md` | Ordem dos botões, tema, tradução, logótipo, mobile |
| 02 | `fases/02-heros-e-imagens.md` | Estilo dos heros, tratamento nos dois temas, logomarca nos heros sem imagem |
| 03 | `fases/03-home-quem-somos-e-estrutura.md` | Ênfase em desenvolvimento web, "Quem somos" honesto |
| 04 | `fases/04-servicos-cartoes.md` | Carrossel vs grelha, ícones, serviços terceirizados |
| 05 | `fases/05-produtos-imagens-e-cartoes.md` | 6 imagens de produtos (estado de cada uma) |
| 06 | `fases/06-noticias-capas.md` | 3 capas de artigos |
| 07 | `fases/07-desenvolvimento-web-e-pacotes.md` | Pacotes, preços, wireframes, CTA |
| 08 | `fases/08-projectos-e-brevemente.md` | Gráfica Viva, Foco, cartões "Brevemente" |
| 09 | `fases/09-parceiros-e-marcas.md` | Logótipos das marcas e página Parceiros |
| 10 | `fases/10-cartoes-numeros-e-padroes.md` | Números, brilhos e repetição de cartões |
| 11 | `fases/11-contacto-e-rodape.md` | Contacto sem fachada, rodapé, WhatsApp flutuante |
| 12 | `fases/12-responsivo-acessibilidade-e-correccoes.md` | 320px, contraste, bugs observados, desempenho |

## Contexto do negócio (o agente não deve contradizer)

- A empresa são **duas pessoas** (o utilizador e o pai). **Não há escritório nem funcionários.** Alguns serviços são terceirizados.
- Não existe fotografia de fachada. Não inventar equipa, clientes, números, prazos ou testemunhos.
- Só há **dois projectos web apresentáveis**: o site da **Gráfica Viva** (já em "Projectos") e a plataforma de tarefas **Foco**. Os restantes podem aparecer como "Brevemente".

## Estado das imagens

- `public/images/heros/` — 9 imagens (3 opções para a home). Ampliadas para 1920px a partir de originais de ~735px; **substituir por originais de alta resolução quando possível**.
- `public/images/produtos/` — 6 ficheiros: 2 razoáveis, 3 provisórios, 1 placeholder gerado (detalhe na fase 05).
- `public/images/noticias/` — 3 capas provisórias.
- `public/images/parceiros/` — 8 logótipos brancos com transparência (+ SVG original da Multilaser). Em falta: **HP** e **KNUP**.
- `_referencias-nao-publicar/` — **não fazer deploy**. Imagens com marca de água, de sites de terceiros ou fora do âmbito. Estão só para consulta.
- Detalhe de cada ficheiro: `triagem-de-imagens.md`.

## Aviso de licenças

Todas as imagens foram recolhidas do Pinterest e **nenhuma tem licença confirmada**. Várias indicam "Premium" (Freepik/Magnific, pago) e uma exige atribuição. Antes do lançamento definitivo, substituir por imagens de Unsplash/Pexels ou próprias, ou confirmar a licença na origem. Registar a origem de cada imagem final.
