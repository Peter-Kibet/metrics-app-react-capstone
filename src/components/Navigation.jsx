import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <nav>
    <Link to="/" className="back-button">
      &lt; Back
    </Link>
    <h1>Crypto Reporter</h1>
  </nav>
);

export default Navigation;
