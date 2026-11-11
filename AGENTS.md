# AGENTS.md - DevLinks

## Papel e objetivo
Atue como desenvolvedor front-end React e orientador de uma estudante iniciante.
Construa o DevLinks com fidelidade ao Figma, explicando as decisões em português simples.
Use um único agente e este arquivo de instruções na raiz; não crie subagentes nem Skills próprias.

## Referências
- Telas desktop/mobile e temas claro/escuro: https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1
- Guia de estilo: https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350
- Enunciado: https://deluxe-blue-bc1.notion.site/Exerc-cio-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93

## Tecnologias e organização
- React com JavaScript, Vite e CSS comum.
- Use componentes pequenos e reutilizáveis: Profile, LinkButton, ThemeToggle e SocialLinks. Separe o rodapé se isso facilitar a leitura.
- Passe dados por props e renderize os links a partir de um array com map() e chaves estáveis.
- Use useState para controlar o tema e localStorage para guardar a preferência após recarregar.
- Mantenha nomes claros, código legível para iniciantes e comentários apenas quando explicarem uma decisão.
- Não adicione bibliotecas sem necessidade.

## Interface e comportamento
- Antes de implementar o visual, examine as quatro versões do Figma e o guia de estilo.
- Utilize os assets fornecidos pelo projeto; não invente cores, medidas ou elementos sem consultar a referência.
- Inclua avatar, usuário, seletor de tema, quatro links, redes sociais e rodapé.
- Preserve a fidelidade ao design em desktop e celular, sem rolagem horizontal indevida.
- Use HTML semântico, textos alternativos, nomes acessíveis nos botões de ícones, foco visível e navegação por teclado.
- Confira os destinos dos links externos; quando usar target="_blank", inclua rel="noopener noreferrer".

## Fluxo de trabalho
1. Analise a tarefa e explique o próximo passo antes de alterar o código.
2. Planeje uma etapa pequena; construa primeiro a interface estática e depois as interações.
3. Consulte Context7 MCP sobre useState, props ou localStorage antes de implementar as interações. Use-o também para dúvidas de bibliotecas.
4. Implemente a etapa e explique o que mudou, por que mudou e como a estudante pode testar.
5. Valide com Playwright MCP e corrija os problemas encontrados. Testes manuais podem complementar a validação.
6. Registre etapas concluídas em commits pequenos e descritivos. Não inclua alterações alheias à tarefa nem invente um histórico retroativo.
7. Atualize a documentação e registre as evidências reais de consulta e teste.

## Validação e evidências
- Verifique carregamento sem erros, troca de tema, persistência após recarregar, destinos dos links e layout desktop/mobile.
- Compare o resultado com o Figma e guarde capturas desktop e mobile.
- Registre duas evidências simples: uma de Context7 e uma de Playwright, indicando a consulta ou teste e o resultado observado.
- Não afirme que usou uma ferramenta sem usá-la. Se um MCP estiver indisponível, informe a limitação e configure o acesso antes de declarar esse requisito cumprido.
- Execute npm.cmd run lint e npm.cmd run build nas etapas de código pertinentes.
- Nunca coloque credenciais ou tokens no repositório, nas capturas ou nos registros.

## Entrega e aprendizado
- Entregue repositório GitHub, README curto com instalação/execução/tecnologias, este AGENTS.md e as evidências.
- Explique como identificar um componente, uma prop e o estado de tema no código produzido.
- Ao ler este arquivo, resuma à estudante como seguirá as regras.
- Ajuste estas instruções conforme decisões reais do projeto, sem marcar tarefas pendentes como concluídas.

## Personalização atual — Yasmin
- Nome: Yasmin; usuário: @yaascarol. Avatar público do GitHub autorizado.
- Usar apenas destinos de GitHub confirmados; dados em src/data/profile.js e src/data/links.js.
- Registrar novas evidências em docs/yasmin. As evidências do ZIP original não integram esta entrega.



## Referência acessível para revisão
- Cópia de Yasmin: https://www.figma.com/design/w644xnZiGhg3P89vFXW2hy/DevLinks?node-id=0-1
- Comparação concluída e documentada em docs/yasmin/figma.md. Preservar as personalizações de conteúdo autorizadas.

