# Evidência real — Playwright MCP

Data: 10/11/2026, America/Sao_Paulo. Os nomes automáticos dos arquivos usam UTC (11/11/2026).

## Método

Servidor oficial Microsoft `@playwright/mcp` versão 0.0.85, executado localmente por Node.js. Cliente `@modelcontextprotocol/sdk`, transporte stdio, navegador Microsoft Edge headless com perfil isolado. As ações foram chamadas pelo protocolo MCP (`client.callTool`), não apenas por uma biblioteca Playwright direta.

Referência do servidor: https://github.com/microsoft/playwright-mcp

Ferramentas usadas: browser_navigate, browser_snapshot, browser_run_code_unsafe, browser_resize, browser_take_screenshot, browser_console_messages, browser_network_requests e browser_close. A ferramenta de código executou somente as verificações descritas abaixo; o código enviado e todas as respostas estão no registro.

Código testado: cópia de publicação do DevLinks, em http://127.0.0.1:5175, após a inclusão do favicon em index.html.

## Resultados

- 19 verificações de título, tema inicial, alternância, persistência nos dois temas, teclado, quantidade de botões e destinos passaram.
- Os quatro botões foram clicados e abriram novas abas nos URLs esperados. target e rel foram conferidos.
- Avatar público carregado (largura natural de 224 pixels).
- Seis cenários de layout passaram: 1440x900, 390x844 e 320x740, cada um nos temas claro e escuro.
- Em todos os cenários, scrollWidth foi igual à largura da janela: sem rolagem horizontal.
- Console da execução final: 0 erros e 0 avisos.
- npm run lint e npm run build: aprovados após a correção.

## Correção encontrada no teste

A primeira execução encontrou HTTP 404 em /favicon.ico. Corrigido declarando o favicon.svg já existente em index.html. Os logs iniciais foram preservados; calls.json registra a execução completa posterior à correção.

## Evidências

- [Chamadas MCP e respostas reais](playwright-mcp/calls.json)
- [Desktop escuro](playwright-mcp/1440-dark.png) e [claro](playwright-mcp/1440-light.png)
- [Mobile 390 escuro](playwright-mcp/390-dark.png) e [claro](playwright-mcp/390-light.png)
- [Mobile 320 escuro](playwright-mcp/320-dark.png) e [claro](playwright-mcp/320-light.png)

Capturas desktop escura e mobile 320 clara também inspecionadas visualmente. Os outros cenários possuem verificações automatizadas e capturas para revisão.

## Limite da comparação com o Figma

A navegação real pelo MCP à referência node-id=0-1 retornou HTTP 403, com título “ERROR: The request could not be satisfied” e mensagem “Request blocked”. Não foi possível inspecionar os frames originais. A comparação direta com o Figma permanece pendente de acesso; não se afirma fidelidade visual validada.

## Revisão posterior com Figma

O bloqueio descrito acima foi resolvido com uma cópia da usuária. Comparação concluída e testes repetidos após ajustes de hover: veja [figma.md](figma.md) e [registro atualizado](figma-validacao/calls.json).

