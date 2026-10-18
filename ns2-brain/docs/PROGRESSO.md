# PROGRESSO (o agente actualiza no fim de cada fase)

| Fase                               | Estado                  | Aprovada pelo utilizador   | Notas                                                                                                                                           |
| ---------------------------------- | ----------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Fundações                       | ✅ aprovada             | Sim — avançar para fase 01 | Implementada em `outher_dev`; build e testes aprovados. Slugs de detalhe ficam por prerenderizar até existirem dados nas fases correspondentes. |
| 01 Design system e UI kit          | ✅ aprovada             | Sim — avançar para fase 02 | UI kit com componentes reutilizáveis, pipes, ícones e temas; build, testes e validação visual aprovados.                                        |
| 02 Motor de animação               | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | AnimationService, ScrollService, directivas GSAP/Lenis e demonstração no UI kit; build e testes aprovados. |
| 03 Layout global                   | ✅ aprovada             | Sim — aprovada pelo utilizador a 2026-10-18 | Header com navegação responsiva, menu móvel acessível, footer, WhatsApp flutuante, preloader de sessão e cortina de transição; build, testes e validação runtime aprovados. |
| 04 Início                          | 🟡 a aguardar aprovação | Não — avaliação pendente  | Home completa: serviços, pacotes, produtos, processo, valores, notícias e JSON-LD; build/testes aprovados e 23 rotas prerenderizadas.             |
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
- A Fase 02 foi aprovada pelo utilizador em 2026-10-18; as animações só são activadas após a aplicação ficar estável para não interferirem com a hidratação SSR.
- O layout global usa exclusivamente os contactos oficiais fornecidos; redes sociais e horário não são mostrados enquanto não houver confirmação.
- A Home usa apenas conteúdo oficial; os preços web aparecem como "a partir de" com a nota legal completa. A secção Notícias apresenta os três modelos educativos fornecidos nos documentos, pendentes de revisão/substituição.
- O JSON-LD `Organization`/`LocalBusiness` fica no documento base para ser emitido no HTML prerenderizado; os dados publicados limitam-se a nome, site, contacto e morada confirmados.

## Pendências de conteúdo (precisam do utilizador)

- Confirmar a plataforma correspondente aos identificadores de redes sociais oficiais antes de os publicar; até lá, permanecem ocultos.
- O horário de atendimento não foi fornecido e não é apresentado.
- Rever ou substituir os três artigos-modelo antes de os considerar conteúdo editorial final.
- Fornecer a fotografia real da equipa para a secção "Quem somos" da Home; os espaços de imagem continuam como placeholders.

## Imagens em falta

(vazio — ver `assets.md`)
