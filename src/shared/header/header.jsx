


import React, { useContext, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./header.css";
import Inpsearch from "../../components/inpSearch/inpsearch";
import { SearchContext } from '../../context/context';

const Header = ({ setOverlayVisible }) => {
  const location = useLocation()  // location bize nav linklere klikliyerek path lerin goturub ollarimistifade ederek acrive class yazmagda komek edir

  const {activeuser } =useContext(SearchContext) // activeuseri i cagiririg context den ki true oldugda ve falsemoldugda usericonuna basanda hara yoneldiyini bildirmek ucun

  const { setInp } =useContext(SearchContext)


  const nav = useNavigate()


  const basketClick=()=>{
    nav("/basket")
    closeBurg()

  }




  const [currentLang, setCurrentLang] = useState("Az");
  const [showLangList, setShowLangList] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
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

  const iconClick = () => {
    Setinputshow(!inputshow);
    setOverlayVisible(!inputshow);
  };


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
                <Link to="./" className='header_head_middle_title'>HomeDecor</Link>
              </div>

              <div className='header_head_right'>
                <SlBasket onClick={basketClick} size={24} />
                <Link
                   to={activeuser ? "/useraccount" : "/login"}
                   className="user-link">
                     <CiUser color="black" size={24} />
              </Link>

              </div>
            </div>
          )}

          <nav className={`header_nav ${burgerOpen ? 'navopen' : ''}`}>
            <div className='header_burger_nav '>
              <SlBasket  onClick={basketClick} size={24} />
              {/* <CiUser size={24} /> */}
              <Link
  onClick={() => closeBurg()}
  to={activeuser ? "/useraccount" : "/login"}
  className="user-link">
  <CiUser color="black" size={24} />
</Link>


            </div>

            <ul className="header_nav_items">
              <Link  to="/" className={`header_nav_items_item ${location.pathname === "/" ? "activelink" : ""}`}onClick={() => {setInp(""); closeBurg()}}>Home</Link>
              <Link to="/about" className={`header_nav_items_item ${location.pathname === "/about" ? "activelink" : ""}`} onClick={() => { setInp("");closeBurg()}}>About</Link>
              <Link to="Filterproducts" className={`header_nav_items_item ${location.pathname === "/Filterproducts" ? "activelink" : ""}`} onClick={() => {closeBurg()}}>Products</Link>
              <Link to="/collection" className={`header_nav_items_item ${location.pathname === "/collection" ? "activelink" : ""}`} onClick={() => {closeBurg()}}>Collections</Link>
              {/* <li className={`header_nav_items_item ${active === "Sale" ? "activelink" : ""}`} onClick={() => handleActive("Sale")}>Sale</li> */}
              <Link to="/contact" className={`header_nav_items_item ${location.pathname === "/contact" ? "activelink" : ""}`} onClick={() => {closeBurg()}}>Contact</Link>
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
