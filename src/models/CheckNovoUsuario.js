import {Schema, model} from 'mongoose';
import '../../config/database';

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