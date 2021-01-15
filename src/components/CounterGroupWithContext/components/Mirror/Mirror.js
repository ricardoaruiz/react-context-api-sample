import { useCounter } from '../../context/Counter';

const Mirror = () => {
  const { counter } = useCounter();

  return (
    <div>
      Contador espelho: {counter}
    </div>
  )
}

export default Mirror;