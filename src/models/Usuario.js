import mongoose from 'mongoose';
import '../../config/database.js';

const usuarioSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CheckNovoUsuario'
    },
    computerSetupChecklist: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CheckFormatacao'
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
