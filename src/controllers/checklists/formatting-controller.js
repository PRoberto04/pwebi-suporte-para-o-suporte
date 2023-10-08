import checkFormattingModel from '../../models/checklists/formatting-model.js'

//Controlador que fornece as funções CRUD do checklst de formatação

export const createCheckFormatting = async (req, res) => {
    try {
        const { title, items } = req.body;
        
        if (!title || !items || !Array.isArray(items)) {
            return res.status(400).json({ error: 'Dados inválidos' });
        }

        const newCheckFormatting = new checkFormattingModel({ title, items });

        await newCheckFormatting.save();

        res.status(201).json(newCheckFormatting);
    } catch (error) {
        
        console.error('Erro ao criar o checklist de formatação: ', error);
        res.status(500).json({
            error: 'Ocorreu um erro interno ao criar o checklist de formatação.'
        });
    }
};

export const listCheckFormatting = async (req, res) => {
    try {
        const checklist = await checkFormattingModel.find();

        res.status(200).json(checklist);

    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro interno ao listar os checklists de formatação'});
    };
};

export const detailsCheckFormatting = async (req, res) => {
    try {
        const checklist = await checkFormattingModel.findById(req.params.id);

        if(!checklist){
            return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
        };

        res.status(200).json(checklist);

    } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro interno ao buscar o checklist de formatação.' });
    }
};

export const toUpdateCheckFormatting = async (req, res) => {
    try {
        const { title, items} = req.body;

        const updatedFormatting = await checkFormattingModel.findByIdAndUpdate(
            req.params.id,
            { title, items },
            { new: true }
            );

        if (!updatedFormatting) {
            return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
        }

        res.status(200).json(updatedFormatting);
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro interno ao atualizar o checklist de formatação.' });
    }
};

export const deleteCheckFormatting = async (req, res) => {
    try {
      const deletedCheck = await checkFormattingModel.findByIdAndDelete(req.params.id);

      if (!deletedCheck) {
        return res.status(404).json({ error: 'Checklist de formatação não encontrado.' });
      }

      res.status(204).send();

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao excluir o checklist de formatação.' });
    }
};

export const markItemCompleted = async (req, res) => {
    try {
      const { itemId } = req.params;

      const checklist = await checkFormattingModel.findById(req.params.id);

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