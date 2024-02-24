# Projeto BuzzClone

Este projeto é um clone do Buzzfeed, desenvolvido utilizando Angular, CSS e práticas de design responsivo. Apesar de ser uma recriação do famoso site de entretenimento, este projeto pode ser facilmente adaptado para outros fins, como a criação de questionários personalizados para empresas que desejam coletar informações dos usuários para melhorar seus produtos ou serviços.

## Objetivo

O objetivo deste projeto é demonstrar minhas habilidades de desenvolvimento front-end, incluindo o uso do framework Angular para criar uma aplicação web interativa e responsiva. Além disso, pretende-se mostrar como o mesmo conceito pode ser aplicado em diferentes contextos, como a criação de questionários personalizados para fins comerciais.

## Funcionalidades

- **Quiz Interativo**: Os usuários podem responder a uma série de perguntas sobre diferentes temas.
- **Design Responsivo**: O layout da aplicação se adapta a diferentes dispositivos e tamanhos de tela.
- **Personalização**: As perguntas e respostas podem ser facilmente personalizadas para se adequarem a diferentes necessidades e temas.
- **Utilização de Arquivo JSON**: As perguntas e respostas são armazenadas em um arquivo JSON para facilitar a manutenção e personalização do conteúdo.
- **Componentes Reutilizáveis**: Foram criados componentes reutilizáveis que são iterados a partir do arquivo JSON, possibilitando a renderização dinâmica das perguntas na tela.

## Como Utilizar

1. Clone ou faça o download do repositório para sua máquina local.
2. Certifique-se de ter o Angular CLI instalado globalmente em seu ambiente de desenvolvimento.
3. No terminal, navegue até o diretório raiz do projeto e execute `ng serve` para iniciar o servidor de desenvolvimento.
4. Abra seu navegador e acesse `http://localhost:4200/` para visualizar a aplicação.

## Deploy 

`https://www.buzzquestion.netlify.app`

## Estrutura do Arquivo JSON

O arquivo `quizz_questions.json` contém as perguntas e respostas utilizadas na aplicação. Cada objeto dentro do array representa uma pergunta, com os campos `question`, `options` e `id`.

Exemplo de estrutura:

`
[
    {
      "id": 1,
      "question": "Qual super poder você escolheria ?",
      "options": [
        { "id": 1, "name": "Raios-Lasers", "alias": "A" },
        { "id": 2, "name": "Voar", "alias": "B" },
        { "id": 3, "name": "Explodir coisas", "alias": "A" },
        { "id": 4, "name": "Curar feridas", "alias": "B" },
        { "id": 5, "name": "Soltar fogo pelas mãos", "alias": "A" }
      ]
    },
    {
      "id": 2,
      "question": "Quem você salvaria primeiro ?",
      "options": [
        { "id": 1, "name": "Crianças", "alias": "A" },
        { "id": 2, "name": "Idosos", "alias": "A" },
        { "id": 3, "name": "Não saberia escolher", "alias": "B" }
      ]
    }
    ...
]
`

# Contribuindo
Contribuições são bem-vindas! Se você tem ideias para melhorar este projeto ou identificou algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

Este projeto foi desenvolvido por Thomas Edson. Agradecimentos ao Buzzfeed por fornecer inspiração para este projeto. Se você tiver alguma dúvida ou comentário, entre em contato através do meu email: thomas.edson@mail.com.


