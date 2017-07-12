var expect  = require("chai").expect;
var request = require("request");

describe("Cryptopunk Icons API", function() {


  describe("Connects to root", function() {

    var url = "http://localhost:3000/";


    it("returns status 200", function() {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });



  });


  describe("Connects to web3", function() {

    var url = "http://localhost:3000/blockchain";


    it("returns status 200", function() {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });

        it("returns web3", function() {
          request(url, function(error, response, body) {
            console.log('web3 body is ')
              console.log(body)
            expect(body).to.equal("fffgggfff");
            done();
          });
        });



  });

  describe("Generates a cryptographic challenge", function() {

    var url = "http://localhost:3000/challenge?red=255&green=255&blue=255";



    it("returns status 200", function() {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });

        it("returns a random challenge", function() {
          request(url, function(error, response, body) {
            expect(body).to.equal("ffffff");
            done();
          });
        });



  });

  /*describe("Hex to RGB conversion", function() {

    it("returns status 200", function() {});

    it("returns the color in RGB", function() {});

  });
*/

});
