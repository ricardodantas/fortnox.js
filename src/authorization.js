/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/general/authentication/
 */
import request from './request.js';

const authorization = (authorizationCode, clientSecret) => request.get('/', {
  headers: {
    'Authorization-Code': authorizationCode,
    'Client-Secret': clientSecret
  }
});

export default authorization;
