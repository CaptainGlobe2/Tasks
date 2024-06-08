import React from 'react'
import { useSelector } from 'react-redux'
import { cartItem } from '../redux/selectors/cartSelectors'

const Cart = () => {
    const cartItems = useSelector(cartItem);
  return (
    <>
       <p className='text-4xl font-bold'>YOUR CART</p> 
       {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <img src={item.image} alt={item.title} width="50" />
                <p>Price per item: ${item.price}</p>
                <p>Count: {item.count}</p>
                <p>Total Price: ${item.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Cart