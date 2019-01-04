const authorization = require('./authorization');
const resources = require('./resources');

module.exports = {
	authorization,
	...resources
};
