import mongoose from 'mongoose';
import '../../../config/database.js'; 
const { Schema } = mongoose;

const checklistItemSchema = new Schema({
  description: { type: String },
  completed: { type: Boolean},
});

const checkNewUserSchema = new Schema({
  title: { type: String },
  items: [checklistItemSchema]
});

const checkNewUserModel = mongoose.model('checkNewUserModel', checkNewUserSchema);

export default checkNewUserModel;
