





		 console.log('booting')






	module.exports = function() {



		function connectToWeb3()
		{


				var Web3 = require('web3');
			  var web3 = new Web3();
			  web3.setProvider(new web3.providers.HttpProvider());

				 var coinbase = web3.eth.coinbase;


				 console.log(coinbase)


				var cryptopunks_contract_address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

				var market_abi = "";//read from file


		}

		//use web3 ethereum light client to return a list of cryptopunks at a public address
		function getCryptopunksFromPublicAddress(_eth_pub_addr)
		{

		}

		//use web3 ethereum light client to verify that a cryptopunks is owned by a particular public address
		function verifyCryptopunkOwnedByPublicAddress(_eth_pub_addr)
		{

		}




		//use ECDSA just like the official Eth repo uses where secure_random_challenge is a truly random string
		//generate a challenge for the public key from which only the owner of the private key can respond to with the valid signature
		function generateEllipticCurveChallenge(_eth_pub_key,_secure_random_challenge)
		{

			var crypto = require("crypto");
			var eccrypto = require("eccrypto");

			if(typeof _secure_random_challenge == 'undefined')
			{
				_secure_random_challenge = crypto.randomBytes(32);
			}


		//	var str = "message to sign";
			// Always hash you message to sign!
			var challenge_digest = crypto.createHash("sha256").update(_secure_random_challenge).digest();



			return new_ec_challenge;
		}


		//This function must be ran locally and offline by the holder of the private key that owns the cryptopunk
		//This function uses the private kay and random challenge to generate a signature proving ownership of the private key
		function signEllipticCurveChallenge(_eth_private_key,_secure_random_challenge_digest)
		{
			var crypto = require("crypto");
			var eccrypto = require("eccrypto");


			eccrypto.sign(_eth_private_key, _secure_random_challenge_digest).then(function(sig) {

				return sig;


			});

		}


		//use ECDSA just like the official Eth repo uses where secure_random_challenge is a truly random string
		//If the proper signature response is given for the challenge, that means the signature was created by the owner of the private key for the public key
		function validateEllipticCurveSignature(_eth_pub_key,_challenge_digest,_signature_response)
		{

			var crypto = require("crypto");
			var eccrypto = require("eccrypto");



			  eccrypto.verify(_eth_pub_key, _challenge_digest, _signature_response).then(function() {
			    console.log("Signature is OK");
					return {valid:true, public_key:_eth_pub_key};
			  }).catch(function() {
			    console.log("Signature is BAD");
					return {valid:false, public_key:_eth_pub_key};
			  });

 			return false;
		}





		//We verify that whoever created the response to the challenge must have ownership of the private key that matches the public address
		function verifyOwnershipOfEthereumPublicAddress(_eth_pub_addr,_ec_challenge,_ec_response)
		{

		}


		function getCryptopunkIcon(_icon_id)
		{
			return "https://www.larvalabs.com/cryptopunks/cryptopunk"+_icon_id+".png"
		}


};
