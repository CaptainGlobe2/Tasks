"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from './StarRating';
import { addToCart, increment, decrement} from '../redux/actions/cartActions';
import { countValue } from '../redux/selectors/countSelectors';
import { useRouter } from 'next/navigation';

const ProductDetailContent = ({ product }) => {
  const dispatch = useDispatch();
  const count = useSelector(countValue);
  const [price, setPrice] = useState(product.price);
  const router = useRouter();

  useEffect(() => {
    setPrice(product.price * count);
  }, [product.price, count]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      count,
      totalPrice: price,
    };
    dispatch(addToCart(productToAdd));
    setTimeout(() => {
        router.push('/cart');
      }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 m-5">
      <div className="flex justify-center items-center bg-[#F0EEED] w-full md:w-1/2 h-[450px] md:h-[530px]">
        <img className="max-w-full max-h-full object-contain" src={product.image} alt={product.title} />
      </div>
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <p className="text-[30px] md:text-[40px] font-bold leading-10">{product.title}</p>
          {product.rating && (
            <div className="flex text-center items-center gap-3 mt-2">
              <StarRating rating={product.rating.rate} />
              <p className="text-sm font-normal">{product.rating.rate}/5</p>
            </div>
          )}
          <p className="text-2xl md:text-3xl font-bold mt-3">${price}</p>
          <p className="text-base font-normal mt-3 mb-2">{product.description}</p>
          <hr />
        </div>
        <div className="flex justify-between mt-3 items-center">
          <div className="flex p-2 rounded-3xl bg-[#F0F0F0]">
            <button onClick={handleDecrement} disabled={count <= 1} className="p-3">
              -
            </button>
            <p className="p-3">{count}</p>
            <button onClick={handleIncrement} className="p-3">
              +
            </button>
          </div>
          <button className="bg-[#000000] text-white p-4 rounded-full" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
