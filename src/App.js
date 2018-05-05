import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/";
import About from "./Pages/AboutPg/";
import MyWork from "./Pages/MyWork/";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfoilo" component={MyWork} />
          <Route exact path="/about" component={About} />          
        </div>
       </Router>
      </div>
    );
  }
}

export default App;
          //these are the other two pages that i cut out of the app 

