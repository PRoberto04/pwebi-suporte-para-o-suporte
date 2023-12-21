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

        res.redirect('../home-bolsistas');
    } catch (error) {
        console.error('Erro ao atualizar informações do perfil', error);
        res.status(500).render('error/error500');
    }
}

export const verifyCheckList = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(!user){
            throw new Error('Usuário não encontrado');
        }
        const isChecklistComplete = user.checklist.every(item => item.checked);
        user.checklistComplete = isChecklistComplete;
        await user.save();

        req.user = user;
    } catch (error) {
        console.error('Erro ao verificar a marcação do checklist:', error);
        res.status(500).render('error/error500');
    }
}

export const updateChecklistStatus = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        if (!user.checklist || !Array.isArray(user.checklist)) {
            return res.status(404).json({ error: 'Checklist não encontrado' });
        }

        if (!req.body.checklist || !Array.isArray(req.body.checklist) || !req.body.checklist.every(item => item.hasOwnProperty('label') && item.hasOwnProperty('checked'))) {
            return res.status(400).json({ error: 'Dados do checklist inválidos' });
        }
        
        user.checklist = req.body.checklist.map(item => ({
            label: item.label,
            checked: item.checked === 'true'
        }));
        
        user.checklistComplete = user.checklist.every(item => item.checked);
        await user.save();

        req.user = user;

        res.redirect('../home-bolsistas');
    } catch (error) {
        console.error('Erro ao atualizar status de checklistComplete:', error);
        res.status(500).render('error/error500');
    }
};
