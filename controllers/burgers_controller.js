var express = require("express");

var router = express.Router();

//Imports the burger.js model
var burger = require("../models/burger.js");

//Routes
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });