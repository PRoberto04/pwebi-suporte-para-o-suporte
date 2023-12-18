import express from "express";
import {updateChecklistStatus, verifyCheckList} from "../../controllers/user-controller.js"
const router = express.Router();

//Rota para acesso à funcionalidade checklist 
router.get('/', async (req, res) =>{
    try {
        await verifyCheckList(req, res);
        res.render('checklists', {user: req.user});
        
    } catch (error) {
        console.error('Erro ao renderizar a página do checklist:', error);
        res.status(500).render('error/error500');
    }
});

router.post('/submit', updateChecklistStatus);

export default router;