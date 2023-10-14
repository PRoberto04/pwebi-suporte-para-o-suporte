import express from 'express';
import passport from '../../auth/localStrategy-passport.js';
import '../../auth/googleStrategy-passport.js'; 

//Rotas de autenticação

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});


//Estratégia de autenticação com google
//Implementar método para salvar esses usuários que se autnticam pelo google no banco de dados
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  console.log('Reached /google/callback route');
  res.redirect('/page/home-bolsistas');
}
);

//Estratégia local
router.post('/local', passport.authenticate('local', { failureRedirect: '../login' }),
  function(req, res) {
    res.redirect('/page/home-bolsistas');
  }
);

router.get('/logout', (req, res) => {
  req.logout(); 
  res.redirect('/');
});

export default router;
