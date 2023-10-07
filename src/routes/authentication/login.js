import express from 'express';
import passport from '../../auth/localStrategy-passport.js';
import googlePassport from '../../auth/googleStrategy-passport.js'; // Importe a estratégia do Google

const router = express.Router();

router.post('/local', passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

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
