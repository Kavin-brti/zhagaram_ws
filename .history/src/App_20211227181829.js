import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Nav from './Components/nav'
import Header from "./Components/header";
import About from "../src/Pages/About";
import Footer from "./Components/Footer"
function App() {

  return (
    <Router>
    <div className="App">
          <Nav/>
          <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route exact path="/about" element={<About/>}/>
          </Routes>
       
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
