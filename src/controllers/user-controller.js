import userModel from '../models/user-model.js';

export const updateProfile = async (req, res) =>{
    try {
        const {workShift, numberTel, options} = req.body;

        const user = await userModel.findByIdAndUpdate(
            req.user._id,
            {workShift, numberTel, days: options || []},
            {new: true},
        );
            
        if(!user){return res.status(404).json({error: 'Usuário não encontrado'})}

        res.redirect('../../home-bolsistas');
    } catch (error) {
        console.error('Erro ao atualizar informações do perfil', error);
        res.status(500).render('error/error500');
    }
}

