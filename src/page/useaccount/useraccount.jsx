import React, { useEffect, useState } from 'react'
import Button from '../../components/button/button'
import "./useraccount.css"
import { RxEyeClosed } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";
import { useLocation } from 'react-router';

const Useraccount = () => {

  const [eye,Seteye]= useState(false)
  const location = useLocation();
  const user = location.state || {}; // Default boş obyekt ilə yoxlanılır

  const [data,setdata]=useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3004/users");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setdata(data);
      } catch (error) {
      }
    };

    getData();
  }, []);

  // console.log(data);
  // console.log( user);

  const userInData = data.find(d => d.email === user.email && d.password === user.password);


console.log(userInData);




  const changeEye = ()=>{
    Seteye(!eye)
  }
  return (
    <div className='personal_info'>

      <form className='personal_info_form'>

        <div className='personal_info_form_items'>
          <div className='personal_info_form_items_cont' >
            <input
            className='personal_info_form_items_cont_inp'
            value={userInData ? userInData.lastname : ''}
            readOnly
             type="text" />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
            className='personal_info_form_items_cont_inp'
            value={userInData ? userInData.fullname : ''}
            readOnly
             type="text"  />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
                className='personal_info_form_items_cont_inp'
                 value={userInData ? userInData.email : ''}
                 readOnly
                  type="text" />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
             className='personal_info_form_items_cont_inp'
              value={userInData ? userInData.password : ''}
                readOnly
                type={eye ? "text" : "password"} />
              <span onClick={changeEye} className='personal_info_form_items_cont_eye'>
                {eye
                ?
                 <RxEyeOpen
                                    size="24px"
                   color='rgba(184, 146, 106, 1)'
                  />
                  :
                   <RxEyeClosed
                   size="24px"
                   color='rgba(184, 146, 106, 1)'

                   />

                }

              </span>


          </div>

        </div>

        <Button
                text="SAVE CHANGES"
                className="personal_info_form_btn"
              />
      </form>


    </div>







  )
}

export default Useraccount