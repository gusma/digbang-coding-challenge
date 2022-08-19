import React from "react";
import { useSharedAmounts } from "../../shared/amounts";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { currencyFormatter } from "../../helpers";

const AmountSlider = () => {
  const { creditAmount, setCreditAmountValue } = useSharedAmounts("0");

  return (
    <div className="slider">
      <Slider
        range
        allowCross={false}
        onChange={(value) => setCreditAmountValue(value)}
        min={0}
        max={50000}
        value={creditAmount}
        step={1}
        included={false}
      />
      <div>{currencyFormatter(0)}</div>
      <div>{currencyFormatter(50000)}</div>
    </div>
  );
};

export default AmountSlider;
