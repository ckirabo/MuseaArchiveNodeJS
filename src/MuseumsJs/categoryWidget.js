import React, { Component } from 'react';

import '../Css/MuseumsPage.css';

class CatergoryWidget extends Component {

constructor(){
super();
this.state = {

	title : "Categories",
	art : "Art Museums",
	science : "Science Museums",
	history : "History Museums"

}

}



render(){

	return(

		<div className="categoryWidget">
		    <div className="categoryTitle">
                  <h2 id="category">{this.state.title}</h2>
           </div>
                <div className="categoryBody">
                            <ul className="categoryList">
                                   <li><lable> <input type="checkbox" /> {this.state.title}</lable></li>
                                   <li><lable> <input type="checkbox" /> {this.state.art}</lable></li>
                                   <li><lable> <input type="checkbox" /> {this.state.science}</lable></li>
                                   <li><lable> <input type="checkbox" /> {this.state.history}</lable></li>

                            </ul>
                </div>

		</div>


		);
}

}

export default CatergoryWidget;