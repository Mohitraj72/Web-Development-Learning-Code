import React, { useState } from "react";

function State() {
  const [banned, setBanned] = useState(false);

  return (
    <div className="p-4">
      <h1>{banned.toString()}</h1>
      <button
        onClick={() => setBanned(!banned)}
        className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full"
      > Ban Karo  </button>
    </div>
  );
}

export default State; 
