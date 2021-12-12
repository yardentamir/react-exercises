import logo from "./logo.svg";
import "./App.css";
// import JsxBasics from "./pages/2.2-jsx-basics/2.2-jsx-basics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
