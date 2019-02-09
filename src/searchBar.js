import React, { Component } from 'react';

import './Css/MuseumsPage.css';

class Searchbar extends Component {

    constructor(){
		super();


		}
	

	render(){
	return (
	      <div className="searchWidget">
           <input type="text" placeholder="Search .." id="searchBoxId"/>
           <input type="button" value="Go!" id="searchGo" />
          </div>
	);
	}

}

export default Searchbar;