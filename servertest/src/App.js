import logo from './logo.svg';
import './App.css';

function App() {

  function absolute() {
    fetch("/get").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data.message)
    })
  }

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
          Learn React
        </a>
        <button onClick={() => absolute()}>Fetch data absolutt</button>
      </header>
    </div>
  );
}

export default App;
