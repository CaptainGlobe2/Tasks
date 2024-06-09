import React, { useEffect, useState } from 'react'
import './card.scss'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux'
import { selectFetchDatas } from '../../redux/selectors/fetchSelectors';
import { fetchData } from '../../redux/actions/fetchDataAction';
import StarRating from '../StarRating';
import { countValue } from '../../redux/selectors/countSelectors';
import { decrement, increment, reset } from '../../redux/actions/countActions';
import { addToCart } from '../../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
const Card = ({data}) => {
    // const dispatch = useDispatch();
    // const {loading,datas,error} = useSelector(selectFetchDatas);


    // useEffect(()=>{
    //     dispatch(fetchData());
    // },[dispatch]);

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [price, setPrice] = useState(data.price);

  const dispatch = useDispatch();
  const count = useSelector(countValue);

  useEffect(() => {
    setPrice(data.price * count);
}, [data.price, count]);

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    if(count>0){
      dispatch(decrement());
    }
  }

  const navigate = useNavigate();

  const handleAddToCart=()=>{
    const product = {
      ...data,
      count,
      totalPrice:price,
    };
    dispatch(addToCart(product));
    navigate('/cart');
  }

  const resetCountAndPrice = () => {
    setPrice(data.price);
    dispatch(reset());
  };

  useEffect(() => {
    if (!open) {
      resetCountAndPrice();
    }
  }, [open]);

  return (
    <>
       <div className="card m-5" onClick={handleOpen}>
        <div className="image flex justify-center bg-[#F0EEED] rounded-xl mb-3">
            <img src={data.image} alt="" />
        </div>
        <div className="text-group flex-wrap">
            <p className='flex font-bold text-xl leading-7'>{data.title}</p>
            {/* <p>{datas.rating.rate}</p> */}
            {data && data.rating && <div className='flex text-center items-center gap-3'> <StarRating rating={data.rating.rate} /> <p className='text-sm font-normal'>{data.rating.rate}/5</p> </div>}
            <p className='flex text-2xl font-bold'>${price}</p>
        </div> 
        </div> 


        {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={handleOpen} className='bg-white'>
        {/* <DialogHeader>heading</DialogHeader> */}
        <DialogBody>
        <div className=" flex gap-3">
        <div className="image w-[444px] h-[530px] flex justify-center items-center bg-[#F0EEED]">
            <img className='w-[300px] h-[450px]' src={data.image} alt="" />
        </div>
        <div className="text-group">
            <p className='flex text-[40px] font-bold leading-10'>{data.title}</p>
            {/* <p>{datas.rating.rate}</p> */}
            {data && data.rating && <div className='flex text-center items-center gap-3 mt-2'> <StarRating rating={data.rating.rate} /> <p className='text-sm font-normal'>{data.rating.rate}/5</p> </div>}
            <p className='text-3xl font-bold mt-3'>${price}</p>
            <p className='flex flex-wrap text-base font-normal mt-3 mb-2'>{data.description}</p>
            <hr />

            <div className='flex justify-between mt-3 items-center content-end'>
            <div className='flex p-2 rounded-3xl bg-[#F0F0F0] justify-between'>
                <button onClick={handleDecrement} disabled={count <= 1} className='p-3'>-</button>
                <p className='p-3'>{count}</p>
                <button onClick={handleIncrement} className='p-3'>+</button>
            </div>
            <div>
                <button className='bg-[#000000] text-white p-4 rounded-full' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        </div> 
        
        </div> 
        
        </DialogBody>
        <DialogFooter className='flex justify-end'>
          <Button
            
            onClick={handleOpen}
            className="mr-2 text-red-400  p-2"
          >
            <span>Cancel</span>
          </Button>
          <Button className=' text-black p-2' onClick={handleOpen}>
            <span>Buy Now</span>
          </Button>
        </DialogFooter>
      </Dialog>

        
    </>
  )
}

export default Card