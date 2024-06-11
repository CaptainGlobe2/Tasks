import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar';
import { selectFetchDatas } from '../redux/selectors/fetchSelectors';
import { fetchData } from '../redux/actions/fetchDataAction';
import Cards from '../components/cards/Cards';

import "react-multi-carousel/lib/styles.css";
import CardCat from '../components/cardCat/CardCat';
import { DarkModeContext } from '../context/DarkModeContext';



const Home = () => {


 const {darkMode} = useContext(DarkModeContext)

  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  // const count = useSelector(countValue);

  const { loading,datas,error} = useSelector(selectFetchDatas);

  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch]);
  console.log(datas)

  return (
    <div className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* <p>Count:{count}</p>
      <button onClick={()=>dispatch(increment())}>Count +</button> " " 
      <button onClick={()=>dispatch(decrement())}>Count -</button> */}
      <Navbar/>
      {/* <div>
        <h1>datas</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error:{error}</p>}

        <ul>
          {datas.map((user)=>(
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div> */}
      {/* <Card/> */}


      
<Cards/>
<CardCat/>

      
    </div>
  )
}

export default Home