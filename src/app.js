import express from 'express';
import session from 'express-session';
import flash from 'express-flash';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import passport from 'passport';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

function generateSessionSecret(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let secret = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      secret += charset[randomIndex];
    }
  
    return secret;
  }

  const sessionSecret = generateSessionSecret(14);

app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: true }));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

import homeRoute from "./routes/home.js";
import registerRoute from "./routes/authentication/register.js";
import loginRoute from "./routes/authentication/login.js";
import homebolsistaRoute from "./routes/pages/home-bolsistas.js";
import handoutsRoute from "./routes/pages/handouts.js";
import tutorialsRoute from "./routes/pages/tutorials.js";
import checknewuserRoute from "./routes/api/checklists/newuser.js";
import checkformattingRoute from "./routes/api/checklists/formatting.js";

app.use('/', homeRoute);
app.use('/auth/register', registerRoute);
app.use('/auth/login', loginRoute);
app.use('/pages/home-bolsistas', homebolsistaRoute);
app.use('/pages/handouts', handoutsRoute);
app.use('/pages/tutorials', tutorialsRoute);
app.use('/api/checklists/newuser', checknewuserRoute);
app.use('/api/checklists/formatting', checkformattingRoute);


export default app;
