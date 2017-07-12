var expect  = require("chai").expect;
var request = require("request");


var express = require("express");
var app = express();

var cryptopunk_icons = require("../app/cryptopunk-icons");

app.get("/", function(req, res) {

    res.send('Hello World');
});

app.get("/blockchain", function(req, res) {
    var web3 = cryptopunk_icons.cryptopunk_icons;
    res.send(web3);
});


app.get("/challenge", function(req, res) {
 
  //var hex = converter.rgbToHex(red, green, blue);

  var _test_eth_private_key = "2c6036ab2f51cb1bfa17a3ffb57abf93a183d9d3887bc9e73cd28d9be57e4d56";
  var _test_eth_address = "0xacbFBdc72626c2264a72a352733ae58244ee3BEf";



  generateEllipticCurveChallenge(_eth_pub_key,_secure_random_challenge)

  res.send("hello challenge");
});



app.listen(3000);
