import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
