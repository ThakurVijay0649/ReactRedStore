import React from 'react'

const CommonTestimonial = (props) => {
    return (

            <div className="column">
                <i class="fa fa-quote-left"  aria-hidden="true"></i>
                <p>{props.para}</p>
                <div className="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <img src={props.img} alt="" />
                <h4 className='bold'>{props.name}</h4>
            </div>
    )
}

export default CommonTestimonial;