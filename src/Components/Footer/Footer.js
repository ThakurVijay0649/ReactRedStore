import React from 'react'
import './Footer.css'
import google from '../../images/play-store.png'
import apple from '../../images/app-store.png'
import logo2 from '../../images/logo-white.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     
    <div className='footer'>
      <div className="column-4">
        <div className="col-4 first">
          <h3 className="download">Download Our App</h3>
          <p>Download App for Android and ios mobile phone.</p>
          <div className="store">
            <img src={google} alt="" />
            <img className='apple' src={apple} alt="" />
          </div>
        </div>
        <div className="col-4 center">
          <img src={logo2} alt="" />
          <p>Our purpose is to sustainably make the pleasure and benefits of Sports Accessible to the Many</p>
        </div>
        <div className="col-4">
          <h3 className='list'>Useful Links</h3>
          <ul className='list'>
            <li><Link className='decoration' to='#'>Coupons</Link></li>
            <li><Link className='decoration' to='#'>Blog Post</Link></li>
            <li><Link className='decoration' to='#'>Return Policy</Link></li>
            <li><Link className='decoration' to='#'>Join Affiliate</Link></li>
          </ul>
        </div>
        <div className="col-4">
          <h3 className='list'>Follow Us</h3>
          <ul className='list'>
            <li><Link className='decoration' to='#'>Facebook</Link></li>
            <li><Link className='decoration' to='#'>Twitter</Link></li>
            <li><Link className='decoration' to='#'>Instagram</Link></li>
            <li><Link className='decoration' to='#'>Youtube</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='text-center'>Copyright &copy; 2022 RedStore Inc. All Rights Reserved</p>
    </div>
  )
}

export default Footer