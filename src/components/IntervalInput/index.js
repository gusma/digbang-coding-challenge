import { useSharedIntervals } from "../../shared/intervals";

const IntervalInput = () => {
  const { creditInterval, setCreditIntervalValue } = useSharedIntervals();

  const minInterval = 1;
  const maxInterval = 24;
  const handleChange = (event) => {
    const value = Math.max(
      minInterval,
      Math.min(maxInterval, Number(event.target.value))
    );
    setCreditIntervalValue(value);
  };

  return (
    <div>
      <h2>Plazo</h2>
      <input
        type="text"
        pattern="\d*"
        placeholder="1"
        size="2"
        maxLength={2}
        max="24"
        value={creditInterval}
        onChange={handleChange}
      />
    </div>
  );
};

export default IntervalInput;
