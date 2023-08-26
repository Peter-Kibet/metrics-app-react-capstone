// services/fetchCoins.js
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

const fetchCoins = async () => {
  try {
    const response = await axios.get(API_URL);
    const coins = response.data;
    // create an array of objects with the data you need
    const coinsData = coins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
    }));
    // return the array
    return coinsData;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error;
  }
};

export default fetchCoins;
