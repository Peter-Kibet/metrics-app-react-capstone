import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>Project Heading</h1>
    <Link to="/" className="back-button">
      &lt; Back
    </Link>
  </nav>
);

export default Navigation;
