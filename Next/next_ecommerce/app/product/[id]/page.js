import React from 'react';
// import StarRating from '../../../components/StarRating';
// import { addToCart, increment, decrement, reset } from '../../../redux/actions/cartActions';
// import { countValue } from '../../../redux/selectors/countSelectors';
// import { useDispatch, useSelector } from 'react-redux';
import ProductDetailContent from '@/components/ProductDetailContent';

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}

const ProductDetail = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetailContent product={product} />
  );
};

export default ProductDetail;
