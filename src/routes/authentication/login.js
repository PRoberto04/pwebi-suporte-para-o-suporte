import express from 'express';
import passport from '../../auth/googleStrategy-passport.js'; // Importe a estratégia do Google

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/oauth2/redirect/google', passport.authenticate('google', 
  { successRedirect: '/page/home-bolsistas',
    failureRedirect: '/login', 
    failureMessage: true })
);

router.get('/logout', (req, res) => {
  req.logout(); 
  res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('login');
});

export default router;