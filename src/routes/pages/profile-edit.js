import express from "express";
import {addNumAndTel} from '../../controllers/user-controller.js'
const router = express.Router();

router.get('/', (req, res) => {
    res.render('profile-edit', {user: req.user});
});

router.post('/update', addNumAndTel);

export default router;