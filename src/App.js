import logo from './logo.svg';
import './App.css';
import '../src/assets/style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' });
  }
  const decrement = () => {
    dispatch({ type: 'DEC' });
  }
  const addby = () => {

    dispatch({ type: 'ADD', payload: parseInt(countVal) });
  }
  const [countVal, setCountVal] = useState(0)

  return (
    <div class='container'>
      <div class="counter">
        <h1>Counter App </h1>
        <h2>{counter}</h2>
        <div class='btn'>
          <button onClick={increment}>Increment </button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <div class="add">
          <button onClick={addby}><input type='number' placeholder='input value' onChange={(e) => setCountVal(e.target.value)} /> Add Count </button>
        </div>
      </div>
    </div>
  );
}

export default App;
