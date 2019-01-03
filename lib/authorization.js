const request = require('./request.js');

export const authorization = (authorizationCode, clientSecret) => request.get(`/`, {
  headers: {
    'Authorization-Code': authorizationCode,
    'Client-Secret': clientSecret
  }
});
