import React from 'react'
import CommonProduct from './CommonProduct'
import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'
import product4 from '../../images/product-4.jpg'

import './CommonProduct.css'

const FeaturedProducts = () => {
    return (
        <>
         <div className="title">
             <h1>Featured Products</h1>
         </div>
        <div className="common">
        <CommonProduct img={product1} name='Red Printed T-Shirt' rate='$40.00'/>
        <CommonProduct img={product2} name='Black HRX Shoes' rate='$40.00'/>
        <CommonProduct img={product3} name='Black Printed Lower' rate='$40.00'/>
        <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00'/>
       
        </div>
       
        </>
    )
}

export default FeaturedProducts