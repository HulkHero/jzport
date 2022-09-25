
import './App.css';
import Header from './components/Headers'
import theme from "./components/theme"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {BrowserRouter as Router} from 'react-router-dom'
import Contact from './components/Contact/Contact'
function App() {
  return (
   <>

   <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <Router>
   <Header/>
   
   <Contact></Contact>
   </Router>
   </ThemeProvider>
   </>
  );
}

export default App;
