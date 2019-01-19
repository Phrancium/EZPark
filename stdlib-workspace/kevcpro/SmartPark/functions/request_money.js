const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const request = require('request');
const storage = lib.utils.storage['@0.1.6'];
/**
* Request
* @param {string} key is the Vehicle ID
* @param {number} amount is the email address
* @returns {any}
*/
module.exports = async (key = "key", amount = 0, context) => {
// Get a key's value
let result = storage.get({
	key: key
});

request.post({
	headers: {'content type' : 'application/json', 'deviceId' : '49794efc-aefd-4e4c-a4e8-2d013ade09a9', 
	"request-id" : '4453a5bb-fd72-481f-b796-8efbe43b0d22', 'thirdPartyAccessId' : 'CA1TAWjNbcZgZvMk',
	'accessToken' : 'ddbe7ee6-2f22-445f-ad8c-a3031a65f825'},
	url: 'https://gateway-web.beta.interac.ca/publicapi/api/v2/money-requests/send',
	body: {'expiry-date' : '2019-02-01T04:59:59.639Z', 'editableFulfillAmount' : false,
    'currency' : 'CAD', 'amount' : amount, 'requestedFrom' : {
    	"contactName" : 'Kevin Cho',
    	"language" : 'en',
    	"notificationPreferences" : [{
    		'handle' : result,
    		'handleType' : 'email',
    		'active' : true
    	}
    	]
    }}

})

};