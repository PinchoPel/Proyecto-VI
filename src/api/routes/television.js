const  {getTelevision, postTelevision, putTelevision, deleteTelevision, getByPriceTelevision, getBySizeTelevision, getByBrandTelevision} = require("../controllers/television")

const televisionRoutes = require("express").Router();

televisionRoutes.get("/maxprecio/:precio", getByPriceTelevision);//buscar televisor por precio máximo

televisionRoutes.get("/maxpulgadas/:screenSize", getBySizeTelevision);//buscar televisor por máximo de pulgadas
televisionRoutes.get("/marca/:marca", getByBrandTelevision);//buscar una marca de televisión (no aparece en qué tienda está)
televisionRoutes.get("/", getTelevision);

televisionRoutes.post("/", postTelevision);

televisionRoutes.put("/:id",putTelevision);

televisionRoutes.delete("/:id",deleteTelevision);

module.exports = televisionRoutes;

