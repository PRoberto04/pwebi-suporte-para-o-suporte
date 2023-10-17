import express from 'express';
import passport from 'passport';
import '../../auth/google.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }, { successRedirect: '/', failureRedirect: '/login' })(req, res));

router.get('/google/callback', passport.authenticate('google', function (req, res) {
  res.redirect('/page/home-bolsistas'); 
}));

export default router;