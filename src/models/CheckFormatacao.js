import {Schema, model} from "mongoose";
import '../../config/database.js';

const checklistItemSchema = new Schema({
    description: String,
    completed: Boolean
});

const checkFormatacaoSchema = new Schema({
    title: String,
    items: [checklistItemSchema]
});

const CheckFormatacao = model('CheckFormatacao', checkFormatacaoSchema);

export default CheckFormatacao;