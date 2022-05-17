import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import image1 from '../../images/image1.png'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import Exclusive from './Exclusive'
import Testimonial from './Testimonial'
import Brand from './Brand'


const Home = () => {
  return (
  <>
    <div className='container'>
      <div className="left">
        <h1>Best Platform for <br />
          Shopping is Here!</h1>
          <p>Success isn't always about greatness. It's about consistency. Consistent <br />
           hard work gains success. Greatness will come</p>
          <Link to='/product' className='btn'>Explore Now &#8594;</Link>
      </div>
      <div className="right">
        <img src={image1} alt="" />
      </div>
    </div>
      <Featured/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Exclusive/>
      <Testimonial/>
      <Brand/>
  </>
  )
}

export default Home