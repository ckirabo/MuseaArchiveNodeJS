import React, { Component } from 'react';
import './Css/NavBar.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import HomePageContent from './HomeJs/HomePageContent.js';
import MuseusmsContent from './MuseumsJs/museumPageContent.js';


class NavBar extends Component {

    constructor() {
        super();
        this.state = {
         homeLinkText: "Home",
         museumsLinkText: "Museums"
        }
    }



    render() {
        return (


       <div>

        <Router>
        <nav>
        <div >
        <ul className="topNav" id="topNavJS">
        <Link to ="/">{this.state.homeLinkText}</Link>
        <Link to ="/museums">{this.state.museumsLinkText}</Link>                             
        </ul>
        <Route exact path="/" component={HomePageContent}/>                                           
        <Route exact path="/museums" component={MuseusmsContent}/>  
        </div>
        </nav> 
        </Router>
        </div>
        );
    }
}
export default NavBar;