const express = require("express"); //return function
const parser = require("body-parser"); //return obj
const cookieParser = require("cookie-parser");

const adminroutes = require("./routes/admin");

const app = express();

app.use(parser.urlencoded({ extended: false })); // here parser.urlencoded() returns a middleware that parses the body of incoming request
// and add the data recieved to req.body and calls next function
app.use(cookieParser());

app.use(adminroutes);

app.listen(5000);
