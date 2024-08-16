
import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';
import Inp from '../../components/inp/inp';
import PrevIcon from '../../components/prev_icon/prevIcon';
import { RxEyeClosed } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
const [eye,setEye] = useState(true)

const Eye = ()=>{
  setEye(!eye)

}

let primaryeye = (

<RxEyeClosed color='rgba(184, 146, 106, 1)' size={"24"} />

)

let secondEye=(
<RxEyeOpen color='rgba(184, 146, 106, 1)' size={"24"} />


)


  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError("Invalid email. For example: homedecor@mail.ru");
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError('');
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        validateEmail(e.target.value);
        break;
      case 'password':
        validatePassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
  };

  return (
    <>
      <div className='login_left'>
        <PrevIcon link={"/"} title={"Home"} />

        <div className='login_left_bottom'>
          <h3 className='login_left_bottom_title'>LOG IN</h3>
          <form className='login_left_bottom_form' onSubmit={handleSubmit}>
            <Inp
              className="password_comp"
              name="email"
              placeholder="E-MAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"text"}
              onBlur={handleBlur}
              error={emailError}
            />

            <div className='login_left_bottom_form_pass'>


              <span>
              <Inp
                 className="password_comp"

                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={eye ? "password" : "text"}
                onBlur={handleBlur}
                error={passwordError}
               svg={eye ? primaryeye : secondEye}
               func={Eye}

              />
              </span>


              <Link to={"/login/resetpassword"} className='login_left_bottom_form_pass_forget'>Forgot password?</Link>
            </div>

            <Button
            text="LOG IN"
            style={{ maxWidth: "467px" }}

            />
          </form>



          <div className='login_left_bottom_register'>
            <p className='login_left_bottom_register_title'>Don’t have an account?</p>
            <Link to="/register" className='login_left_bottom_register_desc'>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

