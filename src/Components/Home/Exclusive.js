import React from 'react'
import './Exclusive.css'
import excl from '../../images/exclusive.png'
import { Link } from 'react-router-dom'
const Exclusive = () => {
    return (
        <div className="section">
                <div className="left-con">
                    <img src={excl} alt="" />
                </div>
                <div className="right-con">
                    <p className='first-para'>Exclusively Available on RedStore</p>
                    <h1 className='text-big'>Smart Band 4</h1>
                    <p className='second-para'>The Mi Smart Band 4 features a 39.9% larger(than Mi Brand 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be</p>
                    <Link to='#' className='btn btn2'>Buy Now &#8594;</Link>
                </div>

        </div>
    )
}

export default Exclusive