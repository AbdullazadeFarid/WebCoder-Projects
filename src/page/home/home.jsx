
import React, { useEffect, useState } from 'react'
import "./home.css"
import Button from '../../components/button/button'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import primaryimg from '../../assets/Rectangle 1 (1).png'
import Slider from '../../components/slider/slider';
import aboutus from "../../assets/aboutus.png"
import backgr from "../../assets/Group 3302.png"
import contactimg from '../../assets/sliderimg/contact.png'
import Products from '../../components/products/products';
//slider
import slide1 from "../../assets/sliderimg/Rectangle 109.png"
import slide2 from "../../assets/sliderimg/Rectangle 110.png"
import slide3 from "../../assets/sliderimg/Rectangle 111.png"
import slide4 from "../../assets/sliderimg/Rectangle 112.png"

//pr
import pr1 from '../../assets/products/Rectangle 117.png'
import pr2 from '../../assets/products/Rectangle 119.png'
import pr3 from '../../assets/products/Rectangle 119.png'
import pr4 from '../../assets/products/Rectangle 121.png'
import Inp from '../../components/inp/inp';

const Home = () => {

  const [data,setdata]=useState([])
  useEffect(() => {
    const fetchDataAbout = async () => {
      try {
        const res = await fetch("http://localhost:3004/about");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setdata(data);  // Сохраняем данные в состоянии
      } catch (error) {
      }
    };

    fetchDataAbout();
  }, []);



  const [productss, setProductss] = useState([]);

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProductss(data);  // Сохраняем данные в состоянии
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchDataProducts();

  }, []);
  // console.log(productss);


const [collection,setCollection]=useState([])

useEffect(() => {
  const fetchDataCollection = async () => {
    try {
      const res = await fetch("http://localhost:3004/collections");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCollection(data);  // Сохраняем данные в состоянии
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  fetchDataCollection();
}, []);
// console.log(collection);


const [discount,setDiscount]=useState([])

useEffect(() => {
  const fetcDiscount = async () => {
    try {
      const res = await fetch("http://localhost:3004/discount");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setDiscount(data);  // Сохраняем данные в состоянии

    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  fetcDiscount();
}, []);



const [headtitle,setHeadtitle]=useState([])

useEffect(() => {
  const fetchdatahead = async () => {
    try {
      const res = await fetch("http://localhost:3004/heading");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setHeadtitle(data);  // Сохраняем данные в состоянии


    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  fetchdatahead();
  // console.log(headtitle);
}, []);








  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [nameerr,setNameerr] = useState("")
  const [emailerr,setEmailerr] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validateName(name);
  };


  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailerr("Invalid email. For example: homedecor@mail.ru");
    } else {
      setEmailerr('');
    }
  };

  const validateName=(name)=>{
    if(name.length<3){
      setNameerr("Password must be at least 3 characters long");
      }
      else{
        setNameerr("");
        }

  }

  return (
    <>
      <div className='conta'>
        <section className='home'>
          <div className='home_left'>
            <h5 className='home_left_title'>{headtitle.title}</h5>
            <p className='home_left_subtitle'>{headtitle.desc}</p>
            <div>
              <Button
                text="SHOP NOW"
                className="about_shopnow_btn"
                icon={<HiOutlineShoppingBag />}
              />
            </div>
          </div>
          <div className='home_right'>
            <div className='home_right_backgr'></div>
            <img className='home_right_img' src={headtitle.image} alt="" />
          </div>
        </section>



        <section className='furniture_section'>
          <Slider slides={collection} />
        </section>

        <section className='aboutus'>
          <h3  className='aboutus_title'>ABOUT US</h3>
          <div className='aboutus_cont'>
            <div className='aboutus_cont_left'>
              <img src={data.image} alt="about_img" />
            </div>
            <div className='aboutus_cont_right'>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                <br /><br />
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <Button
                text="LEARN MORE"
                className="about_shopnow_btn"
                style={{ backgroundColor: "transparent", color: "rgba(184, 146, 106, 1)" }}
              />
            </div>
          </div>
        </section>
      </div>

      <section style={{ backgroundImage: `url(${discount.image})` }} className='discount'>
        <h2 className='discount_title'>{discount.sale} DISCOUNT</h2>
        <div className='discount_text'>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          </p>
        </div>
        <div className='discount_btn'>
          <Button
            text="SHOP NOW"
            className="about_shopnow_btn"
            icon={<HiOutlineShoppingBag />}
          />
        </div>
      </section>

      <div className='cont'>
        <section className='section_products'>
          <div className='section_products_top'>
            <h2 className='section_products_top_title'>PRODUCTS</h2>
            <p  className='section_products_top_desc'>
             "SHOW LESS
            </p>
          </div>
          <Products
                 products={productss}
/>
        </section>



      <section className='most_popular'>
        <h2 className='most_popular_title'>MOST POPULAR</h2>
        <Slider
        slides={collection}
        />

      </section>

        </div>

      <section className='collections'>
        <div className='cont collections_cont'>

        <h2 className='collections_cont_title'>COLLECTIONS</h2>
        <Slider
        slides={collection}
        />
        </div>

      </section>



    <section className='about_contact'>

        <div className='cont'>
      <h2 className='about_contact_title'>CONTACT </h2>

<div className='about_contact_bottom'>

          <form onSubmit={handleSubmit} className='about_contact_bottom_form'>
               <Inp
               className="password_comp"
               placeholder="NAME, SURNAME"
                onChange={(e) => setName(e.target.value)}
                type={"text"}
               error={nameerr}
              />

             <Inp
               className="password_comp"
               placeholder="E-MAIL ADRESS"
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
              error={emailerr}
              />

            <Inp
               className="password_comp"
               placeholder="THEME"

              />

             <div className='about_contact_bottom_form_text'>
             <textarea placeholder='YOUR MESSAGE' className='about_contact_bottom_form_text_textarea' name="" id=""></textarea>
              <Button
            text="LOG IN"
            style={{ maxWidth: "467px" }}

            />
             </div>
          </form>






           <div className='about_contact_bottom_right' >

                   <img src={contactimg} alt="" />

           </div>
        </div>
    </div>


    </section>



    </>
  );
}

export default Home;
