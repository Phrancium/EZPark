const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
/**
* Stores the location of a vehicle
* @param {string} key is the Vehicle ID
* @param {number} latitude
* @param {number} longitude
* @returns {any}
*/
module.exports = async (key = "key", latitude = 0, longitude = 0, context) => {
	var coord = [key, latitude, longitude];
  	var json = {"id": coord[0],
  				"latitude" : coord[1],
  				"longitude": coord[2]};
  	let result = await storage.list.add({
  		key: "vehicle",
  		value: key
  	});
	storage.set('key', 'value', (err, value) => {
  	if(err){
  		return callback(err);
  	}
  	let result1 = storage.set({
  		key: key,
  		value: json
  	});
});
};
