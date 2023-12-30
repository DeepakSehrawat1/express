const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
  console.log("middleware 1000");

  res.send(`<h1>hello</h1>`);
});

module.exports = route;
