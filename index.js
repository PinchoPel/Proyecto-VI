require("dotenv").config();

const express = require("express");
const {connectDB} = require("./src/config/db.js");
const televisionRoutes = require("./src/api/routes/television.js");
const shopsRoutes = require("./src/api/routes/shop.js");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/v1/televisiones", televisionRoutes);
app.use("/api/v1/tiendas", shopsRoutes)

app.use("/prueba", (req,res,next) => { 
    return res.status(200).json("prueba ok")
})

app.use("*", (req,res,next)=>{
    return res.status(404).json("servidor no encontrado")
});

app.listen(3000, () => {})