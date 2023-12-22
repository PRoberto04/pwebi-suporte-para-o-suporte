import mongoose from "mongoose";
import "../app.js";

const {Schema} = mongoose;

const rulesSchema = new Schema({
    title: {type: String, require: true},
    bodyRule: {type: String, require: true}
});

const rulesModel = mongoose.model('rulesModel', rulesSchema);

export default rulesModel;