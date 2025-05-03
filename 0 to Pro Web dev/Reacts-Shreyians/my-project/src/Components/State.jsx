import React, { useState } from "react";

function State() {
  const [score, setScore] = useState(100);

  return (
    <div className="p-4">
      <h1>{score}</h1>
      <button
        onClick={() => setScore(2232)}
        className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full"
      > Change </button>
    </div>
  );
}

export default State; nn
