const authorization = require('./authorization');
const resources = require('./resources');

export const fortnoxAbApiClient = {
	authorization,
	...resources
};
