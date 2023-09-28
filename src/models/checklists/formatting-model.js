import mongoose from 'mongoose';
import '../../../config/database.js';

const checklistItemSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const checkFormattingSchema = new mongoose.Schema({ 
  title: String,
  items: [checklistItemSchema],
});

const checkFormattingModel = mongoose.model('checkFormattingModel', checkFormattingSchema);

export default checkFormattingModel;
