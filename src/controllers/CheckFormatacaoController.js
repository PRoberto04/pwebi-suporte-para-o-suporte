import CheckFormatacao from '../models/CheckFormatacao'

export const criarCheckFormatacao = async (req, res) => {
    try {
        const {title, items} = req.body;
        
        if (!title || !items || !Array.isArray(items)) {
            return res.status(400).json({
                error: 'Dados inválidos'
            });
        }

        const novoCheckFormatacao = new CheckFormatacao({ title, items });

        await novoCheckFormatacao.save();

        res.status(201).json(novoCheckFormatacao);
    } catch (error) {
        
        console.error('Erro ao criar o checklist de formatação: ', error);
        res.status(500).json({
            error: 'Ocorreu um erro interno ao criar o checklist de formatação.'
        });
    }
};