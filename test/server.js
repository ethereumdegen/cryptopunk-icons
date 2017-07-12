
describe("Color Code Converter API", function() {

  describe("Generates a cryptographic challenge", function() {

    var url = "http://localhost:3000/challenge?red=255&green=255&blue=255";



    it("returns status 200", function() {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });

        it("rreturns a random challenge", function() {
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
