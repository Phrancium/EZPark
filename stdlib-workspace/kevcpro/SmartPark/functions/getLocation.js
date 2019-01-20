const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const kv = lib.utils.kv;
/**
* Retreives the Locations associated with all vehicles
* @returns {any}
*/
module.exports = async (context) => {
	let result = await kv.get({
	key: "lost"
});
	var locations = [];
	for(let i = 0; i < result.length; i++){
	    let result1 = await kv.get({
	   	key: result[i]
		});
		locations.push(result1);
	}
	return locations;

};