# Comparação com Figma — concluída

Data: 10/11/2026 (America/Sao_Paulo).

## Referência acessada

[Cópia de Yasmin](https://www.figma.com/design/w644xnZiGhg3P89vFXW2hy/DevLinks?node-id=0-1).

Sessão oficial Figma MCP criada com sucesso. get_metadata localizou as páginas Projeto (0:1) e Style Guide (1437:350). get_design_context retornou código de referência e screenshots dos quatro frames:

| Tela | Nó | Dimensões |
| --- | --- | --- |
| Desktop escuro | 58:415 | 1440 × 1024 |
| Desktop claro | 58:455 | 1440 × 1024 |
| Mobile escuro | 1:113 | 360 × 800 |
| Mobile claro | 1:13 | 360 × 800 |

Também consultados os componentes hover 58:604, 58:602, 223:242 e 74:161, além dos valores de cores e tipografia no Style Guide.

## Comparação realizada

Screenshots dos quatro frames foram comparados visualmente com novas capturas do aplicativo nas mesmas dimensões. Medidas também verificadas no navegador via Playwright MCP, registradas em [geometry.json](figma-validacao/geometry.json).

| Elemento | Figma e implementação |
| --- | --- |
| Contêiner desktop | x=426, y=56, largura 588, altura 712 |
| Perfil | altura 192; padding 24; gap 8 |
| Avatar | slot 112 × 112; topo 80 |
| Seletor | 64 × 40; topo 248; ícone 16 × 16 |
| Botão desktop | 540 × 56; primeiro topo 312 |
| Botão mobile | 312 × 56; margens laterais 24 |
| Espaço entre botões | 16 |
| Área social | SVG 40 × 40, com símbolo interno e espaçamento do asset original |
| Rodapé | topo 696; altura 72; texto 14/24 px |
| Tipografia | Inter; botões 16/24 px, peso 500 |
| Cores padrão | texto branco/preto; borda 50%; superfície branca 10% / preta 5% |

Os quatro fundos locais foram preservados e conferidos visualmente nos respectivos frames. Lua, sol e GitHub usam SVGs locais não vazios, com as dimensões originais; os callsites permanecem ThemeToggle e SocialLinks. O avatar é dado dinâmico autorizado pela usuária.

## Ajustes feitos

- Hover dos botões: superfície branca 5% no escuro e preta 2% no claro; reforço interno de borda de 0,5 px sem deslocar o layout.
- Highlight de hover: branco 20% / preto 10% no seletor e no link social.
- Testes específicos de hover e geometria passaram nos dois temas e nas duas larguras.

## Personalizações intencionais

O modelo tem outro avatar, textos genéricos e quatro redes sociais. A usuária pediu Yasmin, @yaascarol, avatar público do GitHub e apenas destinos de GitHub. Esses conteúdos foram mantidos; a única rede social fica centralizada. Não se trata de uma cópia pixel a pixel dos conteúdos originais.

## Evidências e resultado

- [Desktop escuro](figma-validacao/1440-dark.png) / [claro](figma-validacao/1440-light.png)
- [Mobile escuro](figma-validacao/360-dark.png) / [claro](figma-validacao/360-light.png)
- [Chamadas reais Playwright MCP](figma-validacao/calls.json)
- [Geometria e hover](figma-validacao/geometry.json)

As quatro capturas foram inspecionadas visualmente. As 19 verificações funcionais foram repetidas com sucesso após os ajustes, junto aos quatro cenários de tela/tema. Console final sem erros e avisos; lint e build aprovados.

A comparação visual e das medidas principais está concluída, respeitando as personalizações solicitadas. Não foi executada uma análise automática de diferença pixel a pixel.

## Histórico de acesso

O arquivo original zxErkHjdi0J3yZmZdUMnQE recusou acesso pela integração; a navegação anterior retornou 403. O impedimento foi resolvido com a cópia fornecida pela usuária. Nenhuma edição foi feita no arquivo Figma.
