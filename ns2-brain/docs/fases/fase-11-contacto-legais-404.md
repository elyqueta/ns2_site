# Fase 11 — Contacto, legais e 404

> Executa **só** esta fase. No fim: valida, actualiza `PROGRESSO.md`, commit local, escreve o Relatório de fase e **PÁRA** (formato em `docs/README.md`).

## Ler antes
- conteudo/contacto-e-legal.md (completo)
- seo-e-acessibilidade.md (formulários)

## Tarefas
1. `/contacto` com cartões de contacto, botão do mapa e formulário **sem servidor** (WhatsApp principal, email alternativo), validação tipada e acessível, pré-selecção por `?servico=`.
2. `WhatsappService` completo + testes unitários dos construtores de mensagem/links (Vitest).
3. `/politica-de-privacidade` e `/termos-e-condicoes` com o texto base (avisar no relatório que requerem revisão jurídica).
4. Página 404 com `**` e *status* tratado no prerender quando possível.

## Fora do âmbito
- Envio por API/servidor; reCAPTCHA; analítica.

## Critérios de aceitação (o utilizador vai avaliar isto)
- [ ] Formulário gera a mensagem WhatsApp e o `mailto` correctos (verificar codificação de acentos).
- [ ] Erros de validação claros e anunciados a leitores de ecrã.
- [ ] Redes sociais continuam ocultas se não confirmadas.
- [ ] Definition of Done de `AGENTS.md §8`.
