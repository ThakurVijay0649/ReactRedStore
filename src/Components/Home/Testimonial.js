import React from 'react'
import './CommonTestimonial.css'
import CommonTestimonial from './CommonTestimonial'
import user from '../../images/user-1.png'
import user2 from '../../images/user-2.png'
import user3 from '../../images/user-3.png'


const Testimonial = () => {
    return (
        <>

            <div className="testimonial">
                <CommonTestimonial para='lorem Ispum is simply dummy text of the printing and typesetting industry.lorem Ispum has been the industrys standard dummy text ever' img={user} name='Vijay Thakur' />
                <CommonTestimonial para='lorem Ispum is simply dummy text of the printing and typesetting industry.lorem Ispum has been the industrys standard dummy text ever' img={user2} name='Dinesh Thakur' />
                <CommonTestimonial para='lorem Ispum is simply dummy text of the printing and typesetting industry.lorem Ispum has been the industrys standard dummy text ever' img={user3} name='Satyam Kumar' />
               
            </div>

        </>
    )
}

export default Testimonial