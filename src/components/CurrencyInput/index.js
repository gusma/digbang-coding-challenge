import React from "react";
import { useSharedAmounts } from "../../shared/amounts";
import CurrencyFormat from "react-currency-format";

const CurrencyInput = () => {
  const { creditAmount, setCreditAmountValue } = useSharedAmounts("0");

  return (
    <div>
      <h2>Monto total</h2>

      <CurrencyFormat
        thousandSeparator={true}
        prefix={"$"}
        value={parseFloat(creditAmount)}
        onValueChange={(values) => {
          const { floatValue } = values;
          setCreditAmountValue(floatValue);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
