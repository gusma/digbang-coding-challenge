import React from "react";
import PropTypes from "prop-types";

import "../../assets/main.scss";

const AppContainer = ({ children }) => {
  return (
    <div className="AppContainer__container">
      <div className="AppContainer__container-box">
        <div>
          <h1>Simulá tu crédito</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

AppContainer.propTypes = { children: PropTypes.node.isRequired };

export default AppContainer;
