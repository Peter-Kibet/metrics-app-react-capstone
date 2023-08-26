import fetchCoins from '../services/fetchCoins';

describe('fetchCoins', () => {
  it('should fetch coins data', async () => {
    const coinsData = await fetchCoins();
    expect(coinsData).toBeDefined();
  });
});
