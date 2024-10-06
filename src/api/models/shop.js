const mongoose = require("mongoose");

let shopSchema = new mongoose.Schema ({
    nombre: {type:String, required: true},
    direccion: {type: String, required: true},
    horario: {type: String},
    plazo_de_envio: {type: String},
    televisiones: [{type: mongoose.Types.ObjectId, ref:"televisions"}],
},
{
    timestamps: true,
    collection: "shops",
    versionKey: false
})

const Shop = mongoose.model("shops", shopSchema, "shops");

module.exports = Shop;
