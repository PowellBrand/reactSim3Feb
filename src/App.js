import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="mainNav">
          <p className="navBtn">Helo</p>
          <p className="navBtn">home</p>
          <p className="navBtn">search</p>
          <p className="navBtn">Dashboard</p>
          <p className="navBtn">Logout</p>
        </nav>
      </div>
    );
  }
}

export default App;
