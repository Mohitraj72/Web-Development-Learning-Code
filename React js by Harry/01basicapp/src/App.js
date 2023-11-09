
import "./App.css";


function App() {
  return (
    <>
      <nav>
        <ol>
          <li>
            <a
              target="-blank"
              href="https://getbootstrap.com/docs/5.3/forms/overview/?"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ol>
      </nav>

      <div class="container-sm">100% wide until small breakpoint</div>
      <div class="container-md">100% wide until medium breakpoint</div>
      <div class="container-lg">100% wide until large breakpoint</div>
      <div class="container-xl">100% wide until extra large breakpoint</div>
      <div class="container-xxl">
                                100% wide until extra extra large breakpoint
      </div>
    </>
  );
}

export default App;
