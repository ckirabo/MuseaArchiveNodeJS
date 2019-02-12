import React, { Component } from 'react';


import Requests from '../requests.js';

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

                  <Requests/>
       
        </div>

        );
    }


}

export default MuseusmsContent;