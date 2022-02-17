import React from 'react'
// import product from '../../images/product-1.jpg'


const CommonProduct = (props) => {
    return (
            <>
            <div className="col">
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <p>{props.rate}</p>
            </div>
            </>  
    )
}

export default CommonProduct