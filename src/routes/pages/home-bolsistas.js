import express from "express";
const router = express.Router();

//Rota de acesso à usuários já logados
//Implementar token de verificação
router.get('/', (req, res) =>{
    res.render('home-bolsistas');
});

export default router;