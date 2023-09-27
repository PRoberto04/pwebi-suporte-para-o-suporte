import mongoose from 'mongoose';
import '../../config/database.js';

const checklistItemSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const checkFormatacaoSchema = new mongoose.Schema({ 
  title: String,
  items: [checklistItemSchema],
});

const CheckFormatacao = mongoose.model('CheckFormatacao', checkFormatacaoSchema);

export default CheckFormatacao;
