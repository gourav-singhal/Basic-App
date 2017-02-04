/**imports */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Stateless from './Stateless';

/**component */
class App extends Component {
  render() {
    var data = (true) ? (<div><p>Welcome</p>
    <p>Bye</p></div>) : (<p>Logged Out</p>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <Home firstName={"Gourav"} parentFunction={this.parentFunction} />
         
        
        <div><p>Outside main div</p></div>
        {2+2}
        <br/>
        {4+5}
        {data}
        <Stateless />
      </div>
      
    );
  }

  parentFunction(data)
  {
    console.log(data);
  }
  parentFunction1()
  {
    alert("hello")
  }
}

/**export */
export default App;
