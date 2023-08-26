import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleCoinAction } from '../redux/slices/singleCoinSlice';
import '../styles/CoinDetailPage.css';

const CoinDetailPage = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.singleCoin.coindata) || {};

  useEffect(() => {
    dispatch(fetchSingleCoinAction(coinId));
  }, [dispatch, coinId]);

  return (
    <div className="coin-detail-page">
      <div className="coin-header">
        <img
          className="coin-image"
          src={coinData.image}
          alt={`${coinData.name} Logo`}
        />
        <div className="coin-name-price">
          <h2>{coinData.name}</h2>
          <h3 className="coin-price">
            Current Price: $
            {coinData.price}
          </h3>
        </div>
      </div>
      <div className="details-header">
        <h1>
          Explore
          {coinData.name}
          {' '}
          Details
        </h1>
        <p>
          Get comprehensive information about ⭐
          {coinData.name}
          {' '}
          performance
          below👇🏾
        </p>
      </div>

      <div className="coin-details">
        <div className="singleCoinDetails">
          <h3>Market Cap Rank</h3>
          <p>{coinData.market_cap_rank}</p>
        </div>
        <div className="singleCoinDetails">
          <h3>Market Cap</h3>
          <p>
            $
            {coinData.market_cap}
          </p>
        </div>
        <div className="singleCoinDetails">
          <h3>24h High</h3>
          <p>
            $
            {coinData.high_24h}
          </p>
        </div>
        <div className="singleCoinDetails">
          <h3>24h Low</h3>
          <p>
            $
            {coinData.low_24h}
          </p>
        </div>
        <div className="singleCoinDetails">
          <h3>Price Change 24h</h3>
          <p>
            $
            {coinData.price_change}
          </p>
        </div>
        <div className="singleCoinDetails">
          <h3>Market Cap Change</h3>
          <p>
            $
            {coinData.market_cap_change}
          </p>
        </div>
        <div className="singleCoinDetails">
          <h3>Total Supply</h3>
          <p>{coinData.total_supply}</p>
        </div>
        <div className="singleCoinDetails">
          <h3>Max Supply</h3>
          <p>{coinData.max_supply}</p>
        </div>
        <div className="singleCoinDetails">
          <h3>Circulating Supply</h3>
          <p>{coinData.circulating_supply}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailPage;
