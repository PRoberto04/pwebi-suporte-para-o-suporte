import express from "express";
const router = express.Router();

//Rota de acesso aos tutoriais
router.get('/', (req, res) =>{
    res.render('tutorials')
});

export default router;