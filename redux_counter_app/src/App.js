import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './actions' //no need to add index as webpack take care of it.

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(increment(5))}>+</button>
    <button onClick = {() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
