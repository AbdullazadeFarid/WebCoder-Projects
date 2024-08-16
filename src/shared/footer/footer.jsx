import React from 'react'
import "./footer.css";


const Footer = () => {
  return (


    <div className='cont'>
      <footer className='footer'>

      <div className="footer_left">

        <h3 className='footer_left_title'>HomeDecor</h3>

      </div>

      <div className="footer_right">
        <div className='footer_right_desc'>
          <p className='footer_right_desc_item'>At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
        </div>

        <div className='footer_right_number'>
          <p className='footer_right_number_item'> +994 50 555 55 55
          </p>
        </div>

        <div className='footer_right_email'>
          <p className='footer_right_email_item'>youremailhere@gmail.com </p>
        </div>


      </div>

    </footer>

    <div className='footer_foot'>
      <p>©2022 All Right Reserved. Developed by Webcoder Agency</p>

    </div>
      </div>


  )
}

export default Footer