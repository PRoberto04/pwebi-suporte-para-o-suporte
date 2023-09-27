import express from 'express';

const app = express();

app.use(express.json());

import rootRoute from "./routes/root.js";
import registroRoute from "./routes/registro.js";
import conecteRoute from "./routes/conecte.js";
import inicioRoute from "./routes/inicio.js";
import checklistRoute from "./routes/check-list.js";
import checklistformatacaoRoute from "./routes/check-list-formatacao.js";
import apostilasRoute from "./routes/apostilas.js";
import tutoriaisRoute from "./routes/tutoriais.js";

app.use('/', rootRoute);
app.use('/registro', registroRoute);
app.use('/conecte', conecteRoute);
app.use('/inicio', inicioRoute);
app.use('/check-list', checklistRoute);
app.use('/check-list-formatacao', checklistformatacaoRoute);
app.use('/apostilas', apostilasRoute);
app.use('/tutoriais', tutoriaisRoute);

import usuarioRoutes from './routes/usuarioRoutes.js'
import checkFormatacaoRoutes from './routes/checklist-formatacaoRoutes.js'
import checkNovoUsuarioRoutes from './routes/checklist-novousuarioRoutes.js';

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/checklist-formatacao', checkFormatacaoRoutes);
app.use('/api/checklist-novousuario', checkNovoUsuarioRoutes);

export default app;
