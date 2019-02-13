import React, { Component } from 'react';
import CreateCard from '../MuseumsJs/createCard.js';
import '../Css/welcome.css';
import '../Css/cards.css';

class BottomContent extends Component {

constructor(){
super();

this.state = {

	rawData : [ {id : 1 , name : "Art Museum", postcode : "SBW"},
	            {id : 2, name : "Science Museum", postcode : "SBF"},
	            {id : 3, name : "Clown Museum", postcode: "ASA"}],

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