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
	clicked : true,

	paragraph : "So you've probably noticed this button havent you why not give it a click.",
	information : "This website is brought to you to make it easier to find what musuems you can visit on your next day off. If you click the links you will be transported to the museums website. I hope you enjoy your visit!"
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



render(){
console.log(this.state.rawData);
	return(

		<div className="bottomContent">
		<div className="left">
		<p>{this.state.paragraph}</p>
		<p>{this.state.information}</p>
		<input type="button" value="Totaly Random" id="random" onClick={this.random}/>
		</div>
        
		<div className="right">
		<CreateCard museums = {this.state.display} />
		</div>
		</div>

		);
}

}

export default BottomContent;