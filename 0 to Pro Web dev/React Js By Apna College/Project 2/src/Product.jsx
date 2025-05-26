import React from "react";
import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,467", "11,900", "1,500", "599"];
  let newPrices = ["12,222", "9,999", "899", "278"];
  let description = [
    "8000 DPI",
    "intutive Surface",
    "designes for ipad Pro",
    "wireless",
  ];

  return (
    <div className="Product">
      <h3>{title} </h3>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
