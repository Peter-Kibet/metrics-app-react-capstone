import fetchSingleCoin from '../services/fetchCoin';

describe('fetchSingleCoin', () => {
  it('should fetch a single coin data', async () => {
    const coinData = await fetchSingleCoin('bitcoin');
    expect(coinData).toBeDefined();
  });
});
