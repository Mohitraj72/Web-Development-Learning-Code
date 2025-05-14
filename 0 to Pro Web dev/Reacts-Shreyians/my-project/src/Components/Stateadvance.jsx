import React, { useState } from "react";

function Stateadvance() {
  const [val, setVal] = useState({ name: "Raj", isBanned: false });

  return (
    <div className="py-4">
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          !val.isBanned ? "bg-blue-500" : "bg-red-500"
        } rounded-full text-white `}
        >
        Change 7899
      </button>
    </div>
  );
}

export default Stateadvance;
