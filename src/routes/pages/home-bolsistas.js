import express from "express";
const router = express.Router();

router.get('/', (req, res) =>{
    console.log("A rota de início está Ok!");
});

export default router;