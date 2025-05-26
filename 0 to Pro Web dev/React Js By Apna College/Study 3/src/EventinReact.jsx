function printhello() {
  console.log("Helloo");
}

function printbye() {
  console.log("bye");
}
export default function Button() {
  return (
    <div>
      <button onClick={printhello}>Click me ! </button>
      <p onClick={printbye}>This is Test </p>
    </div>
  );
}
