import React, { useState, useEffect } from 'react';

function App() {
  // const [showComponent, setShowComponent] = useState(true)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect( () =>{
    const myTimer = setInterval(()=>{
      setTimer(timer => timer + 1)
    } , 1000)
    return () => clearInterval(myTimer)
  }, [])
  useEffect(()=>{
    console.log(timer);
  })
  return (
    
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <p>Second: {timer}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me 2
      </button>
    </div>

  );
  }

export default App;
