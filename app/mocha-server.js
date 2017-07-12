var expect  = require("chai").expect;
var request = require("request");


var express = require("express");
var app = express();

var cryptopunk_icons = require("../app/cryptopunk-icons");

app.get("/", function(req, res) {

    res.send('Hello World');
});

app.get("/challenge", function(req, res) {
  var red   = parseInt(req.query.red, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});



app.listen(3000);
