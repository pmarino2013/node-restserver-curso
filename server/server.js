require("./config/config");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
//instalo primero body-parser para recuperar info de request en el body
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//traigo el contenido de las rutas de usuarios.js
app.use(require("./routes/usuarios"));

mongoose.connect("mongodb://localhost:27017/cafe", (err, res) => {
  if (err) throw err;

  console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando el puerto: " + process.env.PORT);
});
