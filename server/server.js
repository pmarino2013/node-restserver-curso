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

//configuro peticiones GET, POST, PUT y DELETE
app.get("/usuario", function (req, res) {
  res.json("get Usuario");
});
app.post("/usuario", function (req, res) {
  let body = req.body;
  //manejo de código HTTP
  if (body.nombre === undefined) {
    res.status(400).json({
      Ok: false,
      Mensaje: "Debe enviar el nombre",
    });
  } else {
    res.json({
      persona: body,
    });
  }
});

//agrego /:id para pasar el parametro del id
app.put("/usuario/:id", function (req, res) {
  let id = req.params.id;
  res.json({ id });
});
app.delete("/usuario", function (req, res) {
  res.json("delete Usuario");
});

mongoose.connect("mongodb://localhost:27017/cafe", (err, res) => {
  if (err) throw err;

  console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando el puerto: " + process.env.PORT);
});
