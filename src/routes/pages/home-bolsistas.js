import express from "express";
const router = express.Router();

import userModel from "../../models/user-model.js";

const checkFieldsMiddleware = async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
          const user = await userModel.findById(req.user._id);
          if (user && user.workShift && user.numberTel) {
            next();
          } else {
            return res.redirect('/page/profile/edit');
          }
        } else {
          // Não redirecionar se o usuário não estiver autenticado
          next();
        }
    } catch (error) {
      console.error('Erro ao verificar campos do usuário', error);
      res.status(500).render('error/error500');
    }
  };

router.get('/', checkFieldsMiddleware, async (req, res) =>{
    try {
        const users = await userModel.find({}, 'name workShift numberTel');

        res.render('home-bolsistas', {users});
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;