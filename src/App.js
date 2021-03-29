import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from './components/ErrorBoundary'
import Chart from './components/Chart'
import Deck from './components/Deck'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <ErrorBoundary>
        <Deck style={{width: '20rem', height: '100%'}} title="Type of Charts" subtitle="Result"/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
