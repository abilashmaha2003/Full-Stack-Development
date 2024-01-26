import React from 'react'
import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count,setCount] = useState(0);
    const incrementCount=()=>{
      setCount(count+1);
    };
    const decrementCount=()=>{
      setCount(count-1);
    };
    const multiplycount=()=>{
      setCount(count*2);
    };
    const resetCount=()=>{
      setCount(0);
    }

  return (
    <div>
      <div className='counter-box'>
        <h1>Counter: {count}</h1>
        <div className='button-container'>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <button onClick={multiplycount}>Multiply by 2</button>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    </div>
  )
}

