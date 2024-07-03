"use client"
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItem,  deliverFees,  discounts, subTotal } from "../../redux/selectors/cartSelectors";
import deleteicon from '../../public/Frame.png'
import { decrementItemsCount, incrementItemsCount, removeFromCart } from "../../redux/actions/cartActions";
import NavBar from '../../components/navbar/Navbar'
// import { DarkModeContext } from "../context/DarkModeContext";
import OrderSummary from "../../components/OrderSummary";


const Cart = () => {
  const cartItems = useSelector(cartItem);
  const dispatch = useDispatch();
  const subtotal = useSelector(subTotal);
  const discount = useSelector(discounts);
  const deliveryfee = useSelector(deliverFees);
  const total = subtotal - discount + deliveryfee;

  const handleIncrement = (itemId) => {
    dispatch(incrementItemsCount(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItemsCount(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

//   const {darkMode} = useContext(DarkModeContext);

  return (
    <>
    <div >
    <NavBar/>
    
      <p className="text-4xl font-bold mb-7 mt-2">YOUR CART</p>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="flex flex-col  md:flex-row justify-evenly gap-4">
        <ul className="border border-gray-400 rounded-lg p-2 ">
          {cartItems.map((item, index) => (
            <li key={index} className="grid grid-cols-4 gap-5 p-4  border-b border-gray-300">
                <div className="flex justify-center col-span-1">
                  <img src={item.image} alt={item.title} width="50" />
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="text-sm font-normal">Price per item: ${item.price}</p>
                  <p className="text-sm font-normal">Count: {item.count}</p>
                  <p>Total Price: ${item.totalPrice}</p>
                </div>
                <div className="flex flex-col justify-between items-end col-span-1">
                  <button onClick={() => handleDelete(item.id)} className="mb-2">
                    <img src="/Frame.png"alt="Delete" />
                  </button>
                  <div className="flex items-center bg-[#F0F0F0] rounded-3xl">
                    <button onClick={() => handleDecrement(item.id)} className="p-2">-</button>
                    <p className="p-2">{item.count}</p>
                    <button onClick={() => handleIncrement(item.id)} className="p-2">+</button>
                  </div>
                </div>
              </li>
          ))}
          
        </ul>
          <OrderSummary subtotal={subtotal} discount={discount} deliveryfee={deliveryfee} total={total} />
        </div>
      )}
      </div>
    </>
  );
};

export default Cart;
