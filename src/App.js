import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import './components/dashboard/dashboard.css';

class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <nav className="mainNav">
          <p className="navBtn">Helo</p>
          <p className="navBtn">home</p>
          <p className="navBtn">search</p>
          <p className="navBtn">Dashboard</p>
          <p className="navBtn">Logout</p>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
