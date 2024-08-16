import React from 'react'
import { Outlet } from 'react-router'
import "./verificatinlayout.css"
import login_img from"../../assets/Rectangle 151.png"


const Verificatinlayout = () => {
  return (

<div className='verif'>
        <Outlet/>


    <div className='verif_lay'>
              <div className='verif_lay_cont'>
                <img className='verif_lay_cont_img' src={login_img} alt=""/>
              </div>
         </div>
</div>


  )
}

export default Verificatinlayout

