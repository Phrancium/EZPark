const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Retreives the Locations associated with all vehicles
* @returns {any}
*/
module.exports = async (context) => {
	let result = await storage.get({
	key: "vehiclez"
});
	var locations = [];
	for(let i = 0; i < result.length; i++){
	    let result1 = await storage.get({
	   	key: result[i]
		});
		locations.push(result1);
	}
	return locations;

};