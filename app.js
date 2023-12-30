const express = require("express");

console.log("yes");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

app.listen(5000);
