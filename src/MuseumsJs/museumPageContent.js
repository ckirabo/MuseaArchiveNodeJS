import React, { Component } from 'react';
import Searchbar from './searchBar.js';
import CategoryWidget from '../categoryWidget.js';


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
            <h1>{this.state.header}</h1>

              <div class="row">

                  <Searchbar/>
            
             </div>
        </div>

        );
    }


}

export default MuseusmsContent;