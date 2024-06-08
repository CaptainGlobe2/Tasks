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
       <h1>Cards</h1>
       {loading && <p>Loading...</p>}
       {error && <p>Error:{error}</p>}

       <Carousel responsive={responsive} className="flex">
        {datas.map((data)=>(
            <Card data={data}></Card>
        ))}
        </Carousel>

    </>
  )
}

export default Cards