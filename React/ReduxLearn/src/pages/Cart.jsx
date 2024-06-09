import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "../redux/selectors/cartSelectors";
import deleteicon from '../assets/Frame.png'
import { decrementItemsCount, incrementItemsCount, removeFromCart } from "../redux/actions/cartActions";


const Cart = () => {
  const cartItems = useSelector(cartItem);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementItemsCount(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItemsCount(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  return (
    <>
      <p className="text-4xl font-bold">YOUR CART</p>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="flex sm:flex-col md:flex-row justify-evenly gap-4">
        <ul className="border border-gray-400 rounded-lg p-2">
          {cartItems.map((item, index) => (
            <li key={index}>
              
              <div className="flex h-[124px] gap-5 m-4  ">
                <div className="flex justify-center rounded-xl">
                  <img  src={item.image} alt={item.title} width="50" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p className="flex text-xl font-bold">{item.title}</p>
                        
                    </div>
                  <p className="text-sm font-normal">Price per item: ${item.price}</p>
                  <p className="text-sm font-normal">Count: {item.count}</p>
                  <p>Total Price: ${item.totalPrice}</p>
                  <div className="flex  justify-end p-3 ">
                  
                    
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <button onClick={()=>handleDelete(item.id)}><img src={deleteicon} alt="" /></button>
                    </div>
                <div className="flex rounded-3xl bg-[#F0F0F0] justify-between items-center">
                      <button  onClick={() => handleDecrement(item.id)} className="p-2">-</button>
                      <p className="p-2">{item.count}</p>
                      <button onClick={() => handleIncrement(item.id)} className="p-2">+</button>
                    </div>
                </div>
                
              </div>
             <hr />
             
            </li>
          ))}
          
        </ul>
        <div className="flex flex-col gap-2">
          <p className="flex text-2xl font-bold">Order Summary</p>
          <div className="flex justify-between ">
            <p className="text-xl font-normal">subtotal</p>
            <p className="text-xl font-bold">amount</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-normal">Discount</p>
            <p className="text-xl font-bold text-[#FF3333]">amount</p>
          </div>
          <div className="flex justify-between">
           <p className="text-xl font-normal"> Delivery Fee </p>
           <p className="text-xl font-bold">amount</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-xl font-normal">total</p>
            <p className="text-xl font-bold">amount</p>
          </div>
          <button className="bg-black text-white rounded-3xl p-2">Go to Checkout</button>
        </div>
        </div>
      )}
    </>
  );
};

export default Cart;
