/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/customers/
 */

import request from '../request.js';

const resourcePath = 'customers';

const customer = {};

customer.create = (customerData) => request.post(`/${resourcePath}`, { Customer: customerData });

customer.update = (customerId, customerData) => request.put(`/${resourcePath}/${customerId}`, { Customer: customerData });

customer.get = (customerId) => request.get(`/${resourcePath}/${customerId}`);

customer.list = () => request.get(`/${resourcePath}`);

export default customer;