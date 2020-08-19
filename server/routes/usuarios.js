const express = require("express");

const app = express();

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

module.exports = app;
