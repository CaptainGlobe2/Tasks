import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countValue } from '../redux/selectors/countSelectors';
import { decrement, increment } from '../redux/actions/countActions';

const Home = () => {

  const dispatch = useDispatch();
  const count = useSelector(countValue);

  return (
    <div>Home
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(increment())}>Count +</button> " " 
      <button onClick={()=>dispatch(decrement())}>Count -</button>
    </div>
  )
}

export default Home