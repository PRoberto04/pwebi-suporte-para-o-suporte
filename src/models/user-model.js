import mongoose from 'mongoose';
import '../../config/database.js';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

//Esquema que o mongoose usará para possibilitar a criação de um usuário
const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    achievementChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checknewuser'},
    computerSetupChecklist: { type: mongoose.Schema.Types.ObjectId, ref: 'checkformatting'},
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

//Função para verificar se a senha fornecida pelo usuário é a mesma armazenada no banco de dados
userSchema.methods.verifyPassword = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    throw new Error('Erro na verificação da senha: ' + error.message);
  }
    };

const userModel = mongoose.model('userModel', userSchema);

export default userModel;