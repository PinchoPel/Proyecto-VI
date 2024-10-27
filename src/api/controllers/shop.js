const Shop = require("../models/shop");
const Television = require("../models/television");
const mongoose = require("mongoose");



const getShop = async (req, res, next) => {
    try { 
         showShop = await Shop.find().populate("televisiones");
        return res.status(200).json(showShop)
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const getByCity = async (req, res, next) => {
    try {
        let {ciudad} = req.params;
        let searchByCity = await Shop.find({direccion: { $regex: new RegExp(ciudad, 'i') }});
        return res.status(200).json(searchByCity);      
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const getTvInShop = async (req, res, next) => {
    try {
        let {marca} = req.params;
        let searchByBrand = await Television.find({marca: { $regex: new RegExp(marca, 'i') }});
        if (!searchByBrand.length) {
            return res.status(404).json({ message: 'No se encontraron televisores de esta marca' });
          }
          const getTvId = searchByBrand.map(televisionBrand => televisionBrand._id); 
          const shopsByTvBrand = await Shop.find({ televisiones: { $in: getTvId } });
        if (!shopsByTvBrand.length) {
        return res.status(404).json({ message: 'No se encontraron tiendas que trabajen con esta marca' });
        }
        return res.status(200).json(shopsByTvBrand);      
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const postShop = async (req, res, next) => {
    try {
        let newShop = new Shop({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            horario: req.body.horario,
            plazo_de_envio: req.body.plazo_de_envio,
        });

        let savedShop = await newShop.save();
        return res.status(201).json(savedShop);
    } catch (error) {
        return res.status(404).json("Ha fallado el envío de datos")
    }
}
const putShop = async (req, res, next) => {
    try {
        let { id } = req.params; 
        let { televisiones} = req.body; 
        
        if (req.body.televisiones) { 
        let oldShop = await Shop.findById(id);

        let existingTelevisionIds = new Set(oldShop.televisiones.map(tvId => tvId.toString()));
        
        let newTvs = televisiones.filter(newTv => !existingTelevisionIds.has(newTv));

      if (newTvs.length > 0) {
        let updatedShop = await Shop.findByIdAndUpdate(id, { $addToSet: { televisiones: { $each: newTvs } }}, {new: true});
        return res.status(200).json(updatedShop);
        }
        else  {
        return res.status(400).json('Ningún televisor nuevo ha sido incluido')
        }
        }
        else{
     /*   let newShop = new Shop(req.body);
        newShop._id = id;*/
        let updatedShop = await Shop.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.status(200).json(updatedShop);
        }
    } catch (error) {
        return res.status(404).json("Ha fallado la actualización")
    }
}

const deleteShop = async (req, res, next) => {
    try {
       let { id } = req.params;
        let deletedShop= await Shop.findByIdAndDelete(id);
        return res.status(200).json(deletedShop);
    } catch (error) {
        return res.status(404).json("El elemento no se ha podido borrar")
    }
}

const deleteTvInShop = async (req, res, next) => {
    try {
       let { idShop, idTelevision } = req.params; 
        let shop= await Shop.findById(idShop); 
        const tvIndex = shop.televisiones.indexOf(idTelevision); 
    if (tvIndex === -1) {
      return res.status(404).json('Televisión no disponible en esta tienda' );
    }
    shop.televisiones.splice(tvIndex, 1); 
    await shop.save(); 
        return res.status(200).json(shop);
    } catch (error) {
        return res.status(404).json("El elemento no se ha podido borrar")
    }
}

module.exports = {getShop,postShop,putShop, deleteShop,getByCity,deleteTvInShop,getTvInShop}