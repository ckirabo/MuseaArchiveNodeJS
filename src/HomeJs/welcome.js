import React, { Component } from 'react';

import '../Css/welcome.css';

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

         <div id="paragraph">
		<p>{this.state.info}</p>
		 </div>

		 <input type="button" value="Show Me More!" id="introButton"/>
		</div>
		</div>
		);
}

}

export default Welcome;