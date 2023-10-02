import mongoose from 'mongoose';
import '../../config/database.js';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})

const userModel = mongoose.model('userModel', userSchema);

export default userModel;