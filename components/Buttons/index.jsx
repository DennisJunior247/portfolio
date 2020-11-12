import React from "react";
import propTypes from "prop-types";
import { Button } from "./styles";

const CustomButton = ({ text, icon, click, ...otherProps }) => {

  return (
    <Button 
      text={text} 
      icon={icon} 
      onClick={click}
      {...otherProps}
    >
      {icon}
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  //   type: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  //   disabled: propTypes.bool,
  //   to: propTypes.string
};

export default CustomButton;
