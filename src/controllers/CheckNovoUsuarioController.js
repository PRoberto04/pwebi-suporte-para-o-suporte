import CheckNovoUsuario from '../models/CheckNovoUsuario.js';

export const criarCheckNovoUsuario = async (req, res) => {
    try {
        const { title, items} = req.body;
        
        if (!title || !items || !Array.isArray(items)) {
            return res.status(400).json({
                error: 'Dados inválidos'
            })
        };

        const novoCheckNovoUsuario = new CheckNovoUsuario({ title, items });

        await novoCheckNovoUsuario.save();

        res.status(201).json(novoCheckNovoUsuario);

    } catch (error) {
        
        console.error('Erro ao criar o checklist de novo usuário');
        res.status(500).json({ error: 'Ocorreu um erro interno ao criar o checklist de novo usuário'});
    }
};

export const listarChecklistNovoUsuario = async (req, res) => {
    try {
      const checklists = await CheckNovoUsuario.find();

      res.status(200).json(checklists);

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao listar os checklists de requisitos para novo usuário.' });
    }
};

export const detalhesChecklistNovoUsuario = async (req, res) => {
    try {
      const checklist = await CheckNovoUsuario.findById(req.params.id);
      if (!checklist) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }
      res.status(200).json(checklist);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao buscar o checklist de requisitos para novo usuário.' });
    }
};

export const atualizarChecklistNovoUsuario = async (req, res) => {
    try {
      const { title, items } = req.body;

      const checklistAtualizado = await CheckNovoUsuario.findByIdAndUpdate(
        req.params.id,
        { title, items },
        { new: true }
      );

      if (!checklistAtualizado) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }

      res.status(200).json(checklistAtualizado);
    
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao atualizar o checklist de requisitos para novo usuário.' });
    }
};

export const deletarChecklistNovoUsuario = async (req, res) => {
    try {
      const checklistDeletado = await CheckNovoUsuario.findByIdAndDelete(req.params.id);

      if (!checklistDeletado) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }

      res.status(204).send();

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao excluir o checklist de requisitos para novo usuário.' });
    }
};

export const marcarItemConcluido = async (req, res) => {
    try {
      const { itemId } = req.params;

      const checklist = await CheckNovoUsuario.findById(req.params.id);

      if (!checklist) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }
     
      const item = checklist.items.id(itemId);

      if (!item) {
        return res.status(404).json({ error: 'Item do checklist de requisitos para novo usuário não encontrado.' });
      }

      item.completed = true;

      await checklist.save();

      res.status(200).json(checklist);

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao marcar o item como concluído.' });
    }
  };

