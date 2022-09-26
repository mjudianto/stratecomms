const express = require("express");
const app = express();
const router = require('express').Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = function (app) {

    app.get("/artikel", (req, res) => {
      res.json({ message: "Hello from server!" });
  });
  
}