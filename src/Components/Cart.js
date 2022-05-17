import React from 'react'
import './Cart.css'
import buy1 from '../images/buy-1.jpg'
import buy2 from '../images/buy-2.jpg'
import buy3 from '../images/buy-3.jpg'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <div className='cart-container'>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quality</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price:$50.00</small>
                  <br />
                  <Link to='/' className='remove'>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={buy2} alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price:$50.00</small>
                  <br />
                  <Link to='/' className='remove'>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number"  />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={buy3} alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price:$50.00</small>
                  <br />
                  <Link to='/' className='remove'>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number"  />
            </td>
            <td>$50.00</td>
          </tr>
        </tbody>
      </table>
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total	</td>
              <td>$235.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart