import React from 'react'

const OrderSummary = ({subtotal,discount,deliveryfee,total}) => {
  return (
    <>
        <div className="flex flex-col gap-6 md:w-[505px] md:h-[458px]">
          <p className="flex text-2xl font-bold">Order Summary</p>
          <div className="flex justify-between ">
            <p className="text-xl font-normal text-[#00000099]">Subtotal</p>
            <p className="text-xl font-bold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-normal text-[#00000099]">Discount</p>
            <p className="text-xl font-bold text-[#FF3333]">${discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
           <p className="text-xl font-normal text-[#00000099]"> Delivery Fee </p>
           <p className="text-xl font-bold">${deliveryfee.toFixed(2)}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-xl font-normal">Total</p>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>
          <button className="bg-black text-white rounded-3xl p-2">Go to Checkout</button>
        </div>   
    </>
  ) 
}

export default OrderSummary