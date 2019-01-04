const axios = require('axios');
const settings = require('./settings.json');

const request = axios.create({
	baseURL: settings.baseUrl,
	timeout: 1000,
	transformRequest: [function (data, headers) {
		if (data.accessToken && data.clientSecret) {
			headers['Access-Token'] = data.accessToken;
			headers['Client-Secret'] = data.clientSecret;
		}
		return JSON.stringify(data);
	}],
	headers: settings.defaultHeaders
});

module.exports = request;
