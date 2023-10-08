import express from 'express';
import userModel from '../../models/user-model.js';
const router = express.Router();

//Rota de registro de usuário
router.get('/', (req, res) => {
  res.render('register');
});

//Lógica básica para registro de usuário
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).render('error409');
    }

    const newUser = new userModel({ name, email, password });

    await newUser.save();

    res.redirect('/auth/login');

  } catch (error) {
    console.error('Erro ao processar o registro:', error);
    res.status(500).render('error500'); 
  }
});

export default router;
