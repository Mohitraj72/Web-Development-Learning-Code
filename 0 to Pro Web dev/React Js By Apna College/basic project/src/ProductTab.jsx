import React from "react";
import Product from "./Product";

function ProductTab() {
  let features = ["hi-tech", "durable", "fast"];
  // let options2 = {a: "hi-tech", b:"durable", c:"fast" };

  return (
    <>
      <Product title="Phone" price={53000} />

      <Product title="Laptop" price={30000} />
      <Product title="pen" price={1000} />
    </>
  );
}

export default ProductTab;
