import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoinsAction } from '../redux/slices/coinSlice';
import GlobalComponent from '../components/Global';
import CoinComponent from '../components/Coin';

const HomePage = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);

  useEffect(() => {
    dispatch(fetchCoinsAction());
  }, [dispatch]);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search for Cryptocurrency"
          onChange={handleChange}
        />
      </div>
      <GlobalComponent />
      <div className="section-header">
        <h1>Discover the World of Cryptocurrencies</h1>
        <p>Explore the latest trends, prices, and market insights</p>
      </div>
      <div className="coin-container">
        {filteredCoins.map((coin) => (
          <Link className="coin-link" to={`/details/${coin.id}`} key={coin.id}>
            <CoinComponent
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
