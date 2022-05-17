import React, { useState } from 'react'
import './Account.css'
import image1 from '../images/image1.png'
import { Link } from 'react-router-dom'

const Account = () => {
  const [logStyle, setLogStyle] = useState('0%')
  const [regStyle, setRegStyle] = useState('105%')
  const [logCol, setLogCol] = useState('#ff532b');
  const [regCol, setRegCol] = useState('#fff');
  function login() {
    const logside = '0%'
    setLogStyle(logside);
    setRegStyle('105%');
    setLogCol('#ff532b')
    setRegCol('#fff')
  }
  function register() {
    const regside = '9%'
    setLogStyle('-100%');
    setRegStyle(regside);
    const bgcolor = '#ff532b'
    setRegCol(bgcolor);
    setLogCol('#fff')

  }

  return (
    <>
    <div className="account-page">
      <div className="left-side">
        <img src={image1} alt="" />
      </div>
      <div className="right-side">
        <div className="form-container">
          <div className="form-btn">
            <button className="form-button button1"  onClick={login} style={{backgroundColor: logCol}}>Log In</button>
            <button className="form-button button2"  onClick={register} style={{backgroundColor: regCol}}>Register</button>
          </div>
          <form  className="logform" style={{left: logStyle}}>
            <input type="text" placeholder='User ID' />
            <input type="password" placeholder='Password' />
            <Link to='/' className='forgot'>forgotten password?</Link>
            <Link to='/' className="submit">Log In</Link>
          </form>
          <form  className="logform regform" style={{left: regStyle}}>
            <input type="text" placeholder='User ID' />
            <input type="email" placeholder='Enter the Email' />
            <input type="password" placeholder='Enter the Password' />
            <input type="password" placeholder='Confirm Password' />
            <Link to='/' className="submit">Register</Link>
          </form>
        </div>
      </div>

    </div>
    </>
  )

}

export default Account