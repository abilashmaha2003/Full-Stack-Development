import React from 'react'
import { useState,useEffect } from 'react'

export default function Effect() {
    const [data,setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(result => setData(result));

        return () => {


        };


    }, []); // the empty depedency array means this effect will only run once.
  return (
    <div>
        {data ? (
            <p>Data: {JSON.stringify(data)} </p>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  )
}
