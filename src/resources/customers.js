/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/customers/
 */

import request from '../request.js';

const resourcePath = 'customers';

const customers = {};

customers.create = (customerData) => request.post(`/${resourcePath}`, { Customer: customerData });

customers.update = (customerId, customerData) => request.put(`/${resourcePath}/${customerId}`, { Customer: customerData });

customers.get = (customerId) => request.get(`/${resourcePath}/${customerId}`);

customers.list = () => request.get(`/${resourcePath}`);

export default customers;
