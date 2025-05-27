import { useState } from "react";

function init() {
  console.log("init was called ");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init); //initalization

  let incount = () => {
    // setCount(count + 1);
    setCount((currCount) => {
      return currCount + 1;
    });

    console.log(count + 1); // make it later +1 wala
  };

  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={incount}>Increase Count </button>
    </div>
  );
}
