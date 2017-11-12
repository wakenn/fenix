// @flow
import React, { Component } from 'react';
import Social from '../components/Social';
import NavBar from '../components/NavBar';

export default class SocialPage extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <Social />
    </div>
    );
  }
}
