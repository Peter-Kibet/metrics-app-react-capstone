import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinancialData } from "../redux/reducers/financialDataReducer";

const Home = () => {
  const dispatch = useDispatch();
  const financialData = useSelector((state) => state.financialData.data);

  useEffect(() => {
    dispatch(fetchFinancialData());
  }, [dispatch]);

  return (
    <div>
      <h1>Financial Metrics</h1>
      <ul>
        {financialData.map((metric) => (
          <li key={metric.symbol}>
            {metric.symbol} - Revenue: {metric.revenue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
