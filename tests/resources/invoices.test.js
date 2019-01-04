// jest.mock('../../lib');
import fortnoxabApiClient from '../../src';

describe('Invoices', () => {
  let credentials;
  beforeEach(() => {
    credentials = {
      accessToken: process.env.ACCESS_TOKEN,
      clientSecret: process.env.CLIENT_SECRET
    };
  });
  it('should list invoices', async () => {
    try {
      const data = await fortnoxabApiClient.invoices.list(credentials);
      expect(data).toBeDefined();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
});
