const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.send(
    `<h1>no text</h1><br><form action = "/" method = "POST"><input type = "text" name = "message"><button type="submit">send</button></form>`
  );
});

route.post("/", (req, res, next) => {
  const username = req.cookies?.username;
  const message = req.body.message;
  console.log("okk");

  if (username && message) {
    const data = `${username}: ${message}\n`;
    fs.appendFile("message.txt", data, (err, data) => {
      if (err) throw err;
      fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) throw err;
        res.send(
          `<h1>${data}</h1><br><form action = "/" method = "POST"><input type = "text" name = "message"><button type="submit">send</button></form>`
        );
      });
    });
  } else {
    res.send("error");
  }
});

route.post("/login", (req, res, next) => {
  const username = req.body["username"];
  if (username) {
    res.cookie("username", username);
    res.redirect("/");
  } else {
    res.send("Invalid username");
  }
});

route.get("/login", (req, res, next) => {
  console.log("middleware 2");

  res.send(
    `<form action = "/login" method = "POST"><input type = "text" name = "username"><button type="submit">enter</button></form>`
  );
});

module.exports = route;
