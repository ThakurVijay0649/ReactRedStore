import React from 'react'
import './Featured.css'
import cat1 from '../../images/category-1.jpg'
import cat2 from '../../images/category-2.jpg'
import cat3 from '../../images/category-3.jpg'

const Featured = () => {
  return (
    <div className='featured'>
      <img src={cat1} alt="" />
      <img src={cat2} alt="" />
      <img src={cat3} alt="" />
    </div>
  )
}

export default Featured
