import rulesModel from "../models/rules-model.js";

export const createRule = async(req, res)=>{
    try {
        const newRule = new rulesModel({
            title: req.body.title,
            bodyRule: req.body.bodyRule
        });

        await newRule.save();
    } catch (error) {
        console.error(error);
        res.render('error/error500');
    }
}