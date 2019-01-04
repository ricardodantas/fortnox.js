// jest.mock('../../lib');

import fortnoxabApiClient from '../../src';

describe('Invoices', () => {
  it('should retrieve an invoice by id', async () => {
    const data = await fortnoxabApiClient.invoices.get('12345');
    expect(data).toBeDefined();
  });
});
