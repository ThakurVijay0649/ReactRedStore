import React, {useState} from 'react'
import CommonProduct from './Home/CommonProduct'
import product1 from '../images/product-1.jpg'
import product2 from '../images/product-2.jpg'
import product3 from '../images/product-3.jpg'
import product4 from '../images/product-4.jpg'
import galary1 from '../images/gallery-1.jpg'
import galary2 from '../images/gallery-2.jpg'
import galary3 from '../images/gallery-3.jpg'
import galary4 from '../images/gallery-4.jpg'
import './Product.css'
import { Link } from 'react-router-dom'
const Details = () => {

     const [img, setImg] = useState(galary1)
    function firstimg(){
        const image1 = galary1
         setImg(image1)
    }
    function secondimg(){
        const image2 = galary2
         setImg(image2)
    }
    function thirdimg(){
        const image3 = galary3
         setImg(image3)
    }
    function fourthimg(){
        const image4 = galary4
         setImg(image4)
    }
  
  return (
    <>
     <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src={img} width="100%" alt=""/>
                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src={galary1} className="small-img"  onClick={firstimg} alt=""/>
                    </div>
                    <div className="small-img-col">
                        <img src={galary2} className="small-img"  onClick={secondimg} alt=""/>
                    </div>
                    <div className="small-img-col">
                        <img src={galary3} className="small-img" onClick={thirdimg}  alt=""/>
                    </div>
                    <div className="small-img-col">
                        <img src={galary4} className="small-img"  onClick={fourthimg}  alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <p>Home / T-Shirt</p>
                <h1>Red Printed T-Shirt by HRX</h1>
                <h4>$50.00</h4>
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
                <input type="number"/>
                <Link to="/cart" className="btn">Add to Cart</Link>
                <h3>Product Details</h3>
                <br/>
                <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys. </p>
            </div>
        </div>
    </div>
    <div className="title-select">
      <h1>Related Products</h1>
     <Link className='link' to='/product'>View More</Link>
    </div>
    <div className="common">
      <CommonProduct img={product1} name='Red Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product2} name='Black HRX Shoes' rate='$40.00' />
      <CommonProduct img={product3} name='Black Printed Lower' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product1} name='Red Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product2} name='Black HRX Shoes' rate='$40.00' />
      <CommonProduct img={product3} name='Black Printed Lower' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
      <CommonProduct img={product4} name='Blue Printed T-Shirt' rate='$40.00' />
    </div>
    </>
  )
}

export default Details