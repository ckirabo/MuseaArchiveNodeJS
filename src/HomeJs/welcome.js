import React, { Component } from 'react';

import '../Css/welcome.css';

class Welcome extends Component {

constructor(){
super();

this.state = {
	message : "Musea Archives!",
	info : "Welcome Musea Archives. Here you can view all the different museums Manchester has to offer."
}
}


render(){

	return(
		<div>
		<div className="WelcomeCard">
		<h1>{this.state.message}</h1>

         <div id="paragraph">
		 <p>{this.state.info}</p>
		 </div>

		</div>
		</div>
		);
}

}

export default Welcome;