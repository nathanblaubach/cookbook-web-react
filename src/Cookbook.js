import React, { Component } from 'react';
import logo from './logo.svg';
import './Cookbook.css';

class Cookbook extends Component {
  render() {
    return (
      <div className="Cookbook">
        <header className="Cookbook-header">
          <img src={logo} className="Cookbook-logo" alt="logo" />
          <h1 className="Cookbook-title">Cookbook</h1>
        </header>
        <p className="Cookbook-intro">
          The zillionth cookbook app to be made, because why not?
        </p>
      </div>
    );
  }
}

export default Cookbook;
