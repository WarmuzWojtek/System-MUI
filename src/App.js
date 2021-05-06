import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import { theme } from './theme'
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header'
import 'fontsource-roboto';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
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
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
