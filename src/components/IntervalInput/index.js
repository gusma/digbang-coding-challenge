import React from "react";
import { useSharedIntervals } from "../../shared/intervals";
import "./intervalInput.scss";

const IntervalInput = () => {
  const { creditInterval, setCreditIntervalValue } = useSharedIntervals();

  const minInterval = 3;
  const maxInterval = 24;
  const handleChange = (event) => {
    const value = Math.max(
      minInterval,
      Math.min(maxInterval, Number(event.target.value))
    );
    setCreditIntervalValue(value);
  };

  return (
    <div className="interval-input__interval--container">
      <div className="interval-input__interval--child-element interval-input__interval--title">
        <h2 className="interval-input__element--title">Plazo</h2>
      </div>
      <div className="interval-input__interval--child-element interval-input__interval--input">
        <input
          className="interval-input__interval--input"
          type="text"
          // pattern="\d*"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="1"
          size="2"
          maxLength={2}
          max="24"
          value={creditInterval}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default IntervalInput;
