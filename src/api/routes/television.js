const  {getTelevision, postTelevision, putTelevision, deleteTelevision, getByPriceTelevision, getBySizeTelevision, getByBrandTelevision} = require("../controllers/television")

const televisionRoutes = require("express").Router();

televisionRoutes.get("/maxprecio/:precio", getByPriceTelevision);
televisionRoutes.get("/maxpulgadas/:screenSize", getBySizeTelevision);
televisionRoutes.get("/marca/:marca", getByBrandTelevision);
televisionRoutes.get("/", getTelevision);

televisionRoutes.post("/", postTelevision);

televisionRoutes.put("/:id",putTelevision);

televisionRoutes.delete("/:id",deleteTelevision);

module.exports = televisionRoutes;

