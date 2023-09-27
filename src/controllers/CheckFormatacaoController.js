import CheckFormatacao from '../models/CheckFormatacao'

export const criarCheckFormatacao = async (req, res) => {
    try {
        const { title, items } = req.body;
        
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

export const listarCheckFormatacao = async (req, res) => {
    try {
        const checklist = await CheckFormatacao.find();

        res.status(200).json(checklist);

    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro interno ao listar os checklists de formatação'});
    };
};

export const detalhesCheckListFormatacao = async (req, res) => {
    try {
        const checklist = await CheckFormatacao.findById(req.params.id);

        if(!checklist){
            return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
        };

        res.status(200).json(checklist);

    } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro interno ao buscar o checklist de formatação.' });
    }
};

export const atualizarChecklistFormatacao = async (req, res) => {
    try {
        const { title, items} = req.body;

        const checklisAtualizado = await CheckFormatacao.findByIdAndUpdate(
            req.params.id,
            { title, items },
            { new: true }
            );

        if (!checklisAtualizado) {
            return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
        }

        res.status(200).json(checklisAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro interno ao atualizar o checklist de formatação.' });
    }
};

export const deletarChecklistFormatacao = async (req, res) => {
    try {
      const checklistDeletado = await CheckFormatacao.findByIdAndDelete(req.params.id);

      if (!checklistDeletado) {
        return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
      }

      res.status(204).send();

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao excluir o checklist de formatação.' });
    }
};

export const marcarItemConcluido = async (req, res) => {
    try {
      const { itemId } = req.params;

      const checklist = await CheckFormatacao.findById(req.params.id);

      if (!checklist) {
        return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
      }

      const item = checklist.items.id(itemId);

      if (!item) {
        return res.status(404).json({ error: 'Item do checklist de formatação não encontrado.' });
      }

      item.completed = true;

      await checklist.save();

      res.status(200).json(checklist);

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao marcar o item como concluído.' });
    }
};