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
- **body-parser** (v1.20.2): Middleware para análise de solicitações HTTP.
- **ejs** (v3.1.9): Engine de modelo para gerar páginas HTML dinamicamente.
- **express** (v4.18.2): Framework web para Node.js.
- **express-flash** (v0.0.2): Middleware para exibição de mensagens flash em páginas da web.
- **express-session** (v1.17.3): Middleware para gerenciar sessões de usuário.
- **passport** (v0.7.0): Middleware de autenticação para Node.js.
- **passport-google-oauth20** (v2.0.0): Estratégia do Passport para autenticação com o Google.

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

- `/config`
  - `multer.js`
  - `nodemon.js`

- `/public`
  - `/css`
    - `apostilas.css`
    - `auth.css`
    - `checklists.css`
    - `create-pass.css`
    - `home-bolsistas.css`
    - `home.css`
    - `profile-edit.css`
    - `sidebar.css`
    - `tutorials.css`
  - `/images`
    - `calvo.png`
    - `google.png`
    - `ifce.png`
    - `logo.png`
    - `pc.png`
    - `v1.png`
    - `v2.png`
    - `v3.png`
    - `v4.png`
  - `/js`
    - `script.js`
  - `/uploads`
      -`/apostilas`
- `/src`
  - `/controllers`
    - `apostilas-controller.js`
    - `passportGoogle.js`
    - `user-controller.js`
  - `/models`
    - `apostila-model.js`
    - `user-model.js`
  - `/routes`
    - `/authentication`
      - `auth.js`
    - `/pages`
      - `apostilas.js`
      - `checklists.js`
      - `home-bolsistas.js`
      - `profile-edit.js`
      - `profile.js`
      - `tutorials.js`
    - `home.js`

  - `/views`
    - `/error`
      - `error401.ejs`
      - `error409.ejs`
      - `error500.ejs`
    - `/partials`
      - `sidebar.ejs`
      - `header.ejs`
      - `footer.ejs`
    - `apostilas-create.ejs`
    - `apostilas.ejs`
    - `auth.ejs`
    - `checklists.ejs`
    - `create-pass.ejs`
    - `home-bolsistas.ejs`
    - `home.ejs`
    - `profile-edit.ejs`
    - `profile.ejs`
    - `tutorials.ejs`
- `/app.js`
- `.env`


## Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).

## Tarefas para a Versão 1.0.0

- [X] Remover autenticação local (permanecerá apenas com o google);
- [X] Remover rota de criação de senha e seus relacionados;
- [X] Autenticação com o Google:
  - [X] Resolver erro de chave duplicada;
  - [X] Adicionar direcionamento para edição de perfil após conta criada;
- [X] Adicionar middleware de autenticação nas rotas restantes;
- [X] Modificar desing para páginas de login/registro após remoção da autenticação local;
- [X] Página de edição de perfil:
  - [X] Remover fields de nome e email;
  - [X] Adicionar dias de trabalho junto ao turno;
- [X] Associar checklist de novatos ao usuário
- [X] Notificações durante a marcação do checklist de formatação;
- [X] Criar página para adicionar/remover apostilas; 
- [ ] Criar página para adicionar/remover tutoriais; 
- [ ] Criar página para adicionar/remover regras do setor;
- [ ] Definir modelo de apresentação das informações de perfil;
- [ ] Substituir páginas de erro por mensagens flash; --> tarefa cancela por não ser necessária