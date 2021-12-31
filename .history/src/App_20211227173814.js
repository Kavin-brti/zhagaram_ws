import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router'
import Nav from './Components/nav'
import Header from "./Components/header";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer"
function App() {

  return (
    <Router>
    <div className="App">
          <Nav/>
          <Header/>
          <Carousel/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
