![GitHub License](https://img.shields.io/github/license/PRoberto04/pwebi-suporte-para-o-suporte)

# Cantinho dos bolsistas

## Descrição

Projeto pensado como o passo inicial para um avanço tecnológico que irá ajudar aos bolsistas da Coordenadoria de Tecnologia de Informação do IFCE Campus Fortaleza. Inicialmente dispondo de ferramentas de checklist para facilitar na realização de atividades e material teórico para estudo.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- **Node.js**: Você precisará do Node.js para executar este projeto. Caso ainda não tenha instalado, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

Além disso, este projeto utiliza as seguintes dependências, que serão instaladas automaticamente ao executar `npm install`:

- **mongoose** (v7.5.3): Biblioteca para interagir com o MongoDB.
 - **connect-mongo** (v5.1.0): Middleware para armazenar sessões do Express no MongoDB.
 - **dotenv** (v16.3.1): Carrega variáveis de ambiente de um arquivo .env.
- **bcrypt** (v5.1.1): Biblioteca para criptografia de senhas.
- **body-parser** (v1.20.2): Middleware para análise de solicitações HTTP.
- **ejs** (v3.1.9): Engine de modelo para gerar páginas HTML dinamicamente.
- **express** (v4.18.2): Framework web para Node.js.
- **express-flash** (v0.0.2): Middleware para exibição de mensagens flash em páginas da web.
- **express-session** (v1.17.3): Middleware para gerenciar sessões de usuário.
- **passport** (v0.7.0): Middleware de autenticação para Node.js.
- **passport-google-oauth20** (v2.0.0): Estratégia do Passport para autenticação com o Google.
- **passport-local** (v1.0.0): Estratégia do Passport para autenticação local.

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
  - `nodemon.js`: Configurações para o Nodemon.

- `/public`: Recursos públicos do projeto.
  - `/css`: Estilos CSS.
    - `checklists.css`: Estilos para a página de checklists.
    - `create-pass.css`: Estilos para a página de criação de senha.
    - `handouts.css`: Estilos para a página de handouts.
    - `home-bolsistas.css`: Estilos para a página de home de bolsistas.
    - `home.css`: Estilos para a página inicial (geral).
    - `login.css` e `register.css`: Estilos para as páginas de login e registro.
    - `profile-edit.css`: Estilos para a página de edição do perfil.
    - `sidebar.css`: Estilos para a sidebar usada noo projeto.
    - `tutorials.css`: Estilos para a página de tutoriais.
  - `/images`: Imagens usadas no projeto.
    - `calvo.png`: Imagem do Calvo -> representante da TI.
    - `google.png`: Imagem do Google.
    - `ifce.png`: Imagem do símbolo do IFCE.
    - `logo.png`: Imagem da logo da CTI.
    - `pc.png`: Imagem de um computador.
    - `v1.png`: Imagem versão 1.
    - `v2.png`: Imagem versão 2.
    - `v3.png`: Imagem versão 3.
    - `v4.png`: Imagem versão 4.
  - `/js`: Scripts JavaScript.
    - `script.js`: Arquivo JavaScript principal.

- `/src`: Código-fonte do projeto.
  - `/controllers`: Controladores do projeto.
    - `user-controller.js`: Controlador de usuários.
    - `passportGoogle.js`: Responsável pela utilização da API oauth2.0 do Google.
    - `passportLocal.js`: Responsável pela lógica de autenticação local.
  - `/models`: Modelos de dados do projeto.
    - `user-model.js`: Modelo de dados de usuários.
  - `/routes`: Rotas do projeto.
    - `/authentication`: Rotas de autenticação.
      - `login.js`: Rota responsável pelo login.
      - `register.js`: Rota responsável pelo registro.
    - `/pages`: Rotas para páginas.
      - `checklists.js`: Rota para a página de checklists.
      - `handouts.js`: Rota para a página de handouts.
      - `home-bolsistas.js`: Rota para a página de home de bolsistas.
      - `profile-edit.js`: Rota responsável pela edição do perfil do usuário.
      - `profile.js`: Rota responsável pela apresentação do perfil do usuário.
      - `tutorials.js`: Rota para a página de tutoriais.
    - `home.js`: Rota para a página inicial.

  - `/views`: Visualizações do projeto.
    - `/error`: Páginas de erro.
      - `error401.ejs`: Página de erro 401.
      - `error409.ejs`: Página de erro 409.
      - `error500.ejs`: Página de erro 500.
    - `/partials`: Partes reutilizáveis das visualizações.
      - `sidebar.ejs`: Barra lateral reutilizável.
      - `header.ejs`: Cabeçalho reutilizável.
      - `footer.ejs`: Rodapé reutilizável.
    - `checklists.ejs`: Página de checklists.
    - `create-pass.ejs`: Página de criação de senha.
    - `handouts.ejs`: Página de handouts.
    - `home-bolsistas.ejs`: Página de home de bolsistas.
    - `home.ejs`: Página inicial GERAL
    - `login.ejs`: Página de login.
    - `profile-edit.ejs`: Página de edição de perfil.
    - `profile.ejs`: Página de visualização de perfil.
    - `register.ejs`: Página de registro.
    - `tutorials.ejs`: Página de tutoriais.
- `/app.js`: Arquivo principal do aplicativo.
- `.env`: Arquivo de segurança para dados sensíveis.


## Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).

## Tarefas para a Versão 1.0.0

- [ ] Remover autenticação local (permanecerá apenas com o google);
- [ ] Remver rota de criação de senha e seus relacionados;
- [ ] Definir modelo de apresentação das informações de perfil;
- [ ] Autenticação com o Google:
  - [ ] Resolver erro de chave duplicada;
  - [ ] Adicionar direcionamento para edição de perfil após conta criada;
- [ ] Página de edição de perfil:
  - [ ] Remover fields de nome e email;
  - [ ] Adicionar dias de trabalho junto ao turno;
- [ ] Criar página para adicionar/remover apostilas e tutoriais;
- [ ] Criar página para adicionar/remover regras do setor;
- [ ] Associar checklist de novatos ao usuário;
- [ ] Substituir páginas de erro por mensagens flash;
- [ ] Notificações durante a marcação do checklist de formatação;
- [ ] Adicionar middleware de autenticação nas rotas restantes;
- [ ] Modificar desing para páginas de login/registro após remoção da autenticação local;
