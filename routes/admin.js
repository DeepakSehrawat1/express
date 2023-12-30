const express = require("express");

const route = express.Router();

route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

route.get("/product", (req, res, next) => {
  console.log("middleware 2");
  res.send(
    `<form action = "/add-product" method = "POST"><input type = "text" name = "title"><button type="submit">send</button></form>`
  );
});

module.exports = route;
