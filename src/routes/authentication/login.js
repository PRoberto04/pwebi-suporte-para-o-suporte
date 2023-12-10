import express from 'express';
import passport from '../../controllers/passportLocal.js';

const router = express.Router();

//Utiliza o arquivo de visualização, para a página de login
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/password', passport.authenticate('local', {
  successRedirect: '/page/home-bolsistas',
  failureRedirect: '/auth/login',
  failureMessage: true
}));

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if(err){ return next(err) };
    res.redirect('/');
  });
});

export default router;
