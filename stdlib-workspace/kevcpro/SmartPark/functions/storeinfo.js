const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const request = require('request');
const kv = lib.utils.kv;
/**
* Request
* @returns {string}
*/
module.exports = async (context) => {
	kv.tables.truncate({
		table: 'kevcpro'
	});
	return "ok";
};