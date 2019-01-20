 /**
* Request
* @param {string} key is the Vehicle ID
* @param {string} value is the email address
* @returns {any}
*/
module.exports = async (key = 'key', value = 'value', context) => {
lib.utils.storage.set('key', 'value', (err, value) => {
  	if(err){
  		return callback(err);
  	}
  	let result = storage.set({
  		key: key,
  		value: value
  	});
});
};