import express from "express";
const router = express.Router();

router.get('/', (req, res) =>{
    console.log("A rota check list novatos está Ok!");
});

export default router;