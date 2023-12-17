import mongoose from 'mongoose';
import '../app.js';

const { Schema } = mongoose;

//Esquema que o mongoose usará para possibilitar a criação de um usuário
const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, index: true, unique: true, sparse: true},
    workShift: {type: String},
    numberTel: {type: String},
    days: { type: [String], default: [] },
    checklist:  {type: [{ label: String, checked: {type: Boolean, default: false}}], default: []},
    checklistComplete: {type: Boolean, default: false}
});

userSchema.statics.createDefaultChecklist = async function (userId) {
    try {
        const user = await this.findById(userId);

        if (!user) {
            console.log('Usuário não encontrado');
            return;
        }

        user.checklist.push(
            { label: 'Recebeu fardamento do Serviço Social?', checked: false },
            { label: 'Recebeu a chave do armário?', checked: false },
            { label: 'Leu as normas do setor?', checked: false },
            { label: 'Definiu sua escala de atuação?', checked: false },
            { label: 'Já conheceu as bancas e ferramentas?', checked: false },
            { label: 'Começou a ler alguma apostila?', checked: false }   
        );

        await user.save();
    } catch (error) {
        console.error('Erro ao criar checklist padrão:', error);
    }
};

const userModel = mongoose.model('userModel', userSchema);

export default userModel;