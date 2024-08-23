


import React, { useState } from 'react';
import "./checkout.css";
import Button from '../../components/button/button';
import { useNavigate } from 'react-router';

const Checkout = () => {
const nav = useNavigate()

const popupGohome=()=>{
  nav('/')
}


  const [checkactive, setCheckactive] = useState("");



  const click = (method) => {
    setCheckactive(method);

  };


  const[popup,setPopup]=useState(false)
  const activePopup=(e)=>{
    e.preventDefault()
    setPopup(!popup)

  }

  const [delivery, setDelivery] = useState("");

  const clickDelivery = (method) => {
    setDelivery(method);

  };

  return (
    <>
    <div className='cont'>
      <div className='checkout'>
        <div className='checkout_title'>
          <h2 className='checkout_title_tit'>Home</h2>
          <div className='checkout_title_line'></div>
          <h2 className='checkout_title_tit'>Shopping cart</h2>
          <div className='checkout_title_line'></div>
          <h2 className='checkout_title_next'>Checkout</h2>
        </div>

        <div className='checkout_main'>
          <h2 className='checkout_main_title'>CHECKOUT</h2>
          <form className='checkout_main_form'>
            <div className='checkout_main_form_personalize'>
              <h2 className='checkout_main_form_personalize_title'>PERSONAL INFORMATION</h2>
              <div className='checkout_main_form_personalize_inp'>
                <input className='checkout_main_form_personalize_inp_input' placeholder='Jane' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='youremailhere@gmail.com' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='CITY, STREET' type="text" />
              </div>

              <div className='checkout_main_form_personalize_choose'>
                <h2>PAYMENT METHOD</h2>

                <div
                  className='checkout_main_form_personalize_choose_inp'
                  onClick={() => click("Card")}
                >
                  <div className='checkout_main_form_personalize_choose_inp_input'>
                    {checkactive === "Card" && (
                      <div className='checkout_main_form_personalize_choose_inp_input_point'></div>
                    )}
                  </div>
                  <label className='checkout_main_form_personalize_choose_inp_label'>Card</label>
                </div>

                <div
                  className='checkout_main_form_personalize_choose_inp'
                  onClick={() => click("CASH")}
                >
                  <div className='checkout_main_form_personalize_choose_inp_input'>
                    {checkactive === "CASH" && (
                      <div className='checkout_main_form_personalize_choose_inp_input_point'></div>
                    )}
                  </div>
                  <label className='checkout_main_form_personalize_choose_inp_label'>Visa</label>
                </div>
              </div>
            </div>

            <div className='checkout_main_form_personalize '>
              <div className='checkout_main_form_personalize_inp'>
                <input className='checkout_main_form_personalize_inp_input' placeholder='CURTIS' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='+ 994 (__) ___ __ __' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='POSTAL CODE' type="text" />
              </div>

              <div className='checkout_main_form_personalize_choose'>
                <h2>PDELIVERY METHOD</h2>

                <div
                  className='checkout_main_form_personalize_choose_inp'
                  onClick={() => clickDelivery("COURIER")}
                >
                  <div className='checkout_main_form_personalize_choose_inp_input'>
                    {delivery === "COURIER" && (
                      <div className='checkout_main_form_personalize_choose_inp_input_point'></div>
                    )}
                  </div>
                  <label className='checkout_main_form_personalize_choose_inp_label'>COURIER</label>
                </div>

                <div
                  className='checkout_main_form_personalize_choose_inp'
                  onClick={() => clickDelivery("CASPICKUPH")}
                >
                  <div className='checkout_main_form_personalize_choose_inp_input'>
                    {delivery === "PICKUP" && (
                      <div className='checkout_main_form_personalize_choose_inp_input_point'></div>
                    )}
                  </div>
                  <label className='checkout_main_form_personalize_choose_inp_label'>PICKUP</label>
                </div>
              </div>
            </div>




            <div className='checkout_main_form_personalize'>
              <h2 className='checkout_main_form_personalize_title'>CARD INFORMATION</h2>
              <div className='checkout_main_form_personalize_inp'>
                <input className='checkout_main_form_personalize_inp_input' placeholder='CARD NUMBER' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='EXPIRY DATE                                 __ / __ / __' type="text" />
                <input className='checkout_main_form_personalize_inp_input' placeholder='CW' type="text" />
              </div>

              <Button
              click={activePopup}
              text="FINISH ORDER"
              className="checkout_btn"

              />


            </div>


          </form>
        </div>

      </div>
    </div>
      {
      popup
      ?
      <div className='popup'>
        <div className='popup_cont'>

        <h2>YOUR ORDER IS  COMPLETE!</h2>
        <p>You will be receiving a confirmation email with order details.</p>
        <Button
        text="HOME PAGE"
        className="popup_btn"
        click={popupGohome}


        />
      </div>

      </div>
      :
      ""

      }
          </>

  );
}

export default Checkout;
