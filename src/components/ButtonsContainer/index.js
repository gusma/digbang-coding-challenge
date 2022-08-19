import React from "react";

import "./buttonsContainer.scss";

const ButtonsContainer = () => {
  return (
    <div className="main-page__call-to-action--buttons">
      <button
        className="button button__state-call-to-action"
        onClick={() => {
          alert("Crédito obtenido!");
        }}
      >
        Obtené crédito
      </button>
      <button
        className="button button__state-view-details"
        onClick={() => {
          alert("Detalle en cuotas");
        }}
      >
        Ver detalle de cuotas
      </button>
    </div>
  );
};

export default ButtonsContainer;
