import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#4CE0B3");

  return (
    <div
      className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=> setcolor("green")}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={()=> setcolor("red")}>Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=> setcolor("blue")}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}} onClick={()=> setcolor("grey")}>Grey</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=> setcolor("yellow")}>yellow</button>
          
        </div> </div>
    </div>
  );
}

export default App;
