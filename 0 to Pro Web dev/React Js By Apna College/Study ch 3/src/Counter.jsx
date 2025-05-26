import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incount = () => {
    setCount(count+1)
    console.log(count+1);   // make it later +1 wala 
  };

  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={incount}>Increase Count </button>
    </div>
  );
}
