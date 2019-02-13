import React, { Component } from 'react';
import CreateCard from '../MuseumsJs/createCard.js';
import '../Css/welcome.css';
import '../Css/cards.css';

import axios from 'axios';


class BottomContent extends Component {

constructor(){
super();

this.state = {

	rawData : [],

	display : [],
	clicked : true
}

this.random =  () => {
     let rawDataLength = this.state.rawData.length;
     let number = Math.floor(Math.random() * rawDataLength );



  this.setState({
       display : [this.state.rawData[number]]
  });


 }
 

}




componentDidMount(){
        //put into data
        axios.get('http://localhost:9090/Museums/AllMuseums')
        .then(json => json.data.map(data => (
        {
        	id : data.museum_id , 
        	name : data.name, 
        	address1 : data.address_Line_1 ,
	        postcode : data.postCode, 
	        admission : data.admission,
	        contactNo : data.contact_Number,
	        contactEmail : data.contact_Email,
	        link : data.website
        })))
        .then(newData => this.setState({rawData:newData , filtered:newData }))
        .catch(error => alert(error))


        
      }



render(){
console.log(this.state.rawData);
	return(

		<div className="bottomContent">
		<div className="left">
		<p>"Hi this is random text about this website. Press the button for a ranom museum information yay"</p>
		<input type="button" value="Totaly Random" id="random" onClick={this.random}/>
		</div>

		<div className="right">
		<CreateCard museums ={this.state.display} />
		</div>
		</div>

		);
}

}

export default BottomContent;