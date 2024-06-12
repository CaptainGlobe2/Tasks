import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFetchDatas } from '../../redux/selectors/fetchSelectors';
import { fetchData } from '../../redux/actions/fetchDataAction';
import Card from '../card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cards = () => {
    const dispatch = useDispatch();
    const {loading,datas,error} = useSelector(selectFetchDatas);

    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])


    const responsive = {
      superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
      },
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
      },
      mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
      }
  };





  return (
    <>
       <h1 className="text-2xl font-bold mt-6 mb-4 flex justify-center p-4">New Arraival</h1>
       {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          
        </div>
      )}
       {error && <p>Error:{error}</p>}

       <Carousel responsive={responsive} className="flex">
        {datas.map((data)=>(
            <Card className='shadow-md p-2' data={data}></Card>
        ))}
        </Carousel>

    </>
  )
}

export default Cards