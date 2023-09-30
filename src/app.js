import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.set('views', path.join(__dirname, 'src', 'views'));
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
app.use('/authentication/register', registerRoute);
app.use('/authentication/login', loginRoute);
app.use('/pages/home-bolsistas', homebolsistaRoute);
app.use('/pages/handouts', handoutsRoute);
app.use('/pages/tutorials', tutorialsRoute);
app.use('/api/checklists/newuser', checknewuserRoute);
app.use('/api/checklists/formatting', checkformattingRoute);

export default app;
