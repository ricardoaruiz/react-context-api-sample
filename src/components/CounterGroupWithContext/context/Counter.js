import React, { createContext, useState, useCallback, useContext } from 'react';

const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(state => state+1);
  }, []);

  const decrement = useCallback(() => {
    if (counter === 0) return;
    setCounter(counter-1);
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter can not be used whitout CounterProvider');
  }

  return context;
}