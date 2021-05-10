import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import { theme } from './theme'
import About from './Components/About/About'
import Waste from './Components/Waste/Waste'
import Consultant from './Components/Consulting/Consulting'
import Header from './Components/Header/Header'
import Documents from './Components/Documents/Documents.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import {ViewportProvider} from './Hook/useViewport'
import 'fontsource-roboto';


function App() {
  return (
    <ViewportProvider>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <About/>
      <Waste/>
      <Consultant/>
      <Documents/>
      <Contact/>
      <Footer/>
    </div>
    </ThemeProvider>
    </ViewportProvider>
  );
}

export default App;
