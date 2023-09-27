import express from 'express';
import {
    criarCheckFormatacao,
    listarCheckFormatacao,
    detalhesCheckListFormatacao,
    atualizarChecklistFormatacao,
    deletarChecklistFormatacao,
    marcarItemConcluido
} from '../controllers/CheckFormatacaoController'

const router = express.Router();

router.post('/', criarCheckFormatacao);
router.get('/', listarCheckFormatacao);
router.get('/:id', detalhesCheckListFormatacao);
router.put('/:id', atualizarChecklistFormatacao);
router.delete('/:id', deletarChecklistFormatacao);
router.put('/:id/marcar-item/:itemId', marcarItemConcluido);

export default router;
