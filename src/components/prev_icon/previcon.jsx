import React from 'react'
import { Link } from 'react-router-dom'
import "./preicon.css"
import { GrLinkPrevious } from "react-icons/gr";


const PrevIcon = (props) => {
  return (

    <>
              <div className='prev_icon'>
                <Link to={props.link} className='prev_icon_ic'>

                  <GrLinkPrevious
                  size="24px"
                  color='white'
                  />
                </Link>
                <Link className='prev_icon_home' to="/" >{props.title}</Link>
              </div>
    </>
  )
}

export default PrevIcon