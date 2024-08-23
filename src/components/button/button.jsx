

import React from 'react';
import "./button.css";

const Button = ({click, text, className, style,icon }) => {
  return (
    <button onClick={click}
      className={`button_comp ${className}`}
      style={style}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
