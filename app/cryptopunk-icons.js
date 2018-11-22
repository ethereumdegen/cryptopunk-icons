var crypto = require('crypto')
var eth_utils = require('ethereumjs-util');
var Web3 = require('web3');

var file = require('file-system');
var fs = require('fs');
var path = require('path');


		exports.connectToEthereumUsingProvider = function (_web3_provider)
		{

			const BN = require('bn.js');
			const HttpProvider = require('ethjs-provider-http');

			if(typeof _web3_provider == 'undefined')
			{
				_web3_provider = new HttpProvider('http://localhost:8545')
			}

			const Eth = require('ethjs-query');
			const eth = new Eth(_web3_provider);

			return eth;

		}



		//use web3 ethereum light client to verify that a cryptopunks is owned by a particular public address

		exports.verifyCryptopunkOwnedByPublicAddress = function (_eth, _punk_id,_eth_pub_addr)
		{
 			//IMPLEMENT ME

			var cryptopunks_contract_address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

			var result = _eth.getStorageAt() //?

		}



		//use web3 ethereum light client to return a list of cryptopunks at a public address

		exports.getCryptopunksAtPublicAddress = function (_eth_pub_addr)
		{

		}

		exports.getRandomCryptopunkAtPublicAddress = function (_eth_pub_addr)
		{

		}

		exports.getFirstCryptopunkAtPublicAddress = function (_eth_pub_addr)
		{

		}




		exports.fixCryptopunkId = function (_icon_id)
		{
			while(_icon_id.length < 3)
			{
				_icon_id = "0" + _icon_id;
			}

			return _icon_id;
		}

		exports.getCryptopunkIconLocalImagePath = function (_icon_id)
		{
			_icon_id = exports.fixCryptopunkId(_icon_id)




			var assets_folder = path.join(path.dirname(fs.realpathSync(__filename)), '../app/assets');
			var icon_file_path =  (assets_folder + '/punk'+_icon_id+'.png');
			//var icon_file = fs.readFileSync(icon_file_path);

			return icon_file_path;
		}

		exports.getCryptopunkIconCentralizedURL = function (_icon_id)
		{
			_icon_id = exports.fixCryptopunkId(_icon_id)

			return "https://www.larvalabs.com/cryptopunks/cryptopunk"+_icon_id+".png"
		}
