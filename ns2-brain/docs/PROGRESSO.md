# PROGRESSO (o agente actualiza no fim de cada fase)

| Fase                               | Estado                  | Aprovada pelo utilizador | Notas                                                                                                                                           |
| ---------------------------------- | ----------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Fundações                       | 🟡 a aguardar aprovação | —                        | Implementada em `outher_dev`; build e testes aprovados. Slugs de detalhe ficam por prerenderizar até existirem dados nas fases correspondentes. |
| 01 Design system e UI kit          | ⬜ pendente             | —                        |                                                                                                                                                 |
| 02 Motor de animação               | ⬜ pendente             | —                        |                                                                                                                                                 |
| 03 Layout global                   | ⬜ pendente             | —                        |                                                                                                                                                 |
| 04 Início                          | ⬜ pendente             | —                        |                                                                                                                                                 |
| 05 Sobre                           | ⬜ pendente             | —                        |                                                                                                                                                 |
| 06 Serviços                        | ⬜ pendente             | —                        |                                                                                                                                                 |
| 07 Produtos                        | ⬜ pendente             | —                        |                                                                                                                                                 |
| 08 Desenvolvimento web + Projectos | ⬜ pendente             | —                        |                                                                                                                                                 |
| 09 Notícias                        | ⬜ pendente             | —                        |                                                                                                                                                 |
| 10 Parceiros                       | ⬜ pendente             | —                        |                                                                                                                                                 |
| 11 Contacto, legais e 404          | ⬜ pendente             | —                        |                                                                                                                                                 |
| 12 SEO, a11y, desempenho           | ⬜ pendente             | —                        |                                                                                                                                                 |
| 13 Tradução PT/EN                  | ⬜ pendente             | —                        |                                                                                                                                                 |
| 14 Revisão final                   | ⬜ pendente             | —                        |                                                                                                                                                 |

Legenda: ⬜ pendente · 🟡 a aguardar aprovação · ✅ aprovada · 🔧 em correcção

## Decisões registadas

- Conteúdo longo em `data/*.ts` usará campos `{ pt: string, en?: string }`; textos de interface usam chaves do dicionário. A tradução inglesa será acrescentada na Fase 13.
- As rotas usam um componente de página mínimo comum, com título e metadados definidos pelos dados da rota.
- O SSR permite apenas `localhost` e `127.0.0.1` por omissão; domínios de deploy só serão configurados quando forem conhecidos.

## Pendências de conteúdo (precisam do utilizador)

(Nenhuma pendência de conteúdo oficial identificada nesta fase.)

## Imagens em falta

(vazio — ver `assets.md`)
