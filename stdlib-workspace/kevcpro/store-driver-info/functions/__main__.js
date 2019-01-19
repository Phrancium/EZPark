/**
* Store the Vehicle ID as a key and set the value as an email
* @param {string, string} Vehicle ID and email address
* @returns {}
*/
const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
lib.utils.storage.set('key', 'value', (err, value) => {
	return;
});
