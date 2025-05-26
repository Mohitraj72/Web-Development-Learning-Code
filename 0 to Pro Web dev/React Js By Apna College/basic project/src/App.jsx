import "./App.css";
import Title from "./Title";
import Product from "./Product";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";

function App() {
  return (
    <>
      <MsgBox username="Mohit" textColor="Yellow" />
      <ProductTab />
      <Title />
      <button>Hello </button>
    </>
  );
}

export default App;
