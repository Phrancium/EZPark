const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Retreives all Vehicle IDs.
* @returns {any}
*/
module.exports = async (context) => {
	let result = await storage.get({
	key: "vehiclez"
});
	return result;
};