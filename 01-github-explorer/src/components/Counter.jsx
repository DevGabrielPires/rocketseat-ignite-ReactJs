import { useState } from "react";



export function Counter() {

  const [ counter, setCounter ] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }


  return(
    <>
      <h2>{counter}</h2>
      <button onClick={increment} type="button"
      >
        Increment
      </button>
    </>
  );
}