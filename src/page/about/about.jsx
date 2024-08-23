import React, { useEffect, useState } from 'react'
import "./about.css"
import about from '../../assets/aboutus.png'

const About = () => {
    const [data,setdata]=useState([])
    useEffect(() => {
      const fetchDataAbout = async () => {
        try {
          const res = await fetch("http://localhost:3004/about");
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          console.log(data);  // Вывод данных в консоль
          setdata(data);  // Сохраняем данные в состоянии
        } catch (error) {
        }
      };

      fetchDataAbout();
    }, []);
  return (

    <>

    <div className="cont">
    <section className='section_navigate'>
        <h6 className='section_navigate_prev'>Home</h6>
        <div className='section_navigate_divide'></div>
        <h6 className='section_navigate_now'>About </h6>

    </section>




    <section className='about_product'>
        <h2  className='about_product_title'>ABOUT US</h2>

        <div className='about_product_cont'>
            <div className='about_product_cont_left'>
               <img src={data.image} alt="" />
            </div>

            <div className='about_product_cont_right'>

                <p>{data.desc} </p>

            </div>

        </div>

    </section>

    <section className='price'>
        <div>
            <h2 className='price_num'>500+</h2>
            <p className='price_desc'>PROJECTS</p>
        </div>

        <div>
            <h2 className='price_num'>70+</h2>
            <p className='price_desc'>PARTNERS</p>
        </div>

        <div>
            <h2 className='price_num'>30K+</h2>
            <p className='price_desc'>FOLLOWERS</p>
        </div>

        <div>
            <h2 className='price_num'>25+</h2>
            <p className='price_desc'>YEARS</p>
        </div>

    </section>
    </div>
    </>

  )
}

export default About