// jest.mock('../../lib');

const fortnoxabApiClient = require('../../lib');

describe('Invoices', () => {
  it('should retrieve an invoice by id', async () => {
    const data = await fortnoxabApiClient.resources.invoices.get('12345');
    expect(data).toBeDefined();
  });
});
