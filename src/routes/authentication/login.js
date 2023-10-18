import express from 'express';
import passport from 'passport';
import '../../auth/localStrategy.js'

const router = express.Router();

//Utiliza o arquivo de visualização, para a página de login
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/local', 
  passport.authenticate('local', {failureRedirect: '/auth/login'}),
  function(req, res){
    res.redirect('/page/home-bolsistas');
  }
)

export default router;