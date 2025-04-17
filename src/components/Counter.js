import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {

    // solving the delay with states we need to declare it asychronous way
    // just the way I have done it dowwn here => setCount((count) => count + 1)
    
    // console.log(`before setState ${count}`);

    setCount((count) => count + 1);

    // console.log(`after setState ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
