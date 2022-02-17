import React from 'react'
import "./Contact.css"
import image1 from '../images/image1.png'

const Contact = () => {
  return (
    <div className='contact-form'>
      <div className="left-form">
        <img src={image1} alt="" />
      </div>
      <div className="right-form">
        <h1>Contact Us </h1>
         <p>Feel free to contact us and send your suggestions and problems.</p>
         <div className="inptext">
         <input type="text" placeholder='Enter Your Name'/>
           <input type="email" placeholder='Enter Your Email'/>
           <input type="number" placeholder='Enter Your Phone'/>
           <textarea name="" id="" cols="30" rows="10" placeholder='Write Something Here'></textarea>
           <button className="sub-btn">Submit</button>
         </div>
          
      </div>
    </div>
  )
}

export default Contact