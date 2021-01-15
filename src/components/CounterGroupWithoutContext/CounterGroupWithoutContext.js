import React, { useState, useCallback } from 'react';
import Counter from './components/Counter';
import Mirror from './components/Mirror/Mirror';

const CounterGroupWithoutContext = () => {

  const [counter, setCounter] = useState(0);
  
  const increment = useCallback(() => {
    setCounter(state => state + 1);
  }, [])

  const decrement = useCallback(() => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }, [counter])

  return (
    <>
      <Counter 
        counter={counter} 
        increment={increment} 
        decrement={decrement}/>

      <br />

      <Mirror counter={counter}/>
    </>
  )
}

export default CounterGroupWithoutContext
