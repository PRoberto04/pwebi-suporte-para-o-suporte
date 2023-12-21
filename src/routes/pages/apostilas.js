import express from "express";
import { createApostila, getApostilas } from "../../controllers/apostila-controller.js";
import upload from "../../../config/multer.js"
const router = express.Router();

//Rota responsável pela apresentação das apostilas
router.get('/', getApostilas);

//Rotas responsáveis pelaa página de "criação" de apostilas
router.get('/create', (req, res) =>{
    res.render('apostilas-create')
});

router.post('/upload', upload.single('file'), createApostila)

export default router;