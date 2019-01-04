import axios from 'axios';
import settings from './settings.js';

const request = axios.create({
  baseURL: settings.baseUrl,
  timeout: 1000,
  headers: settings.defaultHeaders
});

export default request;
