import express from 'express';
import {
    createCheckFormatting,
    listCheckFormatting,
    detailsCheckFormatting,
    toUpdateCheckFormatting,
    deleteCheckFormatting,
    markItemCompleted
} from '../../../controllers/checklists/formatting-controller.js'

const router = express.Router();

router.post('/', createCheckFormatting);
router.get('/', listCheckFormatting);
router.get('/:id', detailsCheckFormatting);
router.put('/:id', toUpdateCheckFormatting);
router.delete('/:id', deleteCheckFormatting);
router.put('/:id/mark-item/:itemId', markItemCompleted);

export default router;
