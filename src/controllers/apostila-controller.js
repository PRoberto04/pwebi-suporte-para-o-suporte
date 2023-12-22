import apostilaModel from '../models/apostila-model.js';

export const createApostila = async(req, res) =>{
    try {
        const newApostila = new apostilaModel({
            title: req.body.title,
            fileName: req.file.filename
        });

        await newApostila.save();
    } catch(error){
        console.error(error)
        res.render('error/error500');
    }
}

export const getApostilas = async (req, res) => {
    try {
        const documents = await apostilaModel.find({});
        res.render('apostilas', { documents });
    } catch (error) {
        console.error(error);
        res.render('error/error500');
    }
}