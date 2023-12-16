import express from 'express';
const router = express.Router();

//Rota de registro de usuário
router.get('/', (req, res) => {
  res.render('register');
});

export default router;
