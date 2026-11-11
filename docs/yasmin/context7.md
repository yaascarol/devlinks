# Evidência real — Context7 MCP

Data: 10/11/2026 (America/Sao_Paulo).

Consulta realizada após a implementação, para revisão e aprendizado; não representa pesquisa anterior ao desenvolvimento.

## Ferramentas e biblioteca

1. `mcp__codex_apps__context7_resolve_library_id`, com libraryName `React`.
2. Biblioteca escolhida: `/reactjs/react.dev`, documentação oficial, reputação High no resultado.
3. Duas chamadas reais a `mcp__codex_apps__context7_query_docs`:
   - `How does useState use a lazy initializer and a functional updater based on previous state for a light/dark theme toggle?`
   - `How do parent components pass read-only props and event handler functions to reusable child components?`

As chamadas retornaram sem erro. O registro com os parâmetros de consulta e os resultados está em [context7-consulta.json](context7-consulta.json).

## Resultado e aplicação no DevLinks

- A função inicializadora de useState fornece o valor inicial; no projeto ela lê a preferência de tema salva. No modo estrito de desenvolvimento o React pode executar inicializadores duas vezes.
- Uma função atualizadora recebe o estado anterior e calcula o seguinte. Em src/App.jsx, `setTheme(current => current === 'dark' ? 'light' : 'dark')` alterna o tema dessa forma.
- O componente pai pode passar funções de evento por Props. App fornece `onToggle` ao ThemeToggle, que a associa ao `onClick` do botão, sem executá-la durante a renderização.
- App também passa dados como username e avatarSrc para Profile. Isso permite reutilizar a apresentação com outros dados.

A revisão confirmou esses padrões no código existente; nenhuma mudança funcional foi necessária. Esta consulta não substitui testes de navegador nem validação de localStorage.

## Fontes retornadas pelo Context7

- https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useState.md
- https://github.com/reactjs/react.dev/blob/main/src/content/learn/responding-to-events.md
- https://github.com/reactjs/react.dev/blob/main/src/content/learn/sharing-state-between-components.md

## Limites

Esta é a evidência de Context7. O teste pelo servidor Playwright MCP continua pendente. As capturas existentes foram obtidas por automação do navegador integrado.
