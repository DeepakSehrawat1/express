const express = require("express"); //return function
const parser = require("body-parser"); //return obj
const path = require("path");

const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

const app = express();

app.use(parser.urlencoded({ extended: false })); // here parser.urlencoded() returns a middleware that parses the body of incoming request
// and add the data recieved to req.body and calls next function

app.use(express.static(path.join(__dirname, "public")));

app.use(adminroutes);
app.use(shoproutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "notfound.html"));
});

app.listen(5000);
