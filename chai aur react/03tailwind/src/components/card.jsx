import React from "react";

function Card({username }) {
    console.log(username);
    


  return (
    <div className="card w-96 bg-orange-500 rounded-xl text-neutral-content mt-5">
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {username}</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
