import React, { Component } from 'react';
import Searchbar from './searchBar.js';



import '../Css/MuseumsPage.css';


class MuseusmsContent extends Component {
    constructor() {
        super();

        this.state = {
            header: "Museum List"
        }
    }

    render() {
        return (

        <div className="pageContent">

            <h1 id="headerMuseum">{this.state.header}</h1>

            
                  <Searchbar/>
                  
          
       
        </div>

        );
    }


}

export default MuseusmsContent;