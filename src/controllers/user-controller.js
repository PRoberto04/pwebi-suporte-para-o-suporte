import userModel from '../models/user-model.js';

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ erro: 'Dados inválidos' });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).render('error/error409');
        }

        const newUser = new userModel({ name, email, password, workShift: "", numberTel: ""});
        await newUser.save();

        req.login(newUser, (loginErr) => {
            if (loginErr) {
                console.error('Erro ao realizar o login automático:', loginErr);
                return res.status(500).render('error/error500');
            }

            return res.redirect('/page/home-bolsistas');
        });

    } catch (error) {
        
        console.error('Erro ao criar o usuário', error);
       res.status(500).render('error/error500');
    }
};

export const addNumAndTel = async (req, res) =>{
    try {
        const {workShift, numberTel} = req.body;

        const user = await userModel.findByIdAndUpdate(
            req.user.id,
            {workShift, numberTel},
            {new: true},
        );
            
        if(!user){return res.status(404).json({error: 'Usuário não encontrado'})}

        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao atualizar informações do perfil', error);
        res.status(500).render('error/error500');
    }
}

export const createPassword = async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ erro: 'As senhas não coincidem. Tente novamente.' });
        }

        const userId = req.user.id;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        };

        user.password = password;
        await user.save();

        req.login(user, (loginErr) => {
            if (loginErr) {
                console.error('Erro ao realizar o login automático:', loginErr);
                return res.status(500).render('error/error500');
            }

            return res.redirect('/page/home-bolsistas');
        });
    } catch (error) {
        console.error('Erro ao criar a senha do usuário', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};