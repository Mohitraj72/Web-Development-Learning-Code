function handleFormsubmit(event) {
    event.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormsubmit}>
      <input type="text" placeholder="Write something" />
      <button>Submit </button>
    </form>
  );
}
