import express from 'express';
import {
    criarUsuario,
    listarUsuarios,
    detalhesUsuario,
    deletarUsuario,
    atualizarUsuario
} from '../controllers/UsuarioController';

const router = express.Router();

router.post('/', criarUsuario);
router.get('/', listarUsuarios);
router.get('/:id', detalhesUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

export default router;