// Importando módulo dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const uri = process.env.CONNECTIONSTRING;
mongoose
  .connect(uri)
  .then(() => {
    app.emit("pronto");
    console.log("Conectado com sucesso");
  })
  .catch((err) => console.log("Erro: " + err));

function generateSessionSecret(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let secret = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    secret += charset[randomIndex];
  }

  return secret;
}

const sessionSecret = generateSessionSecret(14);

const store = MongoStore.create({
  mongoUrl: uri,
  collectionName: "sessions",
});

const sessionOpt = session({
  secret: sessionSecret,
  store: store,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hora
    httpOnly: true
  }
});
app.use(sessionOpt);
app.use(flash());

//Importando e utilizando Passport.js
import passport from "passport";
app.use(passport.initialize());
app.use(passport.session());

//Para visualização tanto documenos .json quanto arquivos .ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/../public"));

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){return next()};
  res.redirect('/auth/login');
};

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

import homeRoute from "./routes/home.js";
import registerRoute from "./routes/authentication/register.js";
import loginRoute from "./routes/authentication/login.js";
import homebolsistaRoute from "./routes/pages/home-bolsistas.js";
import handoutsRoute from "./routes/pages/handouts.js";
import tutorialsRoute from "./routes/pages/tutorials.js";
import checkliistsRoute from "./routes/pages/checklists.js";
import profileRoute from './routes/pages/profile.js';
import profileEditRoute from './routes/pages/profile-edit.js';

app.use("/", homeRoute);
app.use("/auth/register", registerRoute);
app.use("/auth/login", loginRoute);

//Essas rotas referem-se a páginas em que os usuários poderão acessar às funcionalidades
app.use("/page/home-bolsistas",ensureAuthenticated, homebolsistaRoute);
app.use("/page/profile", ensureAuthenticated, profileRoute);
app.use("/page/profile/edit", profileEditRoute);
app.use("/page/handouts", handoutsRoute);
app.use("/page/tutorials", tutorialsRoute);
app.use("/page/checklists", checkliistsRoute);

// O servidor começa a 'rodar' na porta, apenas após a conexão com o banco de dados
app.on("pronto", () => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Acesse: http://localhost:3000/`)
  });
});

export default app;
