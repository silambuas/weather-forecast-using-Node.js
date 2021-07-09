const request = require("postman-request");

const geocode = (address, callback) => {
	const access_token =
		"pk.eyJ1IjoiZmx5dG9hc21hbm8iLCJhIjoiY2txdjh1Z3I4MGM3dzJ2cWFtd3NldzlqMiJ9.EOA4CbmsmmM3CAD8Nw8uSQ";
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${access_token}&limit=1`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Failed to connect API", undefined);
		} else if (body.features.length === 0) {
			callback("No match found", undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].geometry.coordinates[1],
				longitude: body.features[0].geometry.coordinates[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
