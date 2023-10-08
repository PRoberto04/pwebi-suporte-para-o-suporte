import express from "express";
const router = express.Router();

//Rota para acesso às apostilas
router.get('/', (req, res) =>{
    res.render('handouts')
});

export default router;