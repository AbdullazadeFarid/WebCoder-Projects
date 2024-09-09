import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import "./uselayout.css"
import { FaUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/context';




const Userlayout = () => {

    const { setActiveuser,activeuser, } =useContext(SearchContext)

    const clearLocal = () => {
        localStorage.removeItem('userinfo');
      };


  return (
      <>

      <div className='cont'>


              <div className='myacc'>
                <div className='myacc_tit'>
                    <h2 className='myacc_tit_title' >Home</h2>
                    <div className='myacc_tit_line'></div>
                    <h2 className='myacc_tit_next'>My account</h2>

                </div>

                <div className='userlayout'>


                <div className='myacc_cont'>

                    <h2>MY ACCOUNT</h2>

                    <div className='myacc_cont_info tit'>
                    <FaUser />

                       <Link className='myacc_cont_info_inf' to="useraccount">PERSONAL INFORMATION</Link>
                    </div>

                    <div className='myacc_cont_info wish'>
                    <MdOutlineFavoriteBorder />

                        <Link className='myacc_cont_info_link'  to="wishlist">WISHLIST</Link>
                    </div>

                    <div className='myacc_cont_info logout'>
                    <TbLogout2 />

                        <Link to="login"
                        className='myacc_cont_info_close'
                        onClick={(()=>{
                            setActiveuser(!activeuser);
                            clearLocal();


                        })}>LOG OUT</Link>
                    </div>

                </div>

          <Outlet/>
              </div>


      </div>
</div>

      </>

  )
}

export default Userlayout