var crypto = require('crypto')
var eth_utils = require('ethereumjs-util');


console.log('loaded cryptopunk-icons library')





exports.connectToWeb3 = function () {



				var Web3 = require('web3');
			  var web3 = new Web3();

				console.log('web3')
				console.log(web3)
			///  web3.setProvider(new web3.providers.HttpProvider());

				 var coinbase = web3.eth.coinbase;


				 console.log(coinbase)


				var cryptopunks_contract_address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

				var market_abi = "";//read from file

				return web3;

		}

		//use web3 ethereum light client to return a list of cryptopunks at a public address

		exports.getCryptopunksFromPublicAddress = function (_eth_pub_addr)
		{

		}

		//use web3 ethereum light client to verify that a cryptopunks is owned by a particular public address

		exports.verifyCryptopunkOwnedByPublicAddress = function (_eth_pub_addr)
		{

		}




		 //generate a challenge for the user to sign in order to prove ownership of their private key

		exports.generateEllipticCurveChallengeDigest = function (_secure_random_message)
		{



			if(typeof _secure_random_message == 'undefined')
			{
				var len = 32;

				_secure_random_message = crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
			}

			random_message_buffer = Buffer.from(_secure_random_message.toString())

			var new_ec_challenge_digest = eth_utils.hashPersonalMessage(random_message_buffer)

			return new_ec_challenge_digest;
		}


		//This function must be ran locally and offline by the holder of the private key that owns the cryptopunk
		//This function uses the private kay and random challenge to generate a signature proving ownership of the private key

	 	exports.signEllipticCurveChallenge = function (_eth_private_key,_challenge_digest)
		{

			var sig = eth_utils.ecsign(_challenge_digest,_eth_private_key)

			return sig;

		}


		//use ECDSA just like the official Eth repo uses where secure_random_challenge is a truly random string
		//If the proper signature response is given for the challenge, that means the signature was created by the owner of the private key for the public key

		exports.validateEllipticCurveSignature = function (_eth_pub_addr,_challenge_digest,_signature_response)
		{


			var public_key_from_sig = getPublicKeyFromEllipticCurveSignature(_challenge_digest,_signature_response)

			//verify that pub address matches pub key from the signature

			var public_key_valid = eth_utils.isValidPublic(public_key_from_sig)

			var public_address_from_sig = eth_utils.pubToAddress(public_key_from_sig)

			var address_matches = (public_address_from_sig === _eth_pub_addr)

			return {valid: address_matches, pub_addr: public_address_from_sig}
		}

		exports.getPublicKeyFromEllipticCurveSignature = function (_challenge_digest,_signature_response)
		{


			var vrs_data = eth_utils.fromRpcSig(_signature_response)

			var public_key_from_sig = eth_utils.ecrecover(_challenge_digest,vrs_data.v,vrs_data.r,vrs_data.s)

			return public_key_from_sig;

		}





		//We verify that whoever created the response to the challenge must have ownership of the private key that matches the public address

		exports.verifyOwnershipOfEthereumPublicAddress = function (_eth_pub_addr,_ec_challenge,_ec_response)
		{

		}

		exports.getCryptopunkIcon = function (_icon_id)
		{
			return "https://www.larvalabs.com/cryptopunks/cryptopunk"+_icon_id+".png"
		}
