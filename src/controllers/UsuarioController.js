import Usuario from '../models/Usuario';

export const criarUsuario = async (req, res) => {
    try {
        
        const {nome, email, senha} = req.body;
        
        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: 'Dados inválidos'
            });
        }

        const usuarioExistente = await Usuario.findOne({ email });

        if (usuarioExistente) {
            return res.status(409).json({
                error: ' Já existe um usuário com este email'
            });
        }

        const novoUsuario = new Usuario({ nome, email, senha});

        await novoUsuario.save();

        res.status(201).json(novoUsuario);

    } catch (error) {
        
        console.error('Erro ao criar o usuário', error);
        res.status(500).json({ error: 'Ocorreu um erro interno ao criar o usuário'})
    }
};

export const listarUsuarios = async(req, res) => {
    try {
        
        const usuarios = await Usuario.find();

        res.status(200).json(usuarios);

    } catch (error) {
        res.status(500).json({ error: 'Erro interno ao listar usuários'})
    }
};

export const detalhesUsuario = async(req, res) => {
    try {
        
        const usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuario não encontrado.'
            });
        };

        res.status(200).json(usuario);
    } catch (error) {

        res.status(500).json({ error: 'Ocorreu um erro interno ao buscar o usuário'})
    }
};

export const atualizarUsuario = async (req, res) => {
    try {

        const { name, email, senha} = req.body;
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nome, email, senha },
            { new: true }
        );

        if (!usuarioAtualizado) {
            return res.status(404).json({ error: 'Usuário não encontrado'})
        };
        
        res.status(200).json(usuarioAtualizado);

    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um errp interno ao atualizar o usuário'})
    }
};

export const deletarUsuario = async (req, res) => {
    try {

        const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
        
        if (!usuarioDeletado) {
            return res.status(404).json({ error: 'Usuário não encontrado'})
        };

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro interno ao excluir o usuário'})
    }
};

