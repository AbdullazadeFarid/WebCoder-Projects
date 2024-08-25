import React, { useState } from 'react'
import Inp from '../inp/inp'
import Button from '../button/button';
import contactimg from '../../assets/sliderimg/contact.png'

import './contact.css'

const Contact = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(email);
        validateName(name);
      };


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [nameerr,setNameerr] = useState("")
  const [emailerr,setEmailerr] = useState("")




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

<div className='about_contact_bottom cont'>

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

    </>
  )
}

export default Contact