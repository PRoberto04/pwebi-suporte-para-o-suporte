import express from "express";
const router = express.Router();

import userModel from "../../models/user-model.js";
import rulesModel from "../../models/rules-model.js";

import {createRule} from "../../controllers/rules-controller.js"

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
        const rules = await rulesModel.find({});

        res.render('home-bolsistas', {users, rules});
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        res.status(500).render('error/error500');
    }
});

router.get('/create-rules', (req, res)=>{
  res.render('rules-create')
});

router.post('/upload', createRule);

export default router;