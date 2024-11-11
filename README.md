Gerenciador de Orçamento Pessoal

Este projeto é uma aplicação de gerenciamento de orçamento pessoal desenvolvida em JavaScript e construída com o framework React e a biblioteca de componentes MUI. O sistema permite que o usuário cadastre, edite e consulte registros de despesas e receitas, armazenando essas informações no LocalStorage do navegador.

Índice
 - Tecnologias Utilizadas
 - Arquitetura e Decisões de Design
 - Funcionalidades
 - Estrutura das Telas
 - Dificuldades e Soluções

Tecnologias Utilizadas
 - JavaScript: Linguagem escolhida para o desenvolvimento, como especificado nos requisitos do projeto.
 - React: Framework utilizado para facilitar o desenvolvimento e componentização.
 - MUI (Material-UI): Biblioteca de componentes de UI para React, usada para garantir uma interface amigável e ágil de  desenvolver.

Arquitetura e Decisões de Design
    A escolha de React e MUI foi baseada em experiência prévia com essas ferramentas, o que agilizou o desenvolvimento. React oferece uma arquitetura baseada em componentes que facilita a manutenção e escalabilidade do código, enquanto o MUI permitiu rápida criação de componentes estilizados e responsivos, como botões e tabelas.
    Para armazenamento dos dados, foi utilizado o LocalStorage, que permite salvar informações localmente no navegador e oferece persistência simples e eficaz para pequenos volumes de dados.

Funcionalidades
 - Cadastro de Registro: Registros de despesas e receitas podem ser cadastrados com uma descrição, valor e data.
 - Edição de Registro: Possibilidade de atualizar registros já existentes.
 - Exclusão de Registro: Remoção de registros do LocalStorage.
 - Visualização de Registros: Exibição de todos os registros cadastrados em uma tabela.

Estrutura das Telas
 - Tela Home: Apresenta informações básicas do aluno e detalhes da atividade.
 - Tela de Consulta: Permite visualizar todos os registros cadastrados, exibidos em uma tabela com as colunas:
     - Descrição: Detalhamento do registro.
     - Data: Data associada ao registro.
     - Valor: Valor numérico do registro.
     - Editar: Botão para carregar o registro na tela de cadastro para edição.
     - Deletar: Botão para excluir o registro do LocalStorage.
 - Tela de Cadastro: Contém campos para preencher a descrição, valor e data. Só permite o salvamento caso todos os campos estejam preenchidos. Após o salvamento, o usuário é redirecionado para a tela de consulta.

Dificuldades e Soluções
Durante o desenvolvimento, algumas dificuldades foram encontradas e solucionadas:
 - Manuseio do LocalStorage: Adicionar e atualizar dados diretamente no LocalStorage exigiu cuidado com o tratamento de dados, como conversão de tipos e validação de campos.
 - Redirecionamento e Manutenção de Estado: Garantir que o registro correto fosse carregado na tela de cadastro para edição exigiu o uso de useLocation e useNavigate do React Router, facilitando o compartilhamento de dados entre telas.
Este projeto, além de cumprir os requisitos da tarefa, serviu para aprimorar habilidades em React e na manipulação do LocalStorage, fortalecendo conhecimentos sobre gerenciamento de estados e navegação em aplicações web.