

import React from 'react';
import "./button.css";

const Button = ({ text, className, style,icon }) => {
  return (
    <button 
      className={`button_comp ${className}`}
      style={style}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
