import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Nav from './Components/nav'
import Header from "./Components/header";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Pongal from '../src/Pages/Pongal'
import Footer from "./Components/Footer"
function App() {

  return (
    <Router>
    <div className="App">
          <Nav/>
          <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/pongal" element={<Pongal/>}/>
          </Routes>
       
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
