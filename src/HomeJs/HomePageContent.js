import React, { Component } from 'react';
import Welcome from './welcome.js';

import ArrayData from './arrayData.js';

class HomePageContent extends Component {

constructor(){
	super();

}

  render() {
    return (
      <div>
      <Welcome/>
      </div>
    );
  }
}

export default HomePageContent;

