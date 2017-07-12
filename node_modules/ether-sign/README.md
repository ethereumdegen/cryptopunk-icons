

# Ether-sign

This is a module to assist with cryptographic signature generation and validation for Ethereum  



    a. Generating and storing a random message that is used to build a cryptographic challenge which is given to the person. (generateEllipticCurveChallengeDigest)

    b. The person uses their private key to generate a signature of the challenge and they give it back to your Node app. (signEllipticCurveChallenge)

    c. Checking that the signature is indeed valid for that challenge by extracting the public key from the signature.   (validateEllipticCurveSignature)


Using these three tools, it is possible to build a webform in that asks a user for a public address, asks them to sign a challenge to prove ownership, and then records the fact that they must know the private key.   

### How to Use

npm install ether-sign

```
var ethersign = require('ether-sign')
```


### Signing the Proof-Of-Key Challenges
Visit http://ethersign.github.io for an example 


### Testing with Mocha
node app/mocha-server.js

Then, in a different shell

npm test
