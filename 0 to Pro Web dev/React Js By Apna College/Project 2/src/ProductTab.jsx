import React from "react";
import Product from "./Product";

function ProductTab() {
 

  return (
    <>
      <Product title="Phone" price={53000} />

      <Product title="Laptop" price={30000} />
      <Product title="pen" price={1000} />
    </>
  );
}

export default ProductTab;
