import tutorialModel from '../models/tutorial-model.js';

export const createTutorial = async(req, res) =>{
    try {
        const newTutorial = new tutorialModel({
            title: req.body.title,
            fileName: req.file.filename
        });

        await newTutorial.save();
    } catch (error) {
        console.error(error);
        res.render('error/error500');
    }
}

export const getTutorials = async(req, res)=>{
    try {
        const documents = await tutorialModel.find({});
        res.render('tutorials', { documents});
    } catch (error) {
        console.error(error);
        res.render('error/error500');
    }
}