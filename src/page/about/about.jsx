import React from 'react'
import "./about.css"
import about from '../../assets/aboutus.png'

const About = () => {
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
               <img src={about} alt="" />
            </div>

            <div className='about_product_cont_right'>

                <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. <br /> <br />
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. <br /> <br />
Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat et voluptates repudiandae sint et molestiae non

                </p>

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