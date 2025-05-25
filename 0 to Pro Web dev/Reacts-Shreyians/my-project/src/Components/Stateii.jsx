import React, { useState } from 'react';

function Stateii() {
    const [val, setVal] = useState ({name: "Mohit", age: 24});


  return (
    <div>
        <button onClick={()=> {
             setVal({...val, gender : "male"});
             console.log(val);
        }}> Click </button>
    </div> 
  )
}

export default Stateii;