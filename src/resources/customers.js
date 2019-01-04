/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/customers/
 */

import buildHeadersCredentials from '../buildHeadersCredentials.js';

import request from '../request.js';

const resourcePath = 'customers';

const customers = {};

customers.create = (credentials, customerData) => request.post(
  `/${resourcePath}`,
  { Customer: customerData },
  { headers: buildHeadersCredentials(credentials) }
);

customers.update = (credentials, customerId, customerData) => request.put(
  `/${resourcePath}/${customerId}`,
  { Customer: customerData },
  { headers: buildHeadersCredentials(credentials) }
);

customers.get = (credentials, customerId) => request.get(
  `/${resourcePath}/${customerId}`,
  { headers: buildHeadersCredentials(credentials) }
);

customers.list = (credentials) => request.get(
  `/${resourcePath}`,
  { headers: buildHeadersCredentials(credentials) }
);

export default customers;
