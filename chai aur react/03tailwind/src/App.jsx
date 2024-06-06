import { useState } from "react";
import "./App.css";
import Card from "./components/card"; 

function App() {
  function buynow() {
    alert("Are you sure to buy");
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="rounded-xl"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p className="font-bold font-mono">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary bg-blue-600 rounded-xl p-3"
              onClick={buynow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Card username = "Mohit Raj"/>
      <Card username=" nikhil" />
    </>
  );
}

export default App;
