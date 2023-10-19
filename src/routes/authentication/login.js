import express from 'express';
import userModel from '../../models/user-model.js';

const router = express.Router();

//Utiliza o arquivo de visualização, para a página de login
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    const passwordMatch = await userModel.findOne( { password })

    if (!user) {
      return res.status(401).render('/error401');
    }

    if(!passwordMatch){
      return res.status(401).render('/error401');
    }

    res.redirect('/page/home-bolsistas'); 

  } catch (error) {
    console.error('Erro ao processar o login:', error);
    res.status(500).render('/error500');
  }
  }
);
export default router;
