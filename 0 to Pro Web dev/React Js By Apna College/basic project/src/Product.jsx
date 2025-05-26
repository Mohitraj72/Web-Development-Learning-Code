import React from "react";
import "./Product.css";

function Product({ title, price, features }) {
  // const list = features.map((features) => <li>{feature}</li>);

  let isDiscount = price > 30000;
  let style = { backgroundColor: isDiscount ? "yellow" : "pink" };

  return (
    <div className="Product" style={style}>
      <h5>{title} </h5>
      <p>Price: {price}</p>
      {/* <p>
          {features.map((features) => (
            <li>{features}</li>
          ))}
        </p> */}
      {isDiscount && <p> Discount of 5%</p>}
    </div>
  );
}

export default Product;
