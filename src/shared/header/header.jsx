import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";




import React, { useState } from 'react';
import "./header.css";
import Inpsearch from "../../components/inpSearch/inpsearch";

const Header = ({setOverlayVisible , Setsearchresults}) => {
  const [currentLang, setCurrentLang] = useState("Az");
  const [showLangList, setShowLangList] = useState(false);

  const toggleLangList = () => {
    setShowLangList(!showLangList);
  };

  const selectLang = (lang) => {
    setCurrentLang(lang);
    setShowLangList(false);
  };


  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };





  const [active, Setactive] = useState("Home")
  const handleActive = (activenav) => {
    Setactive(activenav)
    }



    const[inputshow,Setinputshow] = useState(false)
    const iconClick=()=>{
        Setinputshow(!inputshow)
        setOverlayVisible(!inputshow)
     }


     const [inp, setInp] = useState('')

     const inpValue = (e) =>{
       setInp(e.target.value)
       if(inp.length>0){
        Setsearchresults(inp)
       }

      }






  return (
    <>

      <header className="header">


        <div className="cont">
      {
        inputshow
        ?
        <Inpsearch inp={inp} inpValue={inpValue} iconClick={iconClick}  inputshow={inputshow}/>
        :

          <div className="header_head" >
            <div className='header_head_left'>
              <div className='header_head_left_lang' onClick={toggleLangList}>
                <h6 className='header_head_left_lang_az'>{currentLang}</h6>
                {showLangList && (
                  <div className='header_left_lang_list'>
                    <h6 className="header_left_lang_list_sel" onClick={() => selectLang("Az")}>Az</h6>
                    <h6 className="header_left_lang_list_sel" onClick={() => selectLang("En")}>En</h6>
                    <h6 className="header_left_lang_list_sel" onClick={() => selectLang("Ru")}>Ru</h6>
                  </div>
                )}
              </div>

              <IoSearchOutline onClick={iconClick} size={24} />

              <div className={`burger ${burgerOpen ? 'open' : ''}`}  onClick={toggleBurger} >
              <div className="burger_top br"></div>
              <div className="burger_beetwen br"></div>
              <div className="burger_bottom br"></div>
            </div>
            </div>


            <div className='header_head_middle'>
              <h1 className='header_head_middle_title'>HomeDecor</h1>
            </div>

            <div className='header_head_right'>
              <SlBasket  size={24} />

              <Link to="/login" className="user-link">
        <CiUser color="black" size={24} />
      </Link>


            </div>

          </div>
      }




          <nav className={`header_nav ${burgerOpen ? 'navopen' : ''}`}>

          <div className='header_burger_nav '>
              <SlBasket size={24} />
              <CiUser  size={24} />
            </div>

            <ul className="header_nav_items">
  <Link to="/" className={`header_nav_items_item ${active === "Home" ? "activelink" : ""}`} onClick={() => handleActive("Home")}>Home</Link>
  <Link to="/about" className={`header_nav_items_item ${active === "About" ? "activelink" : ""}`} onClick={() => handleActive("About")}>About</Link>
  <li className={`header_nav_items_item ${active === "Products" ? "activelink" : ""}`} onClick={() => handleActive("Products")}>Products</li>
  <li className={`header_nav_items_item ${active === "Collections" ? "activelink" : ""}`} onClick={() => handleActive("Collections")}>Collections</li>
  <li className={`header_nav_items_item ${active === "Sale" ? "activelink" : ""}`} onClick={() => handleActive("Sale")}>Sale</li>
  <li className={`header_nav_items_item ${active === "Contact" ? "activelink" : ""}`} onClick={() => handleActive("Contact")}>Contact</li>
</ul>


<div className="burg_menu_az">


<div className="burger_menu_lang">
    <h4  className={`burger_menu_lang_item ${currentLang === "Az" ? "backgr_nav" : ""}`}onClick={() =>selectLang("Az")}>Az</h4>
    <h4 className={`burger_menu_lang_item ${currentLang === "En" ? "backgr_nav" : "" }`} onClick={() =>selectLang("En")}> En</h4>
    <h4 className={`burger_menu_lang_item ${currentLang === "Ru" ? "backgr_nav" : "" }`} onClick={() => selectLang("Ru")}>Ru</h4>
  </div>
</div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
