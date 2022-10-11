// import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import FormAdd from './components/FormAdd';

function App() {
  return (
    <div className="App">
        <Layout></Layout>
        <FormAdd/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nam Edit <code>src/App.js</code> and save to reload  1.
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
    </div>
  );
}

export default App;
