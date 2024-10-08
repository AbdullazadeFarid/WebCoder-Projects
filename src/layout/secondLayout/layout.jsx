

import React, { useContext, useState } from 'react';
import Header from '../../shared/header/header';
import Footer from '../../shared/footer/footer';
import { Outlet } from 'react-router';
import "./layout.css";
import { SearchContext } from '../../context/context';
import Search_results from '../../page/search_results/search_results';


const Layout = () => {

const [overlayVisible,setOverlayVisible] = useState(false)
const [serchresults,Setsearchresults] = useState("")
const { inp, setInp } =useContext(SearchContext)




  return (
    <>

<div className={overlayVisible ? 'overlay-active' : ''}>
        <Header Setsearchresults={Setsearchresults} setOverlayVisible={setOverlayVisible} />
        <main className={overlayVisible ? 'main-blur' : ''}>
          {
            inp.length<1 ? <Outlet/> : <Search_results />
          }
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
