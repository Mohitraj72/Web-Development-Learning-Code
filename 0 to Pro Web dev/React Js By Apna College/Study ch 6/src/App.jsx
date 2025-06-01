import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";

function App() {
  return (
    <>
      {/* <Lottery/> */}
      {/* <Ticket ticket = {[0,1,2]}/> */}
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
