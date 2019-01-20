const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Creates the list of Vehicles
* @returns {any}
*/
module.exports = async (key = "vehiclez", context) => {
let result = await storage.list.create({
  		key: key
  	});
};