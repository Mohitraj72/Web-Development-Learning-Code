import React from "react";

function Song() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center">
      <div className="w-90 px-3 py-2 bg-zinc-100 rounded">
        <h3 className="font-semibold text-xl">Mahiya Ve</h3>
        <p className="text-xs mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laborum
          mouptas.
        </p>
        <button className="px-2 py-1 bg-blue-400 text-xs font-semibold rounded mt-3 text-zinc-100">
          Download Nowasd
        </button>
      </div>
    </div>
  );
}

export default Song;
