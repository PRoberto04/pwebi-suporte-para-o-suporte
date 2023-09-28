import express from "express";
const router = express.Router();

router.get('/', (req, res) =>{
    console.log("A rota de registro está Ok!");
});

export default router;