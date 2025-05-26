function printhello() {
  console.log("Helloo");
}


function printbye() {
  console.log("bye");
}

function handleClick(event){
  console.log("Heloo");
  console.log(event);
}


export default function Button() {
  return (
    // event Click is Here for you

    <div>
      <button onClick={printhello}>Click me ! </button>
      <p onClick={printbye}>This is Test </p>

       {/* Event Obect is here example   */}


    <button onClick={handleClick}>hello </button>





    </div>
  );
}
