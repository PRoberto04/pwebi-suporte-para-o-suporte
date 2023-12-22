import express from "express";
import { createTutorial, getTutorials} from "../../controllers/tutorial-controller.js";
import {uploadTutorial} from "../../../config/multer.js";
const router = express.Router();

//Rota de acesso aos tutoriais
router.get('/', getTutorials);

//Rotas responsáveis pela página de "criação" de um tutorial
router.get('/create', (req, res)=>{
    res.render('tutorials-create');
});

router.post('/upload', uploadTutorial.single('file'), createTutorial);
export default router;