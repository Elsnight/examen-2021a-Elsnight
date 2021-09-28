import React from "react";
import PropTypes from "prop-types";

import "../styles/BlueButton.css";

export const Button = ({ button_name, button_func }) => {
  return (
    <button className="button" onClick={button_func}>
      {button_name}
    </button>
  );
};

Button.propTypes = {
  button_name: PropTypes.string,
  button_func: PropTypes.func,
};
