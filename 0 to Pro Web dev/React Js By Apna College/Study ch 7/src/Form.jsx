import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [userName, setUsername] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  let handleUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <label htmlFor="FullName">Full Name</label>
      <input
        placeholder="Enter Full Name"
        type="text"
        value={fullName}
        onChange={handleNameChange}
        id="FullName"
      />
        <br /> <br />
      <label htmlFor="username">User Name</label>
      <input
        placeholder="Enter Full Name"
        type="text"
        value={userName}
        onChange={handleUsername}
        id="username"
      />
      <button>Submit </button>
    </form>
  );
}
