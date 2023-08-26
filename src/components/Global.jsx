import React from 'react';
import { useSelector } from 'react-redux';

const GlobalComponent = () => {
  const globalData = useSelector((state) => state.global.global);

  return (
    <div className="global">
      <h2>Global Data</h2>
      <p>
        Active Cryptocurrencies:
        {globalData}
      </p>
    </div>
  );
};

export default GlobalComponent;
