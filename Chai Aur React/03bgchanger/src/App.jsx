import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")} 
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={()=> setColor("Green")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button onClick={()=> setColor("Yellow")}
            className="outline-none px-4 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Pink
          </button>

          <button onClick={()=> setColor("grey")}
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "grey" }}
          >
            Pink
          </button>

          <button onClick={()=> setColor("White")}
            className="outline-none px-4 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "White" }}
          >
            Pink
          </button>


        </div>
      </div>
    </div>
  );
}

export default App;
