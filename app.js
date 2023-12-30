const express = require("express"); //return function
const parser = require("body-parser"); //return obj

const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

const app = express();

app.use(parser.urlencoded({ extended: false })); // here parser.urlencoded() returns a middleware that parses the body of incoming request
// and add the data recieved to req.body and calls next function

app.use(adminroutes);
app.use(shoproutes);

app.listen(5000);
