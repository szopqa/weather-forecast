import React, { Component } from 'react';
import './App.css';

import Navigationbar from './Components/Header/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Navigationbar/>
        </div>
        <div className="App-content">
            ad
        </div>
      </div>
    );
  }
}

export default App;
