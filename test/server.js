var expect  = require("chai").expect;
var request = require("request");


var express = require("express");
var app = express();

var cryptopunk_icons = require("../cryptopunk-icons");

app.get("/challenge", function(req, res) {

});
 
app.listen(3000);
