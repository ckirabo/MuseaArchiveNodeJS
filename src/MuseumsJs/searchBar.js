import React, { Component } from 'react';
import CreateCard from './createCard.js';
import CategoryWidget from './categoryWidget.js';

import '../Css/MuseumsPage.css';


class Searchbar extends Component {

    constructor(){
		super();


		this.state = { 
        dummyData : [{id: 1, name: "Science Museum", adddress1: "1 address", postCode: "M6 123", email: "s@gmail.com"},
        {id: 2, name: "History Museum", adddress1: "2 address", postCode: "M5 F23", email: "H@gmail.com"},
        {id: 3, name: "War Museum", adddress1: "3 address", postCode: "M69 1A3", email: "WR@gmail.com"},
        {id: 4, name: "Police Museum", adddress1: "4 address", postCode: "M12 1F3", email: "police@gmail.com"},
        {id: 5, name: "Art Museum", adddress1: "5 address", postCode: "M9 GS3", email: "Art@gmail.com"} ],

        newArray : []

        }

        this.filterMuseumsByName = () => {
        this.setState({
	     newArray : this.state.dummyData.filter(
         (museum) => museum.name.toLowerCase().includes(document.getElementById("searchBoxId").value.toLowerCase()
		))
        });

	    }

		}



	

	render(){
	return (
		<div>

           <div className="columnRight">		
	         <div className="searchWidget">
           <input type="text" placeholder="Search.." id="searchBoxId" onChange={this.filterMuseumsByName}/>
           <input type="button" value="Go!" id="searchGo" onClick={this.filterMuseumsByName} />
          </div>
              <CategoryWidget/>
              </div>

         
          <div className="columnLeft">
          <CreateCard museums = {this.state.newArray}/>
          </div>
          
     </div>

	);
	}

}

export default Searchbar;