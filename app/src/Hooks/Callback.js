import React from 'react'
import { useState,useCallback } from 'react';
export default function Callback() {
    const [count,setCount]=useState(0);
    const handleClick = useCallback (() => {
        console.log(`Button clicked.Count:${count}`);
    },[count]);
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}
