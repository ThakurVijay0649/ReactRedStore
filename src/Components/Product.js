import React from 'react'
import CommonProduct from './Home/CommonProduct'
import product1 from '../images/product-1.jpg'
import product2 from '../images/product-2.jpg'
import product3 from '../images/product-3.jpg'
import product4 from '../images/product-4.jpg'
import product5 from '../images/product-5.jpg'
import product6 from '../images/product-6.jpg'
import product7 from '../images/product-7.jpg'
import product8 from '../images/product-8.jpg'
import product9 from '../images/product-9.jpg'
import product10 from '../images/product-10.jpg'
import product11 from '../images/product-11.jpg'
import product12 from '../images/product-12.jpg'
import './Product.css'
const Product = () => {
  return (
    <>

    <div className="title-select">
      <h1>All Products</h1>
      <select name="size" id="size">
        <option value="size">Default Sorting</option>
        <option value="size">Sort By Price</option>
        <option value="size">Sort By Popoularity</option>
        <option value="size">Sort By Rating</option>
        <option value="size">Sort By Sale</option>
      </select>
    </div>
    <div className="common">
      <CommonProduct img={product1} name='Red Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product2} name='Black HRX Shoes' rate='$40.00' />
      <CommonProduct img={product3} name='Black Printed Lower' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product5} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product6} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product7} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product8} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product9} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product10} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product11} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product12} name='Blue Printed T-Shirt' rate='$40.00' />
    </div>
    <div className="page-btn">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>&#8594;</span>
    </div>
    </>
  )
}

export default Product