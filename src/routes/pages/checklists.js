import express from "express";
const router = express.Router();

//Rota para acesso à funcionalidade checklist 
router.get('/', (req, res) =>{
    res.render('checklists')
});

export default router;