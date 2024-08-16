


import React, { useState, useEffect } from 'react';
import "./inp.css";

const Inp = ({ name, placeholder, type, value, onChange, onBlur, error ,className,svg,func }) => {
  return (
    <div className="form">
      {error && <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{error}</div>}
      <span className='form_span'>

        <input
          className={className}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}


          />

          <span onClick={func} className='span_eye'>
            {svg}

                </span>
          </span>
    </div>
  );

};

export default Inp;

