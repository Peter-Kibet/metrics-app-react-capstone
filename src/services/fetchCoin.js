// services/fetchCoin.js
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/';

const fetchSingleCoin = async (coinId) => {
  try {
    const response = await axios.get(`${API_URL}${coinId}`);
    const coin = response.data;
    // create an object with the data you need
    const coinData = {
      id: coin.id,
      name: coin.name,
      price: coin.market_data.current_price.usd,
      market_cap_rank: coin.market_cap_rank,
      market_cap: coin.market_data.market_cap.usd,
      high_24h: coin.market_data.high_24h.usd,
      low_24h: coin.market_data.low_24h.usd,
      price_change: coin.market_data.price_change_24h,
      market_cap_change: coin.market_data.market_cap_change_24h,
      total_supply: coin.market_data.total_supply,
      max_supply: coin.market_data.max_supply,
      circulating_supply: coin.market_data.circulating_supply,
      image: coin.image.large,
      description: coin.description.en,
    };
    // return the object
    return coinData;
  } catch (error) {
    console.error('Error fetching single coin:', error);
    throw error;
  }
};

export default fetchSingleCoin;
