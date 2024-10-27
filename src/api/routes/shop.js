const { getShop, postShop, putShop, deleteShop, getByCity, deleteTvInShop, getTvInShop } = require("../controllers/shop");


const shopsRoutes = require("express").Router();

shopsRoutes.get("/ciudad/:ciudad", getByCity);
shopsRoutes.get("/marca/:marca", getTvInShop);
shopsRoutes.get("/", getShop);

shopsRoutes.post("/", postShop);

shopsRoutes.put("/:id", putShop);

shopsRoutes.delete("/:id", deleteShop);
shopsRoutes.delete("/:idShop/television/:idTelevision", deleteTvInShop); 

module.exports = shopsRoutes;
