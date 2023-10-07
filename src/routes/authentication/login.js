import express from 'express';
import passport from '../../auth/localStrategy-passport.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/');

});

export default router;
