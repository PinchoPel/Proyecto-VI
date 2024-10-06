const { getShop, postShop, putShop, deleteShop, getByCity, deleteTvInShop, getTvInShop } = require("../controllers/shop");


const shopsRoutes = require("express").Router();

shopsRoutes.get("/ciudad/:ciudad", getByCity);//buscar una tienda en una ciudad

shopsRoutes.get("/marca/:marca", getTvInShop);//buscar qué tiendas trabajan con una marca determinada

shopsRoutes.get("/", getShop);

shopsRoutes.post("/", postShop);

shopsRoutes.put("/:id", putShop);

shopsRoutes.delete("/:id", deleteShop);

shopsRoutes.delete("/:idShop/television/:idTelevision", deleteTvInShop); //borrar una televisión de una tienda en concreto

module.exports = shopsRoutes;
