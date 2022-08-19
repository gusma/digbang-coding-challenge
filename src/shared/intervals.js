import { useState } from "react";
import { useBetween } from "use-between";

const useIntervals = () => {
  const [creditInterval, setCreditIntervalValue] = useState("1");

  return {
    creditInterval,
    setCreditIntervalValue,
  };
};

export const useSharedIntervals = () => useBetween(useIntervals);
