const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Retreives the email address associated with the vehicle ID.
* @param {string} key is the Vehicle ID
* @returns {string}
*/
module.exports = async (key = "key", context) => {
	let result = storage.get({
	key: key
});
return result;
};