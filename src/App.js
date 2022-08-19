import React from "react";

import {
  AmountSlider,
  AppContainer,
  ButtonsContainer,
  CurrencyInput,
  ForecastCredit,
  IntervalInput,
  IntervalSlider,
} from "./components";

const App = () => {
  return (
    <AppContainer>
      <CurrencyInput />
      <AmountSlider />
      <IntervalInput />
      <IntervalSlider />
      <ForecastCredit />
      <ButtonsContainer />
    </AppContainer>
  );
};

export default App;
