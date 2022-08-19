import "./App.css";
import {
  AmountSlider,
  CurrencyInput,
  ForecastCredit,
  IntervalInput,
} from "./components";

const App = () => {
  return (
    <div className="calculator">
      <div>
        <div>
          <h1>Simulá tu crédito</h1>
        </div>
        <CurrencyInput />
        <AmountSlider />
        <IntervalInput />
        <ForecastCredit />
        <div>
          <button>Obtené crédito</button>
          <button>Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default App;
