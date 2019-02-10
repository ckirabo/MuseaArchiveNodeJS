import React, { Component } from 'react';



class Welcome extends Component {

constructor(){
super();

this.state = {
	message : "Welcome!",
	info : "Welcome musea Archives. Here you can view all the different museums Manchester has to offer."
}
}



render(){

	return(
		<div>
		<div className="WelcomeCard">
		<h1>{this.state.message}</h1>

		<p>{this.state.info}</p>

		</div>
		</div>
		);
}

}

export default Welcome;