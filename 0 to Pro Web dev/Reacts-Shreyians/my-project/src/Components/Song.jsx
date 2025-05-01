import React from "react";

function Song() {
  const data = [
    {
      name: "Mahiya ve",
      description: "Mahiya ve here is the best song for you",
    },
    {
      name: "saname re ve",
      description: "sanam is here is the best song for you",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center">
      {data.map((item, index) => (
        <div className="w-90 px-3 py-2 bg-zinc-100 rounded">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-xs mt-2">
            {item.description}
          </p>
          <button className="px-2 py-1 bg-blue-400 text-xs font-semibold rounded mt-3 text-zinc-100">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;
