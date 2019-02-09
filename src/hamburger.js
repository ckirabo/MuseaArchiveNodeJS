import React, { Component } from 'react';

class HamburgerMenu extends Component {
    constructor() {
    	super();

    

    }

/*
	myFunction() ={
        x.classList.toggle("change");
     }
*/
    render() {
        return (

            <div>
  <div className="container" onClick="myFunction(this)">
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
  </div>
        	</div>
        );
    }
}

export default HamburgerMenu;