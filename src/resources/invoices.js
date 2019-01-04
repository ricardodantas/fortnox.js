/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/invoices/
 */

import request from '../request.js';
const resourcePath = 'invoices';

const invoice = {};

invoice.create = (invoiceData) => request.post(`/${resourcePath}`, { Invoice: invoiceData });

invoice.update = (invoiceId, invoiceData) => request.put(`/${resourcePath}/${invoiceId}`, { Invoice: invoiceData });

invoice.cancel = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}/cancel`);

invoice.get = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}`);

invoice.list = () => request.get(`/${resourcePath}`);

invoice.email = (invoiceId, emailInformation) => request.get(`/${resourcePath}/${invoiceId}/email`, { params: emailInformation });

export default invoice;
