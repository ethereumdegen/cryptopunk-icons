
var express = require("express");
var app = express();

var cryptopunk_icons = require("../app/cryptopunk-icons");

app.get("/", function(req, res) {

    res.send('Hello World');
});

app.get("/blockchain", function(req, res) {


    var TestRPC = require("ethereumjs-testrpc");

    var eth = cryptopunk_icons.connectToEthereumUsingProvider(TestRPC.provider());

    console.log('eth')

    console.log(eth)


    if( typeof eth != 'undefined')
    {

      eth.coinbase().then((cb_result) => {
          var balance = eth.getBalance(cb_result).then((bal_result) => {
            console.log('found balance of ')
              console.log(bal_result)
        });

     }).catch((err) => {
          console.error('unable to connect and get balance')
    });


      //var coinbase = eth.coinbase;
    //  var balance = eth.getBalance('0xacbFBdc72626c2264a72a352733ae58244ee3BEf',coinbase);
  //  var balance = eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', cb);



        res.send('web3 connected');
    }else{
        res.send('web3 not connected - please use metamask or parity');
    }



});


app.get("/challenge", function(req, res) {

  //var hex = converter.rgbToHex(red, green, blue);

  var _test_eth_private_key = "2c6036ab2f51cb1bfa17a3ffb57abf93a183d9d3887bc9e73cd28d9be57e4d56";
  var _test_eth_address = "0xacbFBdc72626c2264a72a352733ae58244ee3BEf";


  var challenge_digest = cryptopunk_icons.generateEllipticCurveChallengeDigest()
  console.log('challenge_digest')
  console.log(challenge_digest.toString('hex'))



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
