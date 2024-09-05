


import React, { useContext, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./header.css";
import Inpsearch from "../../components/inpSearch/inpsearch";
import { SearchContext } from '../../context/context';

const Header = ({ setOverlayVisible }) => {
  const location = useLocation()
  // console.log(location);


  const nav = useNavigate()


  const basketClick=()=>{
    nav("/basket")
  }


  const [currentLang, setCurrentLang] = useState("Az");
  const [showLangList, setShowLangList] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [active, Setactive] = useState("");
  const [inputshow, Setinputshow] = useState(false);


  const toggleLangList = () => {
    setShowLangList(!showLangList);
  };

  const selectLang = (lang) => {
    setCurrentLang(lang);
    setShowLangList(false);
  };

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleActive = (activenav) => {
    Setactive(activenav);
  };

  const iconClick = () => {
    Setinputshow(!inputshow);
    setOverlayVisible(!inputshow);
  };
  const { inp, setInp } =useContext(SearchContext)


  const closeBurg=()=>{
    setBurgerOpen(false)
  }


  return (
    <>
      <header className="header">
        <div className="cont">
          {inputshow ? (
            <Inpsearch iconClick={iconClick} inputshow={inputshow} />
          ) : (
            <div className="header_head">
              <div className='header_head_left'>
                <div className='header_head_left_lang' onClick={toggleLangList}>
                  <h6 className='header_head_left_lang_az'>{currentLang}</h6>
                  {showLangList && (
                    <div className='header_left_lang_list'>
                      <h6 className="header_left_lang_list_sel" onClick={() =>selectLang("Az")}>Az</h6>
                      <h6 className="header_left_lang_list_sel" onClick={() => selectLang("En")}>En</h6>
                      <h6 className="header_left_lang_list_sel" onClick={() => selectLang("Ru")}>Ru</h6>
                    </div>
                  )}
                </div>

                <IoSearchOutline onClick={iconClick} size={24} />

                <div className={`burger ${burgerOpen ? 'open' : ''}`} onClick={toggleBurger}>
                  <div className="burger_top br"></div>
                  <div className="burger_beetwen br"></div>
                  <div className="burger_bottom br"></div>
                </div>
              </div>

              <div className='header_head_middle'>
                <h1 className='header_head_middle_title'>HomeDecor</h1>
              </div>

              <div className='header_head_right'>
                <SlBasket onClick={basketClick} size={24} />
                <Link to="/login" className="user-link">
                  <CiUser color="black" size={24} />
                </Link>
              </div>
            </div>
          )}

          <nav className={`header_nav ${burgerOpen ? 'navopen' : ''}`}>
            <div className='header_burger_nav '>
              <SlBasket size={24} />
              <CiUser size={24} />
            </div>

            <ul className="header_nav_items">
              <Link  to="/" className={`header_nav_items_item ${location.pathname === "/" ? "activelink" : ""}`}onClick={() => {setInp("");handleActive("Home"); closeBurg()}}>Home</Link>
              <Link to="/about" className={`header_nav_items_item ${location.pathname === "/about" ? "activelink" : ""}`} onClick={() => { setInp("");handleActive("About");closeBurg()}}>About</Link>
              <Link to="Filterproducts" className={`header_nav_items_item ${location.pathname === "/Filterproducts" ? "activelink" : ""}`} onClick={() => {handleActive("Products");closeBurg()}}>Products</Link>
              <Link to="/collection" className={`header_nav_items_item ${location.pathname === "/collection" ? "activelink" : ""}`} onClick={() => {handleActive("Collections");closeBurg()}}>Collections</Link>
              {/* <li className={`header_nav_items_item ${active === "Sale" ? "activelink" : ""}`} onClick={() => handleActive("Sale")}>Sale</li> */}
              <Link to="/contact" className={`header_nav_items_item ${location.pathname === "/contact" ? "activelink" : ""}`} onClick={() => {handleActive("Contact");closeBurg()}}>Contact</Link>
            </ul>

            <div className="burg_menu_az">
              <div className="burger_menu_lang">
                <h4 className={`burger_menu_lang_item ${currentLang === "Az" ? "backgr_nav" : ""}`} onClick={() => selectLang("Az")}>Az</h4>
                <h4 className={`burger_menu_lang_item ${currentLang === "En" ? "backgr_nav" : ""}`} onClick={() => selectLang("En")}>En</h4>
                <h4 className={`burger_menu_lang_item ${currentLang === "Ru" ? "backgr_nav" : ""}`} onClick={() => selectLang("Ru")}>Ru</h4>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
