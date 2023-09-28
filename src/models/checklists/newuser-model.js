import mongoose from 'mongoose';
import '../../../config/database.js'; 

const checklistItemSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const checkNewUserSchema = new mongoose.Schema({
  title: String,
  items: [checklistItemSchema],
});

const checkNewUserModel = mongoose.model('checkNewUserModel', checkNewUserSchema);

export default checkNewUserModel;
