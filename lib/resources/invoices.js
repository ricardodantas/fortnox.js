/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/invoices/
 */

const request = require('../request.js');
const resourcePath = 'invoices';

export const invoice = {};

invoice.create = (invoiceData) => request.post(`/${resourcePath}`, { Invoice: invoiceData });

invoice.update = (invoiceId, invoiceData) => request.put(`/${resourcePath}/${invoiceId}`, { Invoice: invoiceData });

invoice.cancel = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}/cancel`);

invoice.get = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}`);

invoice.list = () => request.get(`/${resourcePath}`);

invoice.email = (invoiceId, emailInformation) => request.get(`/${resourcePath}/${invoiceId}/email`, { params: emailInformation });
