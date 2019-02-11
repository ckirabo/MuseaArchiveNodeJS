import React, { Component } from 'react';
import CreateCard from '../MuseumsJs/createCard.js';

class ArrayData extends Component {

constructor(){
	super();
	this.state = { 

		dummyData : [{id: 1, name: "Science Museum", adddress1: "1 address", postCode: "M6 123", email: "s@gmail.com"},
        {id: 2, name: "History Museum", adddress1: "2 address", postCode: "M5 F23", email: "H@gmail.com"},
        {id: 3, name: "War Museum", adddress1: "3 address", postCode: "M69 1A3", email: "WR@gmail.com"},
        {id: 4, name: "Police Museum", adddress1: "4 address", postCode: "M12 1F3", email: "police@gmail.com"},
        {id: 5, name: "Art Museum", adddress1: "5 address", postCode: "M9 GS3", email: "Art@gmail.com"} ]
}

//Randome Number generator function to select an object from an array and display it.
}

render(){

return(
	<div>
	{this.state.dummyData}
	</div>
	);
}
}


export default ArrayData;