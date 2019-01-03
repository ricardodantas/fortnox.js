const axios = require('axios');
const settings = require('../settings.json');

export const request = axios.create({
	baseURL: `${settings.baseUrl}`,
	timeout: 1000,
  headers: {
    ...settings.defaultHeaders
  }
});
