 
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


  var challenge_digest = cryptopunk_icons.generateEllipticCurveChallengeDigest()
  console.log('challenge_digest')
  console.log(challenge_digest)



  res.send("hello challenge");
});


app.get("/sign", function(req, res) {

  //var hex = converter.rgbToHex(red, green, blue);

  var _test_eth_private_key = "2c6036ab2f51cb1bfa17a3ffb57abf93a183d9d3887bc9e73cd28d9be57e4d56";
  var _test_eth_address = "0xacbFBdc72626c2264a72a352733ae58244ee3BEf";

  var challenge_digest =  req.query.challengedigest;

  var sig = cryptopunk_icons.signEllipticCurveChallenge(_test_eth_private_key,challenge_digest)
  console.log('sig')
  console.log(sig)



  res.send("hello sig");
});



app.listen(3000);
