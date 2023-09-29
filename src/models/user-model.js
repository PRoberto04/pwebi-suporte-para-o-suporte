import mongoose from 'mongoose';
import '../../config/database.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    achievementChecklist: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'checknewuser'
    },
    computerSetupChecklist: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'checkformatting'
    }
});

const userModel = mongoose.model('userModel', userSchema);

export default userModel;
