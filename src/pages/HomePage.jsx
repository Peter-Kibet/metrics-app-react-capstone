import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoinsAction } from '../redux/slices/coinSlice';

import CoinComponent from '../components/Coin';
import '../styles/HomePage.css';

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
      <div className="searchBar">
        <input
          className="search"
          type="text"
          placeholder="Search for Crypto Coin"
          onChange={handleChange}
        />
      </div>

      <div className="header-section">
        <h1>Discover the World of Cryptocurrencies</h1>
        <p>Explore the latest trends, prices, and market insights</p>
      </div>
      <div className="coinContainer">
        {filteredCoins.map((coin) => (
          <Link className="coin-link" to={`/details/${coin.id}`} key={coin.id}>
            <CoinComponent
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
