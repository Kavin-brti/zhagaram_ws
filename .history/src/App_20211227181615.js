import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Nav from './Components/nav'
import Header from "./Components/header";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer"
function App() {

  return (
    <Router>
    <div className="App">
          <Nav/>
          <Routes>
            <Route path="/">
              <Header/>
              <Carousel/>
            </Route>
          </Routes>
       
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
