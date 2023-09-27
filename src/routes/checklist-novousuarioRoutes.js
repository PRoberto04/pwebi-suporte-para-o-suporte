import express from 'express';
import {
    criarCheckNovoUsuario,
    listarChecklistNovoUsuario,
    detalhesChecklistNovoUsuario,
    atualizarChecklistNovoUsuario,
    deletarChecklistNovoUsuario,
    marcarItemConcluido
} from '../controllers/CheckNovoUsuarioController'

const router = express.Router();

router.post('/', criarCheckNovoUsuario);
router.get('/', listarChecklistNovoUsuario);
router.get('/:id', detalhesChecklistNovoUsuario);
router.put('/:id', atualizarChecklistNovoUsuario);
router.delete('/:id', deletarChecklistNovoUsuario);
router.put('/:id/marcar-item/:itemId', marcarItemConcluido);

export default router;
