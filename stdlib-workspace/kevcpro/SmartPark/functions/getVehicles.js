const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const kv = lib.utils.kv;
/**
* Retreives all Vehicle IDs.
* @returns {any}
*/
module.exports = async (context) => {
	let result = await kv.get({
	key: "lost"
});
	return result;
};