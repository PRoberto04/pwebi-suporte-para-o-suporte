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

        const newUser = new userModel({ name, email, password});

        await newUser.save();

        res.status(201).json(newUser);

    } catch (error) {
        
        console.error('Erro ao criar o usuário', error);
       res.status(500).render('error/error500');
    }
};

export const listUsers = async(req, res) => {
    try { 
        const users = await userModel.find();

        res.status(200).json(users);

    } catch (error) {
       res.status(500).render('error500');
    }
};

export const detailUser = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'Usuario não encontrado.' });
        };

        res.status(200).json(user);
    } catch (error) {

       res.status(500).render('error500');
    }
};

export const toUpdateUser = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            { name, email, password },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado'})
        };
        
        res.status(200).json(updatedUser);

    } catch (error) {
       res.status(500).render('error500');
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado'})
        };

        res.status(204).send();
        
    } catch (error) {
       res.status(500).render('error500');
    }
};
