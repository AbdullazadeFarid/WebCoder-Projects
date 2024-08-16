
import React, { useState } from 'react';
import Inp from '../../components/inp/inp';
import Button from '../../components/button/button';
import "./newpassword.css";
import PrevIcon from '../../components/prev_icon/prevIcon';
import { useNavigate } from 'react-router';

const Newpassword = () => {
    let navigate = useNavigate()

  const [newpass, setNewpass] = useState("");
  const [newpasserr, setNewpasserr] = useState("");

  const [confirmpass, setConfirmpass] = useState("");
  const [confirmpasserr, setConfirmpasserr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newpass.length < 6) {
      setNewpasserr("Password must be at least 6 characters");
    } else if (confirmpass !== newpass) {
      setConfirmpasserr("Passwords do not match");
    } else {
      setNewpasserr("");
      setConfirmpasserr("");
      navigate("/login")

    }
  };

  const handleBlur = (e) => {
    if (e.target.name === 'newpass') {
      if (e.target.value.length < 6) {
        setNewpasserr("Password must be at least 6 characters");
      } else {
        setNewpasserr("");
      }
    }

    if (e.target.name === 'password') {
      if (e.target.value !== newpass) {
        setConfirmpasserr("Passwords do not match");
      } else {
        setConfirmpasserr("");
      }
    }
  };

  return (
    <>
      <div className='newpassword_left'>
        <PrevIcon link={"/login/resetpassword/verification"} title={"Back"} />

        <div className='newpassword_left_bottom'>
          <h3 className='newpassword_left_bottom_title'>NEW PASSWORD</h3>
          <form onSubmit={handleSubmit} className='newpassword_left_bottom_form'>
            <Inp
              className="password_comp"
              name="newpass"
              placeholder="ENTER NEW PASSWORD"
              type={"password"}
              value={newpass}
              onChange={(e) => setNewpass(e.target.value)}
              onBlur={handleBlur}
              error={newpasserr}
            />

            <div className='newpassword_left_bottom_form_pass'>
              <Inp
                className="password_comp"
                name="password"
                placeholder="CONFIRM PASSWORD"
                value={confirmpass}
                onChange={(e) => setConfirmpass(e.target.value)}
                type={"password"}
                onBlur={handleBlur}
                error={confirmpasserr}
              />
            </div>

            <Button
              text="SUBMIT"
              className="newpassword"
              style={{ maxWidth: "467px" }}

            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Newpassword;


