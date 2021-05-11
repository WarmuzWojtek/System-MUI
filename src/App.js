import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import { theme } from './theme'
import Navigation from './Components/Navigation/Navigation'
import About from './Components/About/About'
import Waste from './Components/Waste/Waste'
import Consultant from './Components/Consulting/Consulting'
import Header from './Components/Header/Header'
import 'fontsource-roboto';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <About/>
      <Waste/>
      <Consultant/>
     
    </div>
    </ThemeProvider>
  );
}

export default App;
