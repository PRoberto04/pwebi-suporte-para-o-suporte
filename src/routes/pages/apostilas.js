import express from "express";
import { createApostila, getApostilas } from "../../controllers/apostila-controller.js";
import {uploadApostila} from "../../../config/multer.js"
const router = express.Router();

//Rota responsável pela apresentação das apostilas
router.get('/', getApostilas);

//Rotas responsáveis pela página de "criação" de apostilas
router.get('/create', (req, res) =>{
    res.render('apostilas-create');
});

router.post('/upload', uploadApostila.single('file'), createApostila);

export default router;