const mongoose = require("mongoose");
const Television = require("../../api/models/television");
const allTelevision = require("../../data/television");

const launchSeed = async () => {
    try {
        await mongoose.connect("mongodb+srv://proyectovi:WtSMsy0HeGA0lGCf@cluster0.rnqek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        await Television.collection.drop();
        await Television.insertMany(allTelevision);
        console.log("Datos de televisiones restaurados");
        await mongoose.disconnect();
    } catch (error) {
        console.log("No se ha podido restaurar la bbdd");
    }
}

launchSeed();