import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import "./verificatinlayout.css"
import login_img from"../../assets/Rectangle 151.png"


const Verificatinlayout = () => {

  const[data,setData] = useState([])

useEffect(() => {
  const fetchDataProducts = async () => {
    try {
      const res = await fetch("http://localhost:3004/authentication");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setData(data);



    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  fetchDataProducts();

}, []);
  return (

<div className='verif'>
        <Outlet/>


    <div className='verif_lay'>
              <div className='verif_lay_cont'>
                <img className='verif_lay_cont_img' src={data.image} alt=""/>
              </div>
         </div>
</div>


  )
}

export default Verificatinlayout

