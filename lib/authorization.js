/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/general/authentication/
 */
const request = require('./request.js');

const authorization = (authorizationCode, clientSecret) => request.get('/', {
	headers: {
		'Authorization-Code': authorizationCode,
		'Client-Secret': clientSecret
	}
});

module.exports = authorization;
