import React from "react";
import { useSharedAmounts } from "../../shared/amounts";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./amountSlider.scss";
import { currencyFormatter } from "../../helpers";

const AmountSlider = () => {
  const { creditAmount, setCreditAmountValue } = useSharedAmounts("0");

  return (
    <div className="amountSlider__slider-container">
      <Slider
        range
        allowCross={false}
        onChange={(value) => setCreditAmountValue(value)}
        min={5000}
        max={50000}
        value={creditAmount}
        step={1}
        included={false}
      />
      <div className="amountSlider__slider-values-container">
        <div className="amountSlider__slider-left">
          {currencyFormatter(5000)}
        </div>
        <div className="amountSlider__slider-right">
          {currencyFormatter(50000)}
        </div>
      </div>
    </div>
  );
};

export default AmountSlider;
