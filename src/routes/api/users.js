import express from 'express';
import {
    createUser,
    listUsers,
    detailUser,
    toUpdateUser,
    deleteUser
} from '../../controllers/user-controller.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', detailUser);
router.put('/:id', toUpdateUser);
router.delete('/:id', deleteUser);

export default router;