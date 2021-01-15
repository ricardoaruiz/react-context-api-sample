import PropTypes from 'prop-types';

const Counter = ({counter, increment, decrement}) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>Contador: {counter}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
}

export default Counter
