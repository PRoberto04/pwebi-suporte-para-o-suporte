import mongoose from 'mongoose';
import '../app.js';

const {Schema} = mongoose;

const apostilaSchema = new Schema({
    title: {type: String, require: true},
    fileName: {type: String, require: true}
});

const apostilaModel = mongoose.model('apostilaModel', apostilaSchema);

export default apostilaModel;