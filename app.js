const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/product", (req, res, next) => {
  console.log("middleware 2");
  res.send(
    `<form action = "/add-product" method = "POST"><input type = "text" name = "title"><button type="submit">send</button></form>`
  );
});

app.use("/", (req, res, next) => {
  console.log("middleware 1000");

  res.send(`<h1>hello</h1>`);
});

app.listen(5000);
