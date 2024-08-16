import "./verification.css"

import React, { useState } from 'react';
import PrevIcon from '../../components/prev_icon/prevIcon';
import Inp from '../../components/inp/inp';
import Button from '../../components/button/button';
import { useNavigate } from "react-router";

const Verification = () => {
  const navigate = useNavigate()
  const nav = () =>{
      navigate('/login/resetpassword/verification/newpassword')
  }

  return (
    <>
      <div className='verification_left'>
        <PrevIcon link={"/login/resetpassword"} title={"Back"} />

        <div className='verification_left_form '>
          <h2 className='verification_left_form_title'>VERIFICATION</h2>
          <form onSubmit={nav} className='verification_left_form_submit'>
            <Inp
             className="verification_left_form_submit_inp password_comp"
              name="number"
              placeholder="ENTER VERIFICATION NUMBER"
              type={"number"}
            />
            <Button
            text="RESET PASSWORD"
            className="reset_btn"
            style={{ maxWidth: "467px" }}

            />
          </form>



          <div className='verification_left_form_desc'>
            <p className='verification_left_form_desc_title'>Didn’t receive a code?</p>
            <p className='verification_left_form_desc_subtitle'>Resend</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
