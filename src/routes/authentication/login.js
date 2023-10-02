import express from 'express';
import userModel from '../../models/user-model.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(401).render('error401');
    }

    res.redirect('/'); 

  } catch (error) {
    console.error('Erro ao processar o login:', error);
    res.status(500).render('error500');
  }
});

export default router;
