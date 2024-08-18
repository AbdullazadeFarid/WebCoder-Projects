import React from 'react'
import "./category.css"
import { IoIosCheckmark } from "react-icons/io";

const Category = ({ items, isActive }) => {
  return (
    <div className='category'>
      <div className='category_chekbox'>
        {isActive && <IoIosCheckmark fontSize="24px" color='rgba(184, 146, 106, 1)' />}
      </div>
      <h5>{items}</h5>
    </div>
  )
}

export default Category
