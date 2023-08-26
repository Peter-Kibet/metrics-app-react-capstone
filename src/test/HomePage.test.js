import React from 'react';
import { render } from '@testing-library/react';
import CoinDetailPage from '../pages/CoinDetailPage';

test('renders CoinDetailPage component', () => {
  const { getByText } = render(<CoinDetailPage />);
  const pageTitle = getByText(/Explore Bitcoin Details/i);
  expect(pageTitle).toBeInTheDocument();
});
