
const Shop = require("../models/shop");
const Television = require("../models/television");

const getTelevision = async (req, res, next) => {
    try {
    let  showTelevision = await Television.find();  
        return res.status(200).json(showTelevision);
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const getByPriceTelevision = async (req, res, next) => {
    try {
        let { precio } = req.params;
      let  maxPriceSearching= await Television.find({
            precio: { $lte: precio }
          });
          return res.status(200).json(maxPriceSearching);
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const getBySizeTelevision = async (req, res, next) => {
    try {
        let inches = req.params.screenSize.match(/\d+/);
        let pantallaNum = parseInt(inches[0]); 
     let   maxInchesSearching= await Television.find({
            pantalla: { $lte: pantallaNum }
          });
          return res.status(200).json(maxInchesSearching);
    } catch (error) {
        return res.status(404).json("Ha fallado la petición de pulgadas")
    }
}

const getByBrandTelevision = async (req, res, next) => {
    try {
        console.log(req.params);
        let {marca} = req.params;
        let searchByBrand = await Television.find({marca: new RegExp(marca, 'i') });
        return res.status(200).json(searchByBrand);
    } catch (error) {
        return res.status(404).json("Ha fallado la petición")
    }
}

const postTelevision = async (req, res, next) => {
    try {
        let newTelevision = new Television({
            imagen: req.body.imagen,
            pantalla: req.body.pantalla,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio
        });

        let savedTelevision = await newTelevision.save();
        
        return res.status(201).json(savedTelevision);
    } catch (error) {
        return res.status(404).json("Ha fallado el envío de datos")
    }
}
const putTelevision = async (req, res, next) => {
    try {
        let { id } = req.params;
        let newTelevision = new Television(req.body);
        newTelevision._id = id;

        let updatedTelevision = await Television.findByIdAndUpdate(id, newTelevision, {new: true});

        return res.status(200).json(updatedTelevision);
    } catch (error) {
        return res.status(404).json("Ha fallado la actualización")
    }
}

const deleteTelevision = async (req, res, next) => {
    try {
        let { id } = req.params;
        let deletedTelevision= await Television.findByIdAndDelete(id);
        return res.status(200).json(deletedTelevision);
    } catch (error) {
        return res.status(404).json("El elemento no se ha podido borrar")
    }
}

module.exports = {getTelevision, postTelevision, putTelevision,deleteTelevision,getByPriceTelevision,getBySizeTelevision,getByBrandTelevision}