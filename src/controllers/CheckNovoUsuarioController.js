import CheckNovoUsuario from '../models/CheckNovoUsuario';

export const criarCheckNovoUsuario = async (req, res) => {
    try {
        
        const { title, items} = req.body;
        
        if (!title || !items || !Array.isArray(items)) {
            return res.status(400).json({
                error: 'Dados inválidos'
            });
        };

        const novoCheckNovoUsuario = new CheckNovoUsuario({ title, items });

        await novoCheckNovoUsuario.save();

        res.status(201).json(novoCheckNovoUsuario);

    } catch (error) {
        
        console.error('Erro ao criar o checklist de novo usuário');
        res.status(500).json({ error: 'Ocorreu um erro interno ao criar o checklist de novo usuário'});
    }
};