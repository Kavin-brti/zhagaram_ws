import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Nav from './Components/nav'
import Header from "./Components/header";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer"
function App() {

  return (
    <Router>
    <div className="App">
          <Nav/>
          <Switch>
            <Route path="/">
              <Header/>
              <Carousel/>
            </Route>
          </Switch>
       
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
