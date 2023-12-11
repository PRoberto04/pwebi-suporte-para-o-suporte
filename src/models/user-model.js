import mongoose from 'mongoose';
import '../app.js';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

//Esquema que o mongoose usará para possibilitar a criação de um usuário
const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    workShift: {type: String},
    numberTel: {type: String}
    // achievementChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checknewuser'},
    // computerSetupChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checkformatting'},
});

// Função para criptografar a senha antes de salvar no banco de dados
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
      try {
          const salt = await bcrypt.genSalt(10);
          this.password = await bcrypt.hash(this.password, salt);
      } catch (error) {
          return next(error);
      }
  }
  return next();
});

//Função para verificar se a senha fornecida pelo usuário coresponde ao hash armazenado no banco de dados
userSchema.methods.verifyPassword = async function (candidatepassword) {
  try {
    return await bcrypt.compare(candidatepassword, this.password);
  } catch (error) {
    throw error;
  }
    };

const userModel = mongoose.model('userModel', userSchema);

export default userModel;