// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Social.css';

export default class Social extends Component {
  render() {
    return (
    <div className="window">
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Welcome to Social</h2>
          <Link to="/">to Home</Link>
        </div>
      </div>
    </div>
    );
  }
}
