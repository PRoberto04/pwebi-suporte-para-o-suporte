import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});


export default router;