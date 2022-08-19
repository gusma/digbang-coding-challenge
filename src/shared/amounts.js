import { useState } from "react";
import { useBetween } from "use-between";

const useAmounts = () => {
  const [creditAmount, setCreditAmountValue] = useState("0");

  return {
    creditAmount,
    setCreditAmountValue,
  };
};

export const useSharedAmounts = () => useBetween(useAmounts);
