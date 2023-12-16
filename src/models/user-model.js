import mongoose from 'mongoose';
import '../app.js';

const { Schema } = mongoose;

//Esquema que o mongoose usará para possibilitar a criação de um usuário
const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, index: true, unique: true, sparse: true},
    workShift: {type: String},
    numberTel: {type: String}
    // achievementChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checknewuser'},
    // computerSetupChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checkformatting'},
});

const userModel = mongoose.model('userModel', userSchema);

export default userModel;