import {Schema, model} from 'mongoose';
import '../../config/database.js';

const checklistItemSchema = new Schema({
    description: String,
    completed: Boolean
});

const checkNovoUsuarioSchema = new Schema({
    title: String,
    items: [checklistItemSchema]
});

const CheckNovoUsuario = model('CheckNovoUsuario', checkNovoUsuarioSchema);

export default CheckNovoUsuario;