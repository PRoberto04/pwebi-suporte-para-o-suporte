import checkNewUserModel from '../../models/checklists/newuser-model.js';

export const createCheckNewUser = async (req, res) => {
    try {
        const { title, items} = req.body;
        
        if (!title || !items || !Array.isArray(items)) {
            return res.status(400).json({
                error: 'Dados inválidos'
            })
        };

        const newCheckNewUser = new checkNewUserModel({ title, items });

        await newCheckNewUser.save();

        res.status(201).json(newCheckNewUser);

    } catch (error) {
        
        console.error('Erro ao criar o checklist de novo usuário');
        res.status(500).json({ error: 'Ocorreu um erro interno ao criar o checklist de novo usuário'});
    }
};

export const listCheckNewUser = async (req, res) => {
    try {
      const checklists = await checkNewUserModel.find();

      res.status(200).json(checklists);

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao listar os checklists de requisitos para novo usuário.' });
    }
};

export const detailCheckNewUser = async (req, res) => {
    try {
      const checklist = await checkNewUserModel.findById(req.params.id);
      if (!checklist) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }
      res.status(200).json(checklist);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao buscar o checklist de requisitos para novo usuário.' });
    }
};

export const toUpdatecheckNewUser = async (req, res) => {
    try {
      const { title, items } = req.body;

      const updatedNewUser = await checkNewUserModel.findByIdAndUpdate(
        req.params.id,
        { title, items },
        { new: true }
      );

      if (!updatedNewUser) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }

      res.status(200).json(updatedNewUser);
    
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao atualizar o checklist de requisitos para novo usuário.' });
    }
};

export const deleteCheckNewUser = async (req, res) => {
    try {
      const deletedCheck = await checkNewUserModel.findByIdAndDelete(req.params.id);

      if (!deletedCheck) {
        return res.status(404).json({ error: 'Checklist de requisitos para novo usuário não encontrado.' });
      }

      res.status(204).send();

    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro interno ao excluir o checklist de requisitos para novo usuário.' });
    }
};

export const markItemCompleted = async (req, res) => {
    try {
      const { itemId } = req.params;

      const checklist = await checkNewUserModel.findById(req.params.id);

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

