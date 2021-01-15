import { useCounter } from '../../context/Counter';

const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>Contador: {counter}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
