import React from 'react'
import CommonProduct from './CommonProduct'
import product5 from '../../images/product-5.jpg'
import product6 from '../../images/product-6.jpg'
import product7 from '../../images/product-7.jpg'
import product8 from '../../images/product-8.jpg'
import product9 from '../../images/product-9.jpg'
import product10 from '../../images/product-10.jpg'
import product11 from '../../images/product-11.jpg'
import product12 from '../../images/product-12.jpg'
import './CommonProduct.css'
const LatestProducts = () => {
  return (
    <>
    <div className="title">
        <h1>Latest Products</h1>
    </div>
   <div className="common">
   <CommonProduct img={product5} name='White HRX Shoes' rate='$40.00'/>
   <CommonProduct img={product6} name='Black Printed T-Shirt' rate='$40.00'/>
   <CommonProduct img={product7} name='Black Printed Socks' rate='$40.00'/>
   <CommonProduct img={product8} name='Black Fossil Watch' rate='$40.00'/>
   <CommonProduct img={product9} name='Black Fossil Watch' rate='$40.00'/>
   <CommonProduct img={product10} name='Black Fossil Watch' rate='$40.00'/>
   <CommonProduct img={product11} name='Black Fossil Watch' rate='$40.00'/>
   <CommonProduct img={product12} name='Black Fossil Watch' rate='$40.00'/>
   </div>
   </>
  )
}

export default LatestProducts
