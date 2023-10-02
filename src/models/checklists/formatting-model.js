import mongoose from 'mongoose';
import '../../../config/database.js';
const { Schema } = mongoose;

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