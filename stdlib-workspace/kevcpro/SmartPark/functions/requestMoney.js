const lib = require("lib")({
 token: "SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG"
});
const axios = require("axios");
const storage = lib.utils.storage["@0.1.6"];
const uuid = require("uuid/v4");
/**
* Request
* @param {string} key is the Vehicle ID
* @param {number} amount is the email address
* @returns {any}
*/
// module.exports = async (key = "key", amount = 0, context) => {
//  return await new Promise((res, rej) => {
//    // Get a key's value
//    let result = storage.get({
//      key: key
//    });    

//    var options = {
//      method: "POST",
//      url:
//        "https://gateway-web.beta.interac.ca/publicapi/api/v2/money-requests/send",
//      headers: {
//        "Postman-Token": "1a87e311-3fa8-4e38-84b8-5865e5037945",
//        "cache-control": "no-cache",
//        deviceId: "asdf",
//        requestId: "asdf",
//        apiRegistrationId: "CA1ARNtmkqyBBgcv",
//        thirdPartyAccessId: "CA1TAWjNbcZgZvMk",
//        accessToken: "Bearer c31a02ba-7363-42c8-bc31-0d41cde87515",
//        "Content-Type": "application/json"
//      },
//      form: {
//        sourceMoneyRequestId: uuid().replace(/-/g, ""),
//        requestedFrom: {
//          contactName: "Kevin Cho",
//          language: "en",
//          notificationPreferences: [
//            { handle: result, handleType: "email", active: true }
//          ]
//        },
//        amount: amount,
//        currency: "CAD",
//        editableFulfillAmount: false,
//        expiryDate: "2019-02-01T04:59:59.639Z",
//        supressResponderNotifications: false
//      },
//      json: true
//    };
//    return request(options, function(error, response, body) {
//      res(error, body);
//    });
//  });
// };

module.exports = async (key="key", amount=0, context) => {
	let result = await storage.get({
		key: key
	});  

	let data = {
		sourceMoneyRequestId: uuid().replace(/-/g, ""),
		requestedFrom: {
			contactName: "Kevin Cho",
			language: "en",
			notificationPreferences: [
				{ handle: result, handleType: "email", active: true }
			]
		},
		amount: amount,
		requesterMessage: "Parking Fee:",
		currency: "CAD",
		editableFulfillAmount: false,
		expiryDate: "2019-02-01T04:59:59.639Z",
		supressResponderNotifications: false
	};

	var options = {
		headers: {
			"Postman-Token": "1a87e311-3fa8-4e38-84b8-5865e5037945",
			"cache-control": "no-cache",
			deviceId: "asdf",
			requestId: "asdf",
			apiRegistrationId: "CA1ARNtmkqyBBgcv",
			thirdPartyAccessId: "CA1TAWjNbcZgZvMk",
			accessToken: "Bearer c31a02ba-7363-42c8-bc31-0d41cde87515",
			"Content-Type": "application/json"
		}
	};

	return axios.post(
		'https://gateway-web.beta.interac.ca/publicapi/api/v2/money-requests/send',
		data,
		options
	).then((res) => {
		return res.data
	});
}
