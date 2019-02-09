import React, { Component } from 'react';


import './Css/MuseumsPage.css';

class CategoryWidget extends Component {

    constructor() {
        super();

        this.state = {
        	containerName : "Categories", 
        	type1 : "Art"
        }

    }


    render() {
        return (
            <div class="categoryWidget">
                <div class="categoryTitle">
                     <h2 id="category">{this.state.containerName}</h2>
                           </div>
                            <div class="categoryBody">
                            <ul class="categoryList">
                                <li><a href="">{this.state.type1}</a></li>
                            </ul>
                           </div>
                </div>
        
        );
    }

}

export default CategoryWidget;