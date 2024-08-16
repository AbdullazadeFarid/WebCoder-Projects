import React, { useState } from 'react';
import PrevIcon from '../../components/prev_icon/prevIcon';
import Button from '../../components/button/button';
import Inp from '../../components/inp/inp';
import { Link } from 'react-router-dom';
import "./register.css";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  // err
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [confirmpasserr, setConfirmpasserr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password, confirmpass);
  };

  const validateName = (name) => {
    if (name.length < 6) {
      setNameerr("Name must be at least 6 characters long.");
    } else {
      setNameerr("");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailerr("Invalid email. For example: homedecor@mail.ru");
    } else {
      setEmailerr("");
    }
  };

  const validatePassword = (password, confirmpass) => {
    if (password.length < 6) {
      setPassworderr("Password must be at least 6 characters long.");
    } else {
      setPassworderr("");
    }

    if (password !== confirmpass) {
      setConfirmpasserr("Passwords do not match.");
    } else {
      setConfirmpasserr("");
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'name':
        validateName(e.target.value);
        break;
      case 'email':
        validateEmail(e.target.value);
        break;
      case 'password':
        validatePassword(password, confirmpass);
        break;
      case 'confirmpass':
        validatePassword(password, confirmpass);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='register_left'>
        <PrevIcon link={"/"} title={"Home"} />

        <div className='register_left_bottom'>
          <h3 className='register_left_bottom_title'>REGISTER</h3>
          <form className='register_left_bottom_form' onSubmit={handleSubmit}>
            <Inp
              className="password_comp"
              name="name"
              placeholder="NAME, SURNAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type={"text"}
              onBlur={handleBlur}
              error={nameerr}
            />

            <div className='register_left_bottom_form_pass'>
              <Inp
                className="password_comp"
                name="email"
                placeholder="E-MAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
                onBlur={handleBlur}
                error={emailerr}
              />
              <Inp
                className="password_comp"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                onBlur={handleBlur}
                error={passworderr}
              />
              <Inp
                className="password_comp"
                name="confirmpass"
                placeholder="REPEAT PASSWORD"
                value={confirmpass}
                onChange={(e) => setConfirmpass(e.target.value)}
                type={"password"}
                onBlur={handleBlur}
                error={confirmpasserr}
              />
            </div>
            <Button
              text="REGISTER"
              className="registerbtn"
              style={{ maxWidth: "467px" }}

            />
          </form>

          <div className='login_left_bottom_register'>
            <p className='login_left_bottom_register_title'>Already have an account?</p>
            <Link to="/login" className='login_left_bottom_register_desc'>Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
