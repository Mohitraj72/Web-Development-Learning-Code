import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15

  const addvalue = () => {
    // console.log("click", counter);
    // counter = counter + 1;
    
    setCounter(counter + 1);
  };

  const removevalue = () => {
    // console.log("click", counter);
    // counter = counter + 1;

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Mohit Raj Here </h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addvalue}> Add Value {counter}</button>

      <button onClick={removevalue}> Remove Value {counter} </button>
    </>
  );
}

export default App;
