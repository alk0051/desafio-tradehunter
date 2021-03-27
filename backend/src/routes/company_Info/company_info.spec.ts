import app from '../../server';

describe('Test company_info route', () => {
  it('should get info about company', async () => {
    const res = await app.get('/companyInfo')

    expect(res.body).toHaveProperty('name')
  });
});