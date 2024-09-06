import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/button'
import "./useraccount.css"
import { RxEyeClosed } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";
import { useLocation } from 'react-router';
import { SearchContext } from '../../context/context';

const Useraccount = () => {

  const { userinfo, setUserinfo,activeuser, } =useContext(SearchContext)
console.log(userinfo);



  const [eye,Seteye]= useState(false)

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userinfo');  // burda userinfo ile hal hazirda aktiv olan istifadecinin melumatlarin gotururuk
    if (storedUserInfo) {
      setUserinfo(JSON.parse(storedUserInfo));
    }
  }, []);







  const changeEye = ()=>{
    Seteye(!eye)
  }
  return (
    <div  className='personal_info'>

      <form className='personal_info_form'>

        <div className='personal_info_form_items'>
          <div className='personal_info_form_items_cont' >
            <input
            className='personal_info_form_items_cont_inp'
            value={userinfo?.lastname || ''}
            readOnly
             type="text" />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
            className='personal_info_form_items_cont_inp'
            value={userinfo?.fullname || ''}
            readOnly
             type="text"  />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
                className='personal_info_form_items_cont_inp'
                 value={userinfo?.email || ''}
                 readOnly
                  type="text" />
          </div>
          <div className='personal_info_form_items_cont' >
            <input
             className='personal_info_form_items_cont_inp'
              value={userinfo?.password || ''}
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