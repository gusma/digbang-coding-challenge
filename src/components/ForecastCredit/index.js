import React from "react";
import { useSharedIntervals } from "../../shared/intervals";
import { useSharedAmounts } from "../../shared/amounts";
import { amountPerMonth } from "../../helpers";

const ForecastCredit = () => {
  const { creditAmount } = useSharedAmounts();
  const { creditInterval } = useSharedIntervals();

  return (
    <div>
      <p>{creditAmount}</p>
      <p>
        Cuota fija por mes:
        {creditAmount && amountPerMonth(creditAmount, creditInterval)}
      </p>
    </div>
  );
};

export default ForecastCredit;
