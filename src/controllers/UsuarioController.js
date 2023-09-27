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
        
    }
}