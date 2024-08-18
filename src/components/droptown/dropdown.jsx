

import React, { useState } from 'react';
import "./dropdown.css";
import { BsSortDownAlt } from "react-icons/bs";




const Dropdown = ({ btnname, icon, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown' onClick={toggleDropdown}>
      <div className="dropdown_first">
        {icon}
        <h2>{btnname}</h2>
      </div>
      {isOpen && (
        <div className='dropdown_list'>
          {options.map((option, index) => (
            <div key={index}>
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
