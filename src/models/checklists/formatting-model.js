import mongoose from 'mongoose';
import '../../../config/database.js';
const { Schema } = mongoose;

//Esquemas que o mongoose usará para a criação dos itens e do checklist

const checklistItemSchema = new Schema({
  description: { type: String },
  completed: { type: Boolean},
});

const checkFormattingSchema = new Schema({ 
  title:{ type: String },
  items: [checklistItemSchema],
});

const checkFormattingModel = mongoose.model('checkFormattingModel', checkFormattingSchema);

export default checkFormattingModel;