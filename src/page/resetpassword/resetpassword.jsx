import React, { useState } from 'react';
import PrevIcon from '../../components/prev_icon/prevIcon';
import "./resetpassword.css";
import Inp from '../../components/inp/inp';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Resetpassword = () => {
 let navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError("Invalid email. For example: homedecor@mail.ru");
    } else {
      setEmailError('');
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        validateEmail(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        validateEmail(email);

    if (email === "") {   // input bos oldugda navigate islemesin
      setEmailError("Email cannot be empty");
      email=""
    } else {
    }
    if(emailError!="Invalid email. For example: homedecor@mail.ru"){
             navigate("/login/resetpassword/verification");

    }

  };

  return (
    <>
      <div className='resetpass_left'>
        <PrevIcon link={"/login"} title={"Back"} />

        <div className='resetpass_left_form '>
          <h2 className='resetpass_left_form_title'>RESET PASSWORD</h2>
          <form className='resetpass_left_form_submit' onSubmit={handleSubmit}>
            <Inp
             className="resetpass_left_form_submit_inp password_comp"
              onBlur={handleBlur}
              name="email"
              placeholder="E-MAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"text"}
              error={emailError}
            />
            <Button
            text="SEND"
            className="reset_btn"
            style={{ maxWidth: "467px" }}

            />
          </form>



          <div className='resetpass_left_form_desc'>
            <p className='resetpass_left_form_desc_title'>Don’t have an account?</p>
            <Link to="/login" className='resetpass_left_form_desc_subtitle'>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
