const mongoose = require("mongoose");
const Shop = require("../../api/models/shop");
const allShops = require("../../data/shop");



const launchSeed = async () => {
    try {
        await mongoose.connect("mongodb+srv://proyectovi:WtSMsy0HeGA0lGCf@cluster0.rnqek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        await Shop.collection.drop();
        await Shop.insertMany(allShops);
        console.log("Datos de tiendas restaurados");
        await mongoose.disconnect();
    } catch (error) {
        console.log("No se ha podido restaurar la bbdd");
    }
}

launchSeed();