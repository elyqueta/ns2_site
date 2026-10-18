# PROGRESSO (o agente actualiza no fim de cada fase)

| Fase                               | Estado                  | Aprovada pelo utilizador   | Notas                                                                                                                                           |
| ---------------------------------- | ----------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Fundações                       | ✅ aprovada             | Sim — avançar para fase 01 | Implementada em `outher_dev`; build e testes aprovados. Slugs de detalhe ficam por prerenderizar até existirem dados nas fases correspondentes. |
| 01 Design system e UI kit          | ✅ aprovada             | Sim — avançar para fase 02 | UI kit com componentes reutilizáveis, pipes, ícones e temas; build, testes e validação visual aprovados.                                        |
| 02 Motor de animação               | 🟡 em progresso         | Sim — implementação em curso na branch `outher_dev` |                                                                                                                                                 |
| 03 Layout global                   | ⬜ pendente             | —                          |                                                                                                                                                 |
| 04 Início                          | ⬜ pendente             | —                          |                                                                                                                                                 |
| 05 Sobre                           | ⬜ pendente             | —                          |                                                                                                                                                 |
| 06 Serviços                        | ⬜ pendente             | —                          |                                                                                                                                                 |
| 07 Produtos                        | ⬜ pendente             | —                          |                                                                                                                                                 |
| 08 Desenvolvimento web + Projectos | ⬜ pendente             | —                          |                                                                                                                                                 |
| 09 Notícias                        | ⬜ pendente             | —                          |                                                                                                                                                 |
| 10 Parceiros                       | ⬜ pendente             | —                          |                                                                                                                                                 |
| 11 Contacto, legais e 404          | ⬜ pendente             | —                          |                                                                                                                                                 |
| 12 SEO, a11y, desempenho           | ⬜ pendente             | —                          |                                                                                                                                                 |
| 13 Tradução PT/EN                  | ⬜ pendente             | —                          |                                                                                                                                                 |
| 14 Revisão final                   | ⬜ pendente             | —                          |                                                                                                                                                 |

Legenda: ⬜ pendente · 🟡 a aguardar aprovação · ✅ aprovada · 🔧 em correcção

## Decisões registadas

- Conteúdo longo em `data/*.ts` usará campos `{ pt: string, en?: string }`; textos de interface usam chaves do dicionário. A tradução inglesa será acrescentada na Fase 13.
- As rotas usam um componente de página mínimo comum, com título e metadados definidos pelos dados da rota.
- O SSR permite apenas `localhost` e `127.0.0.1` por omissão; domínios de deploy só serão configurados quando forem conhecidos.
- Para contraste AA, os tokens de azul em tema claro/escuro usam tonalidades ligeiramente mais escuras do azul da marca nos textos e botões; o azul original do logótipo mantém-se intacto.
- O `/ui-kit` inclui amostras neutras sem preços reais e aplica `noindex, nofollow`, removendo a meta tag quando se sai da rota.

## Pendências de conteúdo (precisam do utilizador)

(Nenhuma pendência de conteúdo oficial identificada nas fases 00 e 01.)

## Imagens em falta

(vazio — ver `assets.md`)
