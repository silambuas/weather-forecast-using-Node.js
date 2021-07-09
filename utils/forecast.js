const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
	const access_key = "33697850ce2a25e88c16de14010c272a";
	const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}&units=f`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Failed to connect API", undefined);
		} else if (!!body.error) {
			callback(undefined, body.error.info);
		} else {
			const data = body.current;
			callback(
				undefined,
				`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
			);
		}
	});
};

module.exports = forecast;
