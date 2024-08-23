
import React, { useEffect, useState } from 'react';
import "./basket.css";
import { IoMdClose } from "react-icons/io";
import Button from '../../components/button/button';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  const nav = useNavigate()

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);



    const updateCartItems = (items) => {
      setCartItems([...items]);
      localStorage.setItem('cartItems', JSON.stringify(items));
    };

  const incrementCount = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].count += 1;
    updateCartItems(updatedItems);
  };

  const decrementCount = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].count > 1) {
      updatedItems[index].count -= 1;
      updateCartItems(updatedItems);
    }
  };


  const deleteItems = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    updateCartItems(updatedItems);
  };

  const NavCheckout=()=>{
    nav('/checkout')
  }

  return (
    <div className='cont'>
      <div className='basket'>
        <div className='basket_title'>
          <h2 className='basket_title_home'>Home</h2>
          <div className='basket_title_line'></div>
          <h2 className='basket_title_shopping'>Shopping cart</h2>
        </div>

        <div className='basket_main'>
          <h2 className='basket_main_left_title'>SHOPPING CART</h2>
          <div className='basket_main_section'>
            <div className='basket_main_section_left'>
              {cartItems.length > 0 ? (
                <div className='basket_main_section_left_products'>
                  {cartItems.map((item, index) => (
                    <div key={index} className='basket_main_section_left_products_product'>
                       <div className='close_icon'>

                          < IoMdClose onClick={() => deleteItems(index)} />
                       </div>

                      <div className='basket_main_section_left_products_product_img'>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h3 className='basket_main_section_left_products_product_title'>{item.title}</h3>

                      <div className='basket_main_section_left_products_product_btn'>
                        <div onClick={() => incrementCount(index)} className='basket_main_section_left_products_product_btn_plus'>+</div>
                        <div className='basket_main_section_left_products_product_btn_count'>{item.count}</div>
                        <div onClick={() => decrementCount(index)} className='basket_main_section_left_products_product_btn_minus'>-</div>
                      </div>
                      <p className='basket_main_section_left_products_product_price'>{item.price * item.count}$</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Ваша корзина пуста</p>
              )}
            </div>

            <div className='basket_main_right'>
              <h2 className='basket_main_right_title'>Summary</h2>

              <div className='basket_main_right_count_inf'>
                <h3 className='basket_main_right_count_inf_tit'>Item count</h3>
                <p className='basket_main_right_count_inf_tit'>
                  {cartItems.reduce((total, item) => total + item.count, 0)}
                </p>
              </div>

              <div className='basket_main_right_count_inf'>
                <h2 className='basket_main_right_count_inf_tit'>Total price</h2>
                <p className='basket_main_right_count_inf_tit'>
                  {cartItems.reduce((total, item) => total + (item.price * item.count), 0)}$
                </p>
              </div>
              <Button
              click={NavCheckout}
                 text="CHECKOUT"
                 className="basket_btn"

              />
            </div>
          </div>

          <Link className='link_to_products' to="/Filterproducts" >BACK TO SHOPPING   </Link>
        </div>
      </div>
    </div>
  );
}

export default Basket;
