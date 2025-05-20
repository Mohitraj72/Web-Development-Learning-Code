import React, { useState } from 'react';

function Stateii() {
    const [val, setVal] = useState ({name: "Mohit", age: 24});


  return (
    <div>
        <button onClick={async ()=> {
            await setVal({...val, gender : "male"});
            await console.log(val);
        }}> Click </button>
    </div> cccaa
  )
}

export default Stateii;