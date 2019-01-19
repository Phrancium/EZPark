const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Store the Vehicle ID as a key and set the value as an email
* @param {string} key is the Vehicle ID
* @param {string} value is the email address
* @returns {any}
*/
module.exports = async (key = 'key', value = 'value', context) => {
lib.utils.storage.set('key', 'value', (err, value) => {
  	if(err){
  		return callback(err);
  	}
  	let result = storage.set({
  		key: key,
  		value: value
  	});
});
};