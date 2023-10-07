import mongoose from 'mongoose';
import '../../config/database.js';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    achievementChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checknewuser'},
    computerSetupChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checkformatting'},

    googleId: { type: String }, 
    googleName: { type: String }
});

userSchema.methods.verifyPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  };

const userModel = mongoose.model('userModel', userSchema);

export default userModel;