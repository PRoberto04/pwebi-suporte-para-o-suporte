import mongoose from 'mongoose';
import '../../config/database.js'; 

const checklistItemSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const checkNovoUsuarioSchema = new mongoose.Schema({
  title: String,
  items: [checklistItemSchema],
});

const CheckNovoUsuario = mongoose.model('CheckNovoUsuario', checkNovoUsuarioSchema);

export default CheckNovoUsuario;
