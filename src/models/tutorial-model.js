import mongoose from "mongoose";
import '../app.js';

const {Schema} = mongoose;

const tutorialSchema = new Schema({
    title: {type: String, require: true},
    fileName: {type: String, require: true}
});

const tutorialModel = mongoose.model('tutorialModel', tutorialSchema);

export default tutorialModel;