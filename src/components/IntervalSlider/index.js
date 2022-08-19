import React from "react";
import { useSharedIntervals } from "../../shared/intervals";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./intervalSlider.scss";

const IntervalSlider = () => {
  const { creditInterval, setCreditIntervalValue } = useSharedIntervals("3");

  return (
    <div className="intervalSlider__slider">
      <Slider
        range
        allowCross={false}
        onChange={(value) => setCreditIntervalValue(value)}
        min={3}
        max={24}
        value={creditInterval}
        step={1}
        included={false}
      />
      <div className="intervalSlider__limit-container">
        <div className="intervalSlider__limit-container-left">3</div>
        <div className="intervalSlider__limit-container-right">24</div>
      </div>
    </div>
  );
};

export default IntervalSlider;
