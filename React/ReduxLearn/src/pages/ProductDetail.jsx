import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData } from '../redux/actions/fetchDataAction';
import { selectFetchDatas } from '../redux/selectors/fetchSelectors';
import StarRating from '../components/StarRating';
import { countValue } from '../redux/selectors/countSelectors';
import { decrement, increment, reset } from '../redux/actions/countActions';
import { addToCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { datas } = useSelector(selectFetchDatas);
  const count = useSelector(countValue);
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    const foundProduct = datas.find((data) => data.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setPrice(foundProduct.price);
      dispatch(reset()); // Reset count when navigating to product detail page
    }
  }, [datas, id]);

  useEffect(() => {
    if (product) {
      setPrice(product.price * count);
    }
  }, [product, count]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      count,
      totalPrice: price,
    };
    dispatch(addToCart(productToAdd));
    navigate('/cart');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="flex flex-col md:flex-row gap-5 m-5">
    //   <div className="image md:w-[500px]  h-[530px] flex justify-center items-center bg-[#F0EEED]">
    //     <img className="w-[300px] h-[450px]" src={product.image} alt={product.title} />
    //   </div>
    //   <div className="text-group">
    //     <p className="text-[40px] font-bold leading-10">{product.title}</p>
    //     {product.rating && (
    //       <div className="flex text-center items-center gap-3 mt-2">
    //         <StarRating rating={product.rating.rate} />
    //         <p className="text-sm font-normal">{product.rating.rate}/5</p>
    //       </div>
    //     )}
    //     <p className="text-3xl font-bold mt-3">${price}</p>
    //     <p className="text-base font-normal mt-3 mb-2">{product.description}</p>
    //     <hr />

    //     <div className="flex justify-between mt-3 items-center content-end">
    //       <div className="flex p-2 rounded-3xl bg-[#F0F0F0] justify-between">
    //         <button onClick={handleDecrement} disabled={count <= 1} className="p-3">
    //           -
    //         </button>
    //         <p className="p-3">{count}</p>
    //         <button onClick={handleIncrement} className="p-3">
    //           +
    //         </button>
    //       </div>
    //       <div>
    //         <button className="bg-[#000000] text-white p-4 rounded-full" onClick={handleAddToCart}>
    //           Add to Cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

export default ProductDetail;
