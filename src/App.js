import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import { theme } from './theme'
import About from './Components/About/About'
import Waste from './Components/Waste/Waste'
import Consultant from './Components/Consulting/Consulting'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact.jsx'
import 'fontsource-roboto';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <About/>
      <Waste/>
      <Consultant/>
      <Contact/>
    </div>
    </ThemeProvider>
  );
}

export default App;
