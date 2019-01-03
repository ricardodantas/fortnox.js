const request = require('../request.js');
const resourcePath = 'invoices';

export const invoice = {};

invoice.create = (data) => request.post(`/${resourcePath}`, data);

invoice.update = (id, data) => request.put(`/${resourcePath}/${id}`, data);

invoice.cancel = (id) => request.get(`/${resourcePath}/${id}/cancel`);

invoice.get = (id) => request.get(`/${resourcePath}/${id}`);

invoice.list = () => request.get(`/${resourcePath}`);
