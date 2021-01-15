import Counter from './components/Counter';
import Mirror from './components/Mirror/Mirror';
import { CounterContextProvider } from './context/Counter';

const GroupComponents = props => {
  return (
    <CounterContextProvider>
      <Counter />

      <br />
      
      <Mirror />
    </CounterContextProvider>
  )
}

export default GroupComponents
