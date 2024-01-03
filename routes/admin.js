const express = require("express");
const path = require("path");

const route = express.Router();

route.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/product");
});

route.get("/product", (req, res, next) => {
  console.log("middleware 2");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

module.exports = route;
