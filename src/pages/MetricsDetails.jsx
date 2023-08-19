import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MetricsDetails = () => {
  const { symbol } = useParams();
  const financialData = useSelector((state) => state.financialData.data);
  const metric = financialData.find((item) => item.symbol === symbol);

  if (!metric) {
    return <div>Metrics not found</div>;
  }

  return (
    <div>
      <h2>Metrics Details</h2>
      <p>Symbol: {metric.symbol}</p>
      <p>Revenue: {metric.revenue}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MetricsDetails;
