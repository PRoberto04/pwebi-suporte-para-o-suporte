import express from 'express';
import passport from '../../auth/localStrategy-passport.js';
import googlePassport from '../../auth/googleStrategy-passport.js'; 

//Rotas de autenticação

const router = express.Router();

//Estratégia local
router.post('/local', passport.authenticate('local', { failureRedirect: '../register' }),
  function(req, res) {
    res.redirect('/');
  }
);

//Estratégia de autenticação com google
//Implementar método para salvar esses usuários que se autnticam pelo google no banco de dados
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout(); 
  res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('login');
});

export default router;
