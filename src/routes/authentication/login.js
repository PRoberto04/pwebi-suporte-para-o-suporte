import express from 'express';
import passport from 'passport';
import '../../auth/google.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/auth/login',
    successRedirect: '/page/home-bolsistas'
  }));

export default router;