import React, { useState } from 'react';
import Button from '../../components/button/button';
import Inp from '../../components/inp/inp';
import { Link } from 'react-router-dom';
import "./register.css";
import Previcon from '../../components/prev_icon/prevIcon';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  // Error states
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [confirmpasserr, setConfirmpasserr] = useState("");

  const [popup, setPopup] = useState(false);

  // Validate form fields
  const validateFields = () => {
    let isValid = true;

    if (name.length < 6) {
      setNameerr("Name must be at least 6 characters long.");
      isValid = false;
    } else {
      setNameerr("");
    }

    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailerr("Invalid email. For example: homedecor@mail.ru");
      isValid = false;
    } else {
      setEmailerr("");
    }

    if (password.length < 6) {
      setPassworderr("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPassworderr("");
    }

    if (password !== confirmpass) {
      setConfirmpasserr("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmpasserr("");
    }

    return isValid;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        // Сначала проверим, существует ли уже email
        const usersResponse = await fetch("http://localhost:3004/users");

        if (!usersResponse.ok) {
          throw new Error(`HTTP error! status: ${usersResponse.status}`);
        }

        const users = await usersResponse.json();

        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
          setEmailerr('Email is already in use');
          return;
        }

        const res = await fetch("http://localhost:3004/users", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: name,
            email: email,
            password: password,
          }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();

        setPopup(true); // Показать popup или сообщение об успехе
      } catch (error) {
        console.error('Error during submission:', error);
      }
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'name':
        validateFields();
        break;
      case 'email':
        validateFields();
        break;
      case 'password':
        validateFields();
        break;
      case 'confirmpass':
        validateFields();
        break;
      default:
        break;
    }
  };

  return (
    <>
      {popup &&
        <div className='register_popup'>
          <div className='register_popup_cont'>
            <h2>Thank You</h2>
            <p>You are REGISTERED!!!!!</p>
            <Link className='register_popup_cont_gologin' to="/login">Go to login</Link>
          </div>
        </div>
      }
      <div className='register_left'>
        <Previcon link={"/"} title={"Home"} />
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
