import React, { Component } from 'react';
import axios from 'axios';

import CreateCard from './MuseumsJs/createCard.js';

import SearchBar from './MuseumsJs/searchBar.js';

import './Css/MuseumsPage.css';

class Request extends Component {

 constructor(props){
        super(props);
        this.state = {
            rawData:[],
            filtered:[]
        
        }

        this.fitlerHandler = this.fitlerHandler.bind(this)

      
}

 
componentDidMount(){
  
        axios.get('http://192.168.1.104:9090/Museums/AllMuseums')
        .then(json => json.data.map(data => (
        {
        	id : data.museum_id , 
        	name : data.name, 
        	address1 : data.address_Line_1 ,
	        postcode : data.postcode, 
	        admission : data.admission,
	        contactNo : data.contact_Number,
	        contactEmail : data.contact_Email,
	        link : data.website
        })))
        .then(newData => this.setState({rawData:newData , filtered:newData }))
        .catch(error => alert(error))


        
      }



    fitlerHandler() {

    	 if(document.getElementById("searchBoxId").value === ""){


          this.setState({
           
	        filtered : this.state.rawData

         });

     	}

          else{   


          this.setState({
           
	        filtered : this.state.filtered.filter((museum) => museum.name.toLowerCase().includes(document.getElementById("searchBoxId").value.toLowerCase()))

         });

          }

  
      }


render(){

  

	return(

		      <div>

		      <div>
              <SearchBar fitlerHandler = {this.fitlerHandler}/>
              
              </div>
             
              <CreateCard museums = {this.state.filtered}/>


             </div>
		);
}



}


export default Request;