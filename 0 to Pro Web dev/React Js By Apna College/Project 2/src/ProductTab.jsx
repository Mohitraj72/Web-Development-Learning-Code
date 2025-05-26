import Product from "./Product";

function ProductTab() {

let style = {
  display: "flex",
 flexWrap: "wrap",
 justifyContent: "center",
 alignItems: "center",
 gap: "4px"
}

  return (
    <div style={style}>
      
      <Product title="Logitech  MX Master" idx={0}/>
      <Product title="Apple Pencil (2nd Gen)"  idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Portnics Toad 23" idx={3}/>
    </div>
  );
}

export default ProductTab;
