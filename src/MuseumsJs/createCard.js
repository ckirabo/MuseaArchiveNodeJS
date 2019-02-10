import React, { Component } from 'react';
import '../Css/MuseumsPage.css';

class CreateCards extends Component {
//hi

render(){



let output = this.props.museums.map(
	(museums) => 
	{
		return(
			<div key={museums.id} className="cards">
			<h2>{museums.name}</h2>
			<ul>
			<li>{museums.address1}</li>
			<li>{museums.postCode}</li>
			<li>{museums.email}</li>
			</ul>
			</div>
			);
	}
	);


	return(

		<div className="locationForCards">
         {output}
		</div>

		);
}

}

export default CreateCards;