const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const kv = lib.utils.kv;
/**
* Creates the list of Vehicles
* @returns {any}
*/
module.exports = async (key = "list", context) => {
let result = await kv.list.create({
  		key: key
  	});
};