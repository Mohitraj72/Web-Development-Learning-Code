import React, { useState } from 'react'

function Statea() {

    const [val,setVal] = useState(1);

  return (
    <div className='p-4 '>
        <h1>{val}</h1>
        <button onClick={() => setVal((prev)=> prev + 1)} className='px-3 py-1 bg-blue-400 rounded-full'> Change Karo </button>
      

    </div>
  )
}

export default Statea;