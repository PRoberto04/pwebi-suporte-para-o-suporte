# Cantinho dos bolsistas

## Descrição

Projeto pensado como o passo inicial para um avanço tecnológico que irá ajudar aos bolsistas da Coordenadoria de Tecnologia de Informação do IFCE Campus Fortaleza. Inicialmente dispondo de ferramentas de checklist para facilitar na realização de atividades e material teórico para estudo.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- **Node.js**: Você precisará do Node.js para executar este projeto. Caso ainda não tenha instalado, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

Além disso, este projeto utiliza as seguintes dependências, que serão instaladas automaticamente ao executar `npm install`:

- **bcrypt** (v5.1.1): Biblioteca para criptografia de senhas.
- **body-parser** (v1.20.2): Middleware para análise de solicitações HTTP.
- **ejs** (v3.1.9): Engine de modelo para gerar páginas HTML dinamicamente.
- **express** (v4.18.2): Framework web para Node.js.
- **express-flash** (v0.0.2): Middleware para exibição de mensagens flash em páginas da web.
- **express-session** (v1.17.3): Middleware para gerenciar sessões de usuário.
- **mongoose** (v7.5.3): Biblioteca para interagir com o MongoDB.
- **passport** (v0.6.0): Middleware de autenticação para Node.js.
- **passport-google-oauth20** (v2.0.0): Estratégia de autenticação do Passport para autenticação com o Google.
- **passport-local** (v1.0.0): Estratégia de autenticação do Passport para autenticação local.

Certifique-se de ter uma conexão à Internet ativa durante o processo de instalação, pois o npm (gerenciador de pacotes do Node.js) buscará e baixará as dependências automaticamente.

## Instalação

### Clonando o Repositório

Abra o terminal (prompt de comando no Windows) e navegue até o diretório onde você deseja clonar o repositório. 

```bash
cd /caminho/do/seu/diretorio
```

Em seguida, execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/PRoberto04/pwebi-suporte-para-o-suporte.git
```
### Acessando o Diretório do Projeto

Navegue para o diretório do projeto clonado:

```bash
cd /caminho/do/seu/diretorio
```
Agora você já está no repositório, continue;

### Instalando as Dependências
Execute o comando a seguir para instalar todas as dependências listadas no arquivo package.json:

```bash
npm install
```

Isso instalará todas as bibliotecas e módulos necessários para o projeto.

### Executando o Projeto
Agora você pode iniciar o projeto com o seguinte comando:

```bash
npm start
```

O projeto será iniciado e estará acessível em um navegador da web em `http://localhost:3000/`.

### Acessando o Projeto

Abra seu navegador da web e acesse `http://localhost:3000/` para acessar o projeto.

## Estrutura do Projeto

- `/config`: Configurações do projeto.
  - `database.js`: Arquivo de configuração do banco de dados.
  - `nodemon.js`: Configurações para o Nodemon.

- `/public`: Recursos públicos do projeto.
  - `/css`: Estilos CSS.
    - `checklists.css`: Estilos para a página de checklists.
    - `handouts.css`: Estilos para a página de handouts.
    - `home-bolsistas.css`: Estilos para a página de home de bolsistas.
    - `loginAndRegister.css`: Estilos para as páginas de login e registro.
    - `tutorials.css`: Estilos para a página de tutoriais.
  - `/images`: Imagens usadas no projeto.
    - `calvo.png`: Imagem do Calvo -> representante da TI.
    - `google.png`: Imagem do Google.
    - `pc.png`: Imagem de um computador.
    - `v1.png`: Imagem versão 1.
    - `v2.png`: Imagem versão 2.
    - `v3.png`: Imagem versão 3.
    - `v4.png`: Imagem versão 4.
  - `/js`: Scripts JavaScript.
    - `script.js`: Arquivo JavaScript principal.

- `/src`: Código-fonte do projeto.
  - `/auth`: Autenticação do projeto.
    - `localStrategy-passport.js`: Estratégia de autenticação local (Passport).
    - `googleStrategy-passport.js`: Estratégia de autenticação do Google (Passport).
  - `/controllers`: Controladores do projeto.
    - `/checklists`: Controladores para checklists.
      - `formatting-controller.js`: Controlador para o checklist de formatação.
      - `newuser-controller.js`: Controlador para o checklist de novos usuários.
    - `user-controller.js`: Controlador de usuários.
  - `/models`: Modelos de dados do projeto.
    - `/checklists`: Modelos de dados relacionados a checklists.
      - `formatting-model.js`: Modelo de dados para o checklist de formatação.
      - `newuser-model.js`: Modelo de dados para o checklist de novos usuários.
    - `user-model.js`: Modelo de dados de usuários.
  - `/routes`: Rotas do projeto.
    - `/api`: Rotas da API.
      - `/checklists`: Rotas relacionadas a checklists.
        - `formatting.js`: Rota para o checklist de formatação.
        - `newuser.js`: Rota para o checklist de novos usuários.
      - `user.js`: Rota de usuário.
    - `/authentication`: Rotas de autenticação.
      - `login.js`: Rota de login.
      - `register.js`: Rota de registro.
    - `/pages`: Rotas para páginas.
      - `handouts.js`: Rota para a página de handouts.
      - `home-bolsistas.js`: Rota para a página de home de bolsistas.
      - `tutorials.js`: Rota para a página de tutoriais.
      - `checklists.js`: Rota para a página de checklists.
    - `home.js`: Rota para a página inicial.

  - `/views`: Visualizações do projeto.
    - `/error`: Páginas de erro.
      - `error401.ejs`: Página de erro 401.
      - `error409.ejs`: Página de erro 409.
      - `error500.ejs`: Página de erro 500.
    - `/partials`: Partes reutilizáveis das visualizações.
      - `sidebar.ejs`: Barra lateral reutilizável.
      - `header.ejs`: Cabeçalho reutilizável.
    - `login.ejs`: Página de login.
    - `register.ejs`: Página de registro.
    - `home-bolsistas.ejs`: Página de home de bolsistas.
    - `checklists.ejs`: Página de checklists.
    - `tutorials.ejs`: Página de tutoriais.
    - `handouts.ejs`: Página de handouts.

- `/app.js`: Arquivo principal do aplicativo.
- `/server.js`: Arquivo principal do servidor.


## Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).

## Tarefas para a Versão 1.0.0

- [ ] Arquivo de visualização da página inicial
- [ ] Salvar as informações dos usuários que utilizam a autenticação do Google no banco de dados
- [ ] Implementar token de verificação
- [ ] Implementar checklist com poup-up
- [ ] Salvar os checklists no banco de dados
- [ ] Fazer com que o checklist novato desapareça após ser concluído
