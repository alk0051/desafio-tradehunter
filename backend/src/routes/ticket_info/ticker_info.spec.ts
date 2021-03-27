import app from '../../server';

describe('Test ticker_info route', () => {
  it('should get info about ticker', async () => {
    const res = await app.get('/tickerInfo')

    expect(res.body).toHaveProperty('open')
  });
});