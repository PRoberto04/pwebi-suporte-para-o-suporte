import express from "express";
const router = express.Router();

import userModel from "../../models/user-model.js";

router.get('/', async (req, res) =>{
    try {
        const users = await userModel.find({}, 'name workShift numberTel');

        res.render('home-bolsistas', {users});
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;