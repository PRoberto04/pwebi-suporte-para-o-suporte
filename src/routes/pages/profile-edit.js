import express from "express";
import {updateProfile} from '../../controllers/user-controller.js'
const router = express.Router();

router.get('/', (req, res) => {
    res.render('profile-edit', {user: req.user});
});

router.post('/update', updateProfile);

export default router;