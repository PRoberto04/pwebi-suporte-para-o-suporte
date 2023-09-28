import express from 'express';
import {
    createCheckNewUser,
    listCheckNewUser,
    detailCheckNewUser,
    toUpdatecheckNewUser,
    deleteCheckNewUser,
    markItemCompleted
} from '../../../controllers/checklists/newuser-controller.js'

const router = express.Router();

router.post('/', createCheckNewUser);
router.get('/', listCheckNewUser);
router.get('/:id', detailCheckNewUser);
router.put('/:id', toUpdatecheckNewUser);
router.delete('/:id', deleteCheckNewUser);
router.put('/:id/mark-item/:itemId', markItemCompleted);

export default router;
