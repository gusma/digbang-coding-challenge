import React from "react";
import { useSharedIntervals } from "../../shared/intervals";
import { useSharedAmounts } from "../../shared/amounts";
import { amountPerMonth } from "../../helpers";
import "./forecastCredit.scss";

const ForecastCredit = () => {
  const { creditAmount } = useSharedAmounts();
  const { creditInterval } = useSharedIntervals();

  return (
    <div className="main-page__forecast-credit--marquee">
      <div className="main-page__forecast-credit--marquee-label">
        Cuota fija por mes:
      </div>
      <div className="main-page__forecast-credit--marquee-value">
        {creditAmount && amountPerMonth(creditAmount, creditInterval)}
      </div>
    </div>
  );
};

export default ForecastCredit;
