// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";


function App() {
  //const [count, setCount] = useState(0);
  let myobj ={
    username: "hitseh",
    age: 22
  }

  let newArr =[1,2,3]

  return (
    <>
      <h1 className=" font-bold bg-green-500 text-black p-5 rounded-xl ">
        Tailwind Test
      </h1>
     
      <Card username ="Mohit" btntext= "Click Me "/> 
      <Card username ="Raj" /> 
      
      
    </>
  )
}

export default App;
