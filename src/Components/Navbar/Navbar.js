import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import cart from '../../images/cart.png'
import LoadingBar from 'react-top-loading-bar'


import './Navbar.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [progress, setProgress] = useState(0)

    return (
        <>
            <LoadingBar
                height={3}
                color='red'
                progress={progress}
                waitingTime={500}
             />
            <nav className='navbar'>
                <Link to="/" className='logo' onClick={() => setProgress(progress + 100)}><img src={logo} alt="" /></Link>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <Link to='/' className='home'  onClick={() => setProgress(progress + 100)}><li>Home</li></Link>
                    <Link to='/product' className='product' onClick={() => setProgress(progress + 100)}><li>Products</li></Link>
                    <Link to='/details' className='details' onClick={() => setProgress(progress + 100)}><li>Details</li></Link>
                    <Link to='/contact' className='contact' onClick={() => setProgress(progress + 100)}><li>Contact</li></Link>
                    <Link to='/account' className='account' onClick={() => setProgress(progress + 100)}><li>Account</li></Link>
                    <Link to='/cart' className='cart-icon' onClick={() => setProgress(progress + 100)}><li><img src={cart} alt="" /></li></Link>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
                </button>
            </nav>
        </>
    )
}

export default Navbar