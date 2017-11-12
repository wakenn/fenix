// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import styles from './Home.css';

export default class NavBar extends Component {
  render() {
    return (
    <div className="window">
      <nav className="dragWindowArea">
        <div className="sub-15">
          <img src="img/path-logo.png" />
        </div>
        <div className="sub-50">
          <ul>
            <li><a href="#home">Dashboard</a></li>
            <li><a href="#news">Contacts</a></li>
            <li><a href="#contact">Conversations</a></li>
            <li><a href="#about">Audience Automation</a></li>
          </ul>
        </div>
        <div className="sub-35" align="right">
          <input type="text" name="" placeholder="Search..." />
          <img className="userIcon" src="img/userIcon.jpg" />
        </div>
      </nav>
    </div>
    );
  }
}
