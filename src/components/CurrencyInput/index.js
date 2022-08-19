import React from "react";
import { useSharedAmounts } from "../../shared/amounts";
import CurrencyFormat from "react-currency-format";
import "./currencyInput.scss";

const CurrencyInput = () => {
  const { creditAmount, setCreditAmountValue } = useSharedAmounts("0");

  return (
    <div className="currency-input__currency--container">
      <div className="currency-input__currency--child-element">
        <h2 className="currency-input__element--title">Monto total</h2>
      </div>
      <div className="currency-input__currency--child-element">
        <CurrencyFormat
          className="currency-input__currency--input"
          thousandSeparator={true}
          prefix={"$"}
          value={parseFloat(creditAmount)}
          onValueChange={(values) => {
            const { floatValue } = values;
            setCreditAmountValue(floatValue);
          }}
        />
      </div>
    </div>
  );
};

export default CurrencyInput;
