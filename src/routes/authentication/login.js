import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

// Rota para processar o login do usuário
router.post('/', (req, res) => {
  // Implemente a lógica para processar o login do usuário
});

export default router;
