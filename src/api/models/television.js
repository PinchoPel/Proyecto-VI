const mongoose = require("mongoose");

let televisionSchema = new mongoose.Schema({
    imagen: {type: String, require: true},
    pantalla: {type:String, require: true},
    marca: {type: String, require: true},
    tecnología: {type: String, require: true},
    precio: {type: Number, require: true}
},
{
    timestamps: true,
    collection: "televisions",
    versionKey: false
})

const Television = mongoose.model("televisions", televisionSchema,"televisions");

module.exports = Television;