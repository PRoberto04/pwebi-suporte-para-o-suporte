import express from "express";
const router = express.Router();

//Rota de acesso à página inicial livre para todos usuários
router.get('/', (req, res) =>{
    res.render('home');
});

export default router;