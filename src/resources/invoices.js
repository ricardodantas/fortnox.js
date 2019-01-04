/**
 * Official Documentation:
 * https://developer.fortnox.se/documentation/resources/invoices/
 */

import request from '../request.js';
const resourcePath = 'invoices';

const invoices = {};

invoices.create = (invoiceData) => request.post(`/${resourcePath}`, { Invoice: invoiceData });

invoices.update = (invoiceId, invoiceData) => request.put(`/${resourcePath}/${invoiceId}`, { Invoice: invoiceData });

invoices.cancel = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}/cancel`);

invoices.get = (invoiceId) => request.get(`/${resourcePath}/${invoiceId}`);

invoices.list = () => request.get(`/${resourcePath}`);

invoices.email = (invoiceId, emailInformation) => request.get(`/${resourcePath}/${invoiceId}/email`, { params: emailInformation });

export default invoices;
