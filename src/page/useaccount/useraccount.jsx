


import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/button/button';
import "./useraccount.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { SearchContext } from '../../context/context';

const Useraccount = () => {
  const { userinfo, setUserinfo } = useContext(SearchContext);
  const [eye, setEye] = useState(false);
  const [formData, setFormData] = useState({
    lastname: '',
    fullname: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userinfo');
    if (storedUserInfo) {
      const userInfoFromStorage = JSON.parse(storedUserInfo);
      setUserinfo(userInfoFromStorage);
      setFormData({
        lastname: userInfoFromStorage.lastname || '',
        fullname: userInfoFromStorage.fullname || '',
        email: userInfoFromStorage.email || '',
        password: userInfoFromStorage.password || ''
      });
    }
  }, [setUserinfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault(); // Formanın avtomatik göndərilməsinin qarşısını alırıq

    const userId = userinfo?.id;
    if (!userId) return console.error("No active user");

    try {
      const res = await fetch(`http://localhost:3004/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Serverdən yenilənmiş istifadəçi məlumatlarını alırıq
      const updatedUser = await res.json();
      setUserinfo(updatedUser); // İstifadəçi məlumatlarını state-ə yazırıq
      localStorage.setItem('userinfo', JSON.stringify(updatedUser)); // LocalStorage-ə yenilənmiş məlumatı yazırıq
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const changeEye = () => {
    setEye(!eye);
  };

  return (
    <div className='personal_info'>
      <form className='personal_info_form' onSubmit={handleSaveChanges}>
        <div className='personal_info_form_items'>
          <div className='personal_info_form_items_cont'>
            <input
              className='personal_info_form_items_cont_inp'
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className='personal_info_form_items_cont'>
            <input
              className='personal_info_form_items_cont_inp'
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className='personal_info_form_items_cont'>
            <input
              className='personal_info_form_items_cont_inp'
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className='personal_info_form_items_cont'>
            <input
              className='personal_info_form_items_cont_inp'
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type={eye ? "text" : "password"}
            />
            <span onClick={changeEye} className='personal_info_form_items_cont_eye'>
              {eye ? (
                <RxEyeOpen size="24px" color='rgba(184, 146, 106, 1)' />
              ) : (
                <RxEyeClosed size="24px" color='rgba(184, 146, 106, 1)' />
              )}
            </span>
          </div>
        </div>
        <Button
          text="SAVE CHANGES"
          className="personal_info_form_btn"
          type="submit" // `submit` tipi formanın göndərilməsini təmin edir
        />
      </form>
    </div>
  );
};

export default Useraccount;
