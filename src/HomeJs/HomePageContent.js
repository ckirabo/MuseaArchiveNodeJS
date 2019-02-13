import React, { Component } from 'react';
import Welcome from './welcome.js';
import BottomContent from './bottomContent.js';

class HomePageContent extends Component {

  render() {
    return (
      <div>
      <Welcome/>
      <BottomContent/>
      </div>
    );
  }
}

export default HomePageContent;

