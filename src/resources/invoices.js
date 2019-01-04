/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/invoices/
 */
import buildHeadersCredentials from '../buildHeadersCredentials.js';
import request from '../request.js';

const resourcePath = 'invoices';

const invoices = {};

invoices.create = (credentials, invoiceData) => request.post(
  `/${resourcePath}`,
  { Invoice: invoiceData },
  { headers: buildHeadersCredentials(credentials) }
);

invoices.update = (credentials, invoiceId, invoiceData) => request.put(
  `/${resourcePath}/${invoiceId}`,
  { Invoice: invoiceData },
  { headers: buildHeadersCredentials(credentials) }
);

invoices.cancel = (credentials, invoiceId) => request.get(
  `/${resourcePath}/${invoiceId}/cancel`,
  { headers: buildHeadersCredentials(credentials) }
);

invoices.get = (credentials, invoiceId) => request.get(
  `/${resourcePath}/${invoiceId}`,
  { headers: buildHeadersCredentials(credentials) }
);

invoices.list = (credentials) => request.get(
  `/${resourcePath}`,
  { headers: buildHeadersCredentials(credentials) }
);

invoices.email = (credentials, invoiceId, emailInformation) => request.get(
  `/${resourcePath}/${invoiceId}/email`,
  {
    params: emailInformation,
    headers: buildHeadersCredentials(credentials)
  }
);

export default invoices;
