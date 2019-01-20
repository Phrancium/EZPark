const lib = require('lib')({token: 'SbnWZYDiKNqpD8VXv_9uN4b897J-GQjJ5lz5Odfz7rs3PI_i5nJeCSxuUiruJDxG'});
const storage = lib.utils.storage['@0.1.6'];
const kv = lib.utils.kv;
/**
* Stores the location of a vehicle
* @param {string} key is the Vehicle ID
* @param {number} latitude
* @param {number} longitude
* @param {string} email
* @returns {string}
*/
module.exports = async (key = "key", latitude = 0, longitude = 0, email="kevc.pro@gmail.com", context) => {
	var coord = [key, latitude, longitude, email];
  	var json = {"id": coord[0],
  				"latitude" : coord[1],
  				"longitude": coord[2],
  				"email": coord[3]};

	let result = await kv.get({key: 'lost'});

	if(result == null)
		result = [];

	let plsbeempty = result.filter((obj)=>{
		return obj === coord[0]
	})

	if(plsbeempty.length === 0){
		let newList = [...result];
		newList.push(key);
		await kv.set({
	  		key: "lost",
	  		value: newList
  		});
	}
	
	await kv.clear({ key: key });
 	await kv.set({ key: key, value: json});

	return 'xd';
};
