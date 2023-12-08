import express from 'express';
import { createUser } from '../../controllers/user-controller.js';
const router = express.Router();

//Rota de registro de usuário
router.get('/', (req, res) => {
  res.render('register');
});

//Lógica básica para registro de usuário
router.post('/', createUser);

export default router;
