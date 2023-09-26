import {Schema, model} from 'mongoose';
import '../../config/database';

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },

    achievementChecklist: {
        type: mongoose.Schema.Types.ObjectId, ref: 'CheckNovoUsuario'
    },
    computerSetupChecklist: {
        type: mongoose.Schema.Types.ObjectId, ref: 'CheckFormatacao'
    }
});

const Usuario = model('Usuario', usuarioSchema)

export default Usuario;
