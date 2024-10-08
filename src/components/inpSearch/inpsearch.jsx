


import React, { useContext } from 'react';
import "./inpsearch.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SearchContext } from '../../context/context';


const Inpsearch = ({ iconClick }) => {
  const { inp, setInp } =useContext(SearchContext)


  const inpValue = (e) => {
    setInp(e.target.value);

  };

  return (
    <>
      <form className="home_search_cont">
        <div className="home_search_cont_icon">
          <IoSearchOutline onClick={iconClick} size="22" color="black" />
        </div>
        <input value={inp} onChange={inpValue} placeholder="SEARCH OUR STORE" className="home_search_cont_icon_inp" />
        <div className="home_search_cont_icon_close">
          <IoMdClose onClick={iconClick} color="black" />
        </div>
      </form>
    </>
  );
}

export default Inpsearch;








