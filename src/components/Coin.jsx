import React from 'react';
import PropTypes from 'prop-types';

const CoinComponent = ({ name, image, price }) => (
  <div className="coin">
    <img src={image} alt={name} className="coin-image" />
    <h1 className="coin-name">{name}</h1>
    <p className="coin-price">
      $
      {price}
    </p>
  </div>
);

CoinComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CoinComponent;
