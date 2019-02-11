import React, { Component } from 'react';
import CreateCard from './createCard.js';

import '../Css/MuseumsPage.css';

class CatergoryWidget extends Component {

constructor(){
super();
this.state = {

	title : "Categories",
	art : "Art Museums",
	science : "Science Museums",
	history : "History Museums",


	    dummyData : [{id: 1, name: "Science Museum", adddress1: "1 address", postCode: "M6 123", email: "s@gmail.com", type: "science"},
        {id: 2, name: "History Museum", adddress1: "2 address", postCode: "M5 F23", email: "H@gmail.com", type: "History"},
        {id: 3, name: "War Museum", adddress1: "3 address", postCode: "M69 1A3", email: "WR@gmail.com",type: "History"},
        {id: 4, name: "Police Museum", adddress1: "4 address", postCode: "M12 1F3", email: "police@gmail.com", type: "History"},
        {id: 5, name: "Art Museum", adddress1: "5 address", postCode: "M9 GS3", email: "Art@gmail.com", type: "art"} ],


        newArray : [{id: 1, name: "Science Museum", adddress1: "1 address", postCode: "M6 123", email: "s@gmail.com", type: "science"},
        {id: 2, name: "History Museum", adddress1: "2 address", postCode: "M5 F23", email: "H@gmail.com", type: "History"},
        {id: 3, name: "War Museum", adddress1: "3 address", postCode: "M69 1A3", email: "WR@gmail.com",type: "History"},
        {id: 4, name: "Police Museum", adddress1: "4 address", postCode: "M12 1F3", email: "police@gmail.com", type: "History"},
        {id: 5, name: "Art Museum", adddress1: "5 address", postCode: "M9 GS3", email: "Art@gmail.com", type: "art"} ],

        checked : true


	   

}

 this.artMuseums= () => {

      //initial museums removed
        if(this.state.checked === true){  
        
         this.setState({

         checked : !this.state.checked,
	     newArray : this.state.dummyData.filter(
         (museum) => !museum.type.toLowerCase().includes("art"))
       
        });
         
         }


         //add museums back again 
        if(this.state.checked !== true){  
        
         this.setState({

         checked : !this.state.checked,
	     newArray : this.state.dummyData.filter(
         (museum) => museum.type.toLowerCase().includes("art"))
       
        });
         
         }

	    }




	     this.scienceMuseums= () => {

      //initial museums removed
        if(this.state.checked === true){  
        
         this.setState({

         checked : !this.state.checked,
	     newArray : this.state.dummyData.filter(
         (museum) => !museum.type.toLowerCase().includes("science"))
       
        });
         
         }


         //add museums back again 
        if(this.state.checked !== true){  
        
         this.setState({

         checked : !this.state.checked,
	     newArray : this.state.dummyData.filter(
         (museum) => museum.type.toLowerCase().includes("science"))
       
        });
         
         }

	    }

}



render(){

	return(

        <div>
		<div className="categoryWidget">
		    <div className="categoryTitle">
                  <h2 id="category">{this.state.title}</h2>
           </div>
                <div className="categoryBody">
                            <ul className="categoryList">
                                   <li><lable> <input type="checkbox" id="artBox" defaultChecked={this.state.checked} onChange={this.artMuseums}/>{this.state.art}</lable></li> 
                                    <li><lable> <input type="checkbox" id="artBox" defaultChecked={this.state.checked} onChange={this.scienceMuseums}/>{this.state.science}</lable></li>         
                           </ul>
                </div>

		</div>


          <div className="columnLeft">
          <CreateCard museums = {this.state.newArray}/>
          </div>
      </div>

		);
}

}

export default CatergoryWidget;