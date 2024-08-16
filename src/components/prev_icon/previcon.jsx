import React from 'react'
import { Link } from 'react-router-dom'
import "./preicon.css"

const PrevIcon = (props) => {
  return (

    <>
              <div className='prev_icon'>
                <Link to={props.link} className='prev_icon_ic'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84082 0L0.84082 8L8.84082 16L10.2658 14.6L4.66582 9H16.8408V7H4.66582L10.2658 1.4L8.84082 0Z" fill="#EEF0F2"/>
                  </svg>
                </Link>
                <Link className='prev_icon_home' to="/" >{props.title}</Link>
              </div>
    </>
  )
}

export default PrevIcon