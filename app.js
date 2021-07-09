const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) return console.log("Please provide an address");

geocode(address, (geocodeError, { latitude, longitude, location } = {}) => {
	if (geocodeError) return console.log(geocodeError);
	forecast(latitude, longitude, (forecastError, forecastData) => {
		if (forecastError) return console.log(forecastError);
		console.log(`In ${location}  :   ${forecastData}`);
	});
});
