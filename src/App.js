import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/";
import About from "./Pages/About/";
import Portfoilo from "./Pages/Portfoilo/";
import Contact from "./Pages/Contact/";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
       </Router>
      </div>
    );
  }
}

export default App;
          //these are the other two pages that i cut out of the app 

          //<Route exact path="/portfoilo" component={Portfoilo} />
          // <Route exact path="/about" component={About} />          
          // <Route exact path="/contact" component={Contact} />
