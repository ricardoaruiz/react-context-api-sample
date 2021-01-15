import './App.css';
import CounterGroupWithContext from './components/CounterGroupWithContext/CounterGroupWithContext';
import CounterGroupWithoutContext from './components/CounterGroupWithoutContext/CounterGroupWithoutContext';

function App() {
  return (
    <>
      <h2>Grupo de componentes que não utiliza Context-API para compartilhar estado e comportamento</h2>
      <CounterGroupWithoutContext />
      <br/><br/>
      <hr />
      <br/><br/>
      <h2>Grupo de componentes que utiliza Context-API para compartilhar estado e comportamento</h2>
      <CounterGroupWithContext />      
    </>
  );
}

export default App;
