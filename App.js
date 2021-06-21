import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path='/booking/:name'>
            <Booking/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;